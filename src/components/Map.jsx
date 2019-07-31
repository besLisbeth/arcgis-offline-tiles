import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import { reaction } from 'mobx';
import styled from 'styled-components';
import { callDisposer } from '../utils/mobxDisposerHelper';

@inject('mapStore')
@observer
export default class MapComponent extends Component {

    disposers = [];

    constructor(props) {
        super(props);
    }

    async componentDidMount() {
        const { mapStore } = this.props;
        await mapStore.createMap();
        mapStore.createView('map');
        this.observeBasemapChange();
        mapStore.addZoomChangeListener();
    }

    observeBasemapChange() {
        const { mapStore } = this.props;
        reaction(() => mapStore.currentBasemapTitle, (newBasemapTitle, reaction) => {
            mapStore.toggleBasemap(newBasemapTitle);
            this.disposers.push(reaction);
        });
    }

    componentWillUnmount() {
        this.disposers.forEach(disposer => callDisposer(disposer));
    }

    render() {
        return (
            <MapWrapper>
                <div id='map'/>
            </MapWrapper>
        );
    }
}

const MapWrapper = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  flex: 1;
  background-color: black;
  position: relative;
  z-index: 0;
  #map {
    height: 100%;
    width: 100%;
  }
`;