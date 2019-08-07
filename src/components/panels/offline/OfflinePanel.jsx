import React from 'react';
import { observable, computed, reaction } from 'mobx';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import Button from '../../common/Button';
import FileUpload from './FileUpload.jsx';
import { TileHelpers, IndexedDBHelpers } from 'arcgis-offline-tiles';
import { formatBytes } from '../../../utils/fileSize';
import { callDisposer } from '../../../utils/mobxDisposerHelper';
import { ErrorString, IconWrapper, PanelTitle, PanelWrapper } from '../elements';
import { fontColor, panelBackgroundColor } from '../../../styles/style-constants';
import Icon from '../../common/Icon';

const ZOOM_STEP = 3;
const uploadTypes = {
    FILE: Symbol('file'),
    DB: Symbol('db')
};

@inject('mapStore')
@observer
class OfflineSettingsPanel extends React.Component {

    @observable minLevel;
    @observable maxLevel;
    @observable tilesSize = 0;
    @observable leftSpace;
    @observable stopRequest = false;
    @observable isLayerInIndexedDB = false;
    disposer;

    constructor(props) {
        super(props);
        this.setInitialZoomSettings();
        this.updateTileCountEstimation();
    }

    setInitialZoomSettings() {
        if (this.props.mapStore.currentZoom - ZOOM_STEP >= this.basemapMinZoom) {
            this.minLevel = this.props.mapStore.currentZoom - ZOOM_STEP;
        } else {
            this.minLevel = this.basemapMinZoom;
        }
        if (this.props.mapStore.currentZoom + ZOOM_STEP <= this.basemapMaxZoom) {
            this.maxLevel = this.props.mapStore.currentZoom + ZOOM_STEP;
        } else {
            this.maxLevel = this.basemapMaxZoom;
        }
    }

    async componentDidMount() {
        this.isLayerInIndexedDB = await this.basemap.isSavedToIndexedDB();
        reaction(() => this.props.mapStore.currentZoom, (newZoom, reaction) => {
            if (this.props.mapStore.modifiedBasemapTitle) {
                this.disposer = reaction;
                this.updateTileCountEstimation();
            }
        });
    }

    componentWillUnmount() {
        callDisposer(this.disposer);
        this.disposer = null;
        this.props.mapStore.clearModifiedBasemap();
    }

    @computed
    get isEnoughLeftSpace() {
        if (this.leftSpace && !isNaN(this.leftSpace.left)) {
            return this.leftSpace.left - this.tilesSize > 0;
        }
        return true;
    }

    cancelRequest = () => {
        this.stopRequest = true;
    };

    async setInitialStopRequest() {
        if (this.stopRequest) {
            await this.basemap.deleteAllTiles();
            this.props.mapStore.setLoadingBasemapProgress(this.basemap.title, { percent: 0, done: true });
            this.stopRequest = false;
        }
    }

    getUploadPercentFromIndexedDb() {
        return this.getUploadPercentByType(uploadTypes.DB);
    }

    getUploadPercentFromFile() {
        return this.getUploadPercentByType(uploadTypes.FILE);
    }

    getUploadPercentByType(type) {
        const progress = this.props.mapStore.loadingProgressMap.get(this.basemap.title);
        if (progress && !progress.done && progress.type === type) {
            return progress.percent;
        }
        return 0;
    }

    @computed
    get basemap() {
        return this.props.mapStore.map.layers.find(item => item.title === this.props.mapStore.modifiedBasemapTitle);
    }

    get basemapMinZoom() {
        return this.basemap.tileInfo.lods[0].level;
    }

    get basemapMaxZoom() {
        return this.basemap.tileInfo.lods[this.basemap.tileInfo.lods.length - 1].level;
    }

    setBasemapLastTileUrl() {
        const currentBasemap = this.props.mapStore.map.layers.find(item => item.title === this.props.mapStore.currentBasemapTitle);

        const { level, col, row } = TileHelpers.getLevelRowColFromURL(currentBasemap.type, currentBasemap.lastTileUrl);
        if (level && col && row) {
            this.basemap.lastTileUrl = this.basemap.getTileUrl(level, row, col).split('?')[0];
        }
    }

    handleUploadToIndexedDB = async () => {
        const title = this.basemap.title; //binding the context
        this.updateTileCountEstimation();
        const gen = this.basemap.uploadTilesToIndexedDb(this.minLevel, this.maxLevel, this.props.mapStore.view.extent, progress => this.props.mapStore.setLoadingBasemapProgress(title, {
            ...progress,
            type: uploadTypes.DB
        }));
        let result = await gen.next();
        while (!this.stopRequest && !result.done) {
            result = await gen.next();
        }
        if (result.done) {
            this.isLayerInIndexedDB = true;
        }
        await this.setInitialStopRequest();
    };

    handleChangeMinLevel = (e) => {
        const newMin = parseInt(e.target.value);
        if (newMin <= this.maxLevel) {
            this.minLevel = newMin;
            this.updateTileCountEstimation();
        }
    };

    handleChangeMaxLevel = (e) => {
        const newMax = parseInt(e.target.value);
        if (newMax >= this.minLevel) {
            this.maxLevel = parseInt(e.target.value);
            this.updateTileCountEstimation();
        }
    };

