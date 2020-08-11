import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { computed, observable, reaction, values } from 'mobx';
import { IndexedDBHelpers } from 'arcgis-offline-tiles';
import { IconWrapper, ListItem, ListTitle } from '../elements';
import Icon from '../../common/Icon';

@inject('mapStore')
@observer
export default class MapItem extends Component {

    @observable isLayerInIndexedDB = false;
    @observable isOnline = true;
    disposer;

    async componentDidMount() {
        if (this.basemap) {
            await this.setInitialState();
        } else {
            reaction(() => this.basemap, async (basemap, reaction) => {
                if (IndexedDBHelpers.isIndexedDBSupported()) {
                    await this.setInitialState();
                    this.disposer = reaction;
                }
            }, {delay: 1000});
        }
    }

    componentWillUnmount() {
        this.disposer && this.disposer.dispose();
    }

    async setInitialState() {
        this.isLayerInIndexedDB = await this.basemap.isSavedToIndexedDB();
        this.isOnline = this.basemap.isOnline;
    }

    @computed
    get basemap() {
        if (values(this.props.mapStore.basemapsModels).length) {
            return this.props.mapStore.basemapsModels.get(this.props.basemapTitle);
        }
    }

    handleSetActiveBasemap = () => {
        this.props.mapStore.setCurrentBasemapTitle(this.props.basemapTitle);
    };

    handleSettingsClick = (event, title) => {
        event.stopPropagation();
        this.props.mapStore.setModifiedBasemapTitle(title);
    };

    handleToggleOnline = () => {
        if (this.basemap.isOnline) {
            this.basemap.goOffline();
        } else {
            this.basemap.goOnline();
        }
        this.isOnline = this.basemap.isOnline;
    };

    render() {
        const { basemapTitle, mapStore: { currentBasemapTitle } } = this.props;
        return (
            <ListItem active={basemapTitle === currentBasemapTitle}
                      onClick={this.handleSetActiveBasemap}>
                <ListTitle>{basemapTitle}</ListTitle>
                {this.isLayerInIndexedDB &&
                <IconWrapper title={this.isOnline ? 'Go offline' : 'Go online'}
                             onClick={this.handleToggleOnline}
                >
                    <Icon name={this.isOnline ? 'offline' : 'online'} noPointerEvents/>
                </IconWrapper>}
                <IconWrapper onClick={event => this.handleSettingsClick(event, basemapTitle)}><Icon
                    name="settings"/></IconWrapper>
            </ListItem>)
    }
}