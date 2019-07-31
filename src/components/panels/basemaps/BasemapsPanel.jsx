import React from 'react';
import { PanelTitle, PanelWrapper } from '../elements';
import { inject, observer } from 'mobx-react';
import OfflineSettingsPanel from '../offline/OfflinePanel';
import MapItem from './MapItem';

const BasemapsPanel = inject('mapStore')(observer(({ mapStore: { basemaps, modifiedBasemapTitle } }) => {

    if (modifiedBasemapTitle) {
        return <OfflineSettingsPanel/>;
    }

    return (
        <PanelWrapper>
            <PanelTitle>Layers</PanelTitle>
            {basemaps.map(({ title }) => <MapItem key={title} basemapTitle={title}/>)}
        </PanelWrapper>
    )
}));

export default BasemapsPanel;