    handleRemoveSavedTiles = async () => {
        await this.basemap.deleteAllTiles();
        this.isLayerInIndexedDB = false;
        this.basemap.goOnline();
    };

    updateTileCountEstimation = async () => {
        if (!this.basemap.lastTileUrl && this.basemap.title !== this.props.mapStore.currentBaseMap) {
            this.setBasemapLastTileUrl();
        }
        TileHelpers.getTileSizeFromMinMaxLevels(this.basemap, this.props.mapStore.view.extent, this.minLevel, this.maxLevel)
            .then(async ({ sizeBytes }) => {
                this.tilesSize = sizeBytes;
                this.leftSpace = await IndexedDBHelpers.getAvailableStorageSpace();
            });
    };

    saveToFile = () => {
        this.basemap.saveToFile(`${this.basemap.title}.csv`);
    };

    loadFromFile = async file => {
        const title = this.basemap.title; //binding the context
        const gen = await this.basemap.loadFromFile(file, progress => this.props.mapStore.setLoadingBasemapProgress(title, {
            ...progress,
            type: uploadTypes.FILE
        }));
        let result = await gen.next();
        while (!this.stopRequest && !result.done) {
            result = await gen.next();
        }
        if (result.done) {
            this.isLayerInIndexedDB = true;
        }
        await this.setInitialStopRequest();
    };

    render() {
        const { mapStore } = this.props;
        const percentDb = this.getUploadPercentFromIndexedDb();
        const percentFile = this.getUploadPercentFromFile();
        const disabledBtns = !!(percentDb || percentFile);
        const uploadButtonTitle = percentDb ? `Downloading... ${percentDb}` : 'Download';
        const uploadFileTitle = percentFile ? `Downloading... ${percentFile}` : 'Select a file';

        return (
            <PanelWrapper>
                <PanelTitle>
                    <IconWrapper onClick={mapStore.clearModifiedBasemap}>
                        <Icon name={'arrow_left'}/>
                    </IconWrapper>
                    {`Offline mode of map "${this.basemap.title}"`}
                </PanelTitle>
                <Block>
                    <Label>{'Min. zoom:'}</Label>
                    <Input type="number" title="max" min={this.basemapMinZoom}
                           max={this.basemapMaxZoom}
                           value={this.minLevel}
                           onChange={this.handleChangeMinLevel}
                           onKeyPress={e => e.preventDefault()}
                    />
                </Block>
                <Block>
                    <Label>{'Current zoom:'}</Label>
                    <ZoomLabel>{mapStore.currentZoom}</ZoomLabel>
                </Block>
                <Block>
                    <Label>{'Max. zoom:'}</Label>
                    <Input type="number" min={this.basemapMinZoom}
                           max={this.basemapMaxZoom}
                           value={this.maxLevel}
                           onChange={this.handleChangeMaxLevel}
                           onKeyPress={e => e.preventDefault()}
                    />
                </Block>
                <Block>
                    <Label>{'Size: '}</Label>
                    <Label align={'end'}>{formatBytes(this.tilesSize)}</Label>
                </Block>
                {!this.isEnoughLeftSpace && <Block>
                    <ErrorString>{`There is not enough free space to save offline maps. Left space: ${formatBytes(this.leftSpace.left)}`}</ErrorString>
                </Block>}
                <Block>
                    <OfflineButton onClick={this.handleUploadToIndexedDB}
                                   disabled={!this.isEnoughLeftSpace || disabledBtns}
                                   type={'standard'}>{uploadButtonTitle}</OfflineButton>
                    <OfflineButton onClick={this.saveToFile}
                                   disabled={!this.isLayerInIndexedDB || disabledBtns}
                                   type={'standard'}>{'Save to file'}</OfflineButton>
                </Block>
                <Block>
                    <FileUpload onUpload={this.loadFromFile}
                                title={uploadFileTitle}
                                disabled={disabledBtns}/>
                </Block>
                {disabledBtns && <Block>
                    <OfflineButton wide onClick={this.cancelRequest}
                                   type={'danger'}>{'Cancel downloading'}</OfflineButton>
                </Block>}
                {(this.isLayerInIndexedDB && !disabledBtns) && <EndBlock>
                    <OfflineButton type={'danger'}
                                   onClick={this.handleRemoveSavedTiles}
                                   wide>{'Remove saved map'}</OfflineButton>
                </EndBlock>}
            </PanelWrapper>
        )
    }

}

const Input = styled.input`
  font-size: 14px;
  padding: 0 10px;
  background: black;
  border: none;
  height: 24px;
  color: ${fontColor};
`;

const Label = styled.label`
  color:  ${fontColor};
  flex: 1;
  text-align: ${props => props.align === 'end' ? 'end' : 'start'};
`;

const ZoomLabel = styled(Input.withComponent('label'))`
  width: 60px;
  text-align: start;
  line-height: 24px;
`;

const Block = styled.div`
  background-color: ${panelBackgroundColor};
  display: flex;
  flex-shrink: 0;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  ${Button} {
    margin: 5px 2px;
  }
`;

const EndBlock = styled(Block)`
  flex-grow: 1;
  align-items: flex-end;
`;

const OfflineButton = styled(Button)`
  width: ${props => props.wide ? '100%' : '49%'};
  height: 42px;
`;

export default OfflineSettingsPanel;