import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './App.jsx';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'mobx-react';
import MapStore from './stores/MapStore';

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  };
`;
const container = document.getElementById('root');

const stores = {
    mapStore: new MapStore()
};

const render = (Component) => {
    ReactDOM.render(
        <>
            <GlobalStyle/>
            <Provider {...stores}>
                <AppContainer>
                    <Component/>
                </AppContainer>
            </Provider>
        </>,
        container
    );
};

render(App);

if (module.hot) {
    module.hot.accept('./App.jsx', () => {
        ReactDOM.unmountComponentAtNode(container);
        const NewApp = require('./App.jsx').default;
        render(NewApp)
    });
}
