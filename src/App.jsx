import React from 'react';
import styled from 'styled-components';
import NavigationBar from './components/navBar/NavigationBar';
import MapView from './components/Map';
import BasemapsPanel from './components/panels/basemaps/BasemapsPanel';

export default function App() {

    return (
        <AppWrapper>
            <NavigationBar/>
            <MapView/>
            <BasemapsPanel/>
        </AppWrapper>
    )
}

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;