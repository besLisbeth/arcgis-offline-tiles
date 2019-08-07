import { action, observable, ObservableMap } from 'mobx';
import Map from 'esri/Map';
import MapView from 'esri/views/MapView';
import TileLayer from 'esri/layers/TileLayer';
import * as watchUtils from 'esri/core/watchUtils';
import { OfflineLayer, initOfflineFeatures } from 'arcgis-offline-tiles';

export default class MapStore {

    basemaps = [
        //@formatter: off
        { title: 'dark-gray', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer' },
        { title: 'topo', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer' },
        { title: 'streets', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer' },
        { title: 'satellite', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' },
        { title: 'gray', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer' },
        { title: 'hybrid', url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer' }];
        //@formatter: on

    @observable basemapsModels = new ObservableMap();
    @observable map;
    @observable view;
    @observable currentZoom = 4;
    @observable currentBasemapTitle = this.basemaps[0].title;
    @observable modifiedBasemapTitle;
    @observable loadingProgressMap = new ObservableMap();

    constructor() {
        this.basemaps.forEach(name => {
            this.loadingProgressMap.set(name, { percent: 0, done: true, type: '' });
        });
    }

    @action.bound
    async createMap() {
        this.map = new Map({ basemap: this.currentBasemapTitle });
        await initOfflineFeatures({ dbName: 'demo-test' });
        this.basemaps.forEach(({ title, url }) => {
            const offlineLayer = OfflineLayer(TileLayer, {
                title,
                url,
                visible: title === this.basemaps[0].title
            });
            this.map.layers.add(offlineLayer);
            this.basemapsModels.set(title, offlineLayer);
        })

    }

    @action.bound
    toggleBasemap(newBasemapTitle) {
        const currentBasemap = this.map.layers.find(basemap => basemap.visible === true);
        currentBasemap.visible = false;
        const newBase = this.getBasemapByTitle(newBasemapTitle);
        newBase.visible = true;
    }

    getBasemapByTitle(title) {
        return this.map.layers.find(basemap => basemap.title === title);
    }

    @action.bound
    createView(containerId) {
        this.view = new MapView({
            container: containerId,
            map: this.map,
            zoom: 4,
            center: [31.9, 48.3],
            constraints: { rotationEnabled: false }
        });
    }

    addZoomChangeListener() {
        watchUtils.whenTrue(this.view, 'stationary', () => {
            this.setCurrentZoom(this.view.zoom);
        })
    }

    @action.bound
    setCurrentZoom(zoom) {
        this.currentZoom = zoom;
    }

    @action.bound
    setCurrentBasemapTitle(title) {
        this.currentBasemapTitle = title;
    }

    @action.bound
    setModifiedBasemapTitle(title) {
        this.modifiedBasemapTitle = title;
    }

    @action.bound
    clearModifiedBasemap() {
        this.modifiedBasemapTitle = null;
    }

    @action.bound
    setLoadingBasemapProgress(name, progress) {
        this.loadingProgressMap.set(name, progress);
    }
};