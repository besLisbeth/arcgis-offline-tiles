import esriConfig from "esri/config";

const DEFAULT_WORKER_URL = location.origin;

esriConfig.workers.loaderUrl = `${location.origin}dojo/dojo-lite.js`;
esriConfig.workers.loaderConfig = {
    baseUrl: `${DEFAULT_WORKER_URL}dojo`,
    has: {
        'dojo-config-api': 0,             // Don't need the config API code in the embedded Dojo loader
        'esri-webpack': 1,
        'esri-promise-compatibility': 1,
        'esri-workers-for-memory-layers': 0,
        'esri-featurelayer-webgl': 0,
        'esri-workers': 0,
        'esri-built': 0
    },
    aliases: [
        [/^webgl-engine/, function() {
            return 'esri/views/3d/webgl-engine';
        }],
        [/^engine/, function() {
            return 'esri/views/3d/webgl-engine';
        }]
    ],
    map: {
        'globalize': {
            'cldr': 'cldrjs/dist/cldr',
            'cldr/event': 'cldrjs/dist/cldr/event',
            'cldr/supplemental': 'cldrjs/dist/cldr/supplemental',
            'cldr/unresolved': 'cldrjs/dist/cldr/unresolved'
        }
    },
    packages: [
        { name: "esri", location: `${DEFAULT_WORKER_URL}esri` },
        { name: "dojo", location: `${DEFAULT_WORKER_URL}dojo` },
        { name: "dojox", location: `${DEFAULT_WORKER_URL}dojox` },
        { name: "dstore", location: `${DEFAULT_WORKER_URL}dstore` },
        { name: "moment", location: `${DEFAULT_WORKER_URL}moment` },
        { name: "@dojo", location: `${DEFAULT_WORKER_URL}@dojo` },
        {
            name: "cldrjs",
            location: `${DEFAULT_WORKER_URL}cldrjs`,
            main: "dist/cldr"
        },
        {
            name: "globalize",
            location: `${DEFAULT_WORKER_URL}globalize`,
            main: "dist/globalize"
        },
        {
            name: "maquette",
            location: `${DEFAULT_WORKER_URL}maquette`,
            main: "dist/maquette.umd"
        },
        {
            name: "maquette-css-transitions",
            location: `${DEFAULT_WORKER_URL}maquette-css-transitions`,
            main: "dist/maquette-css-transitions.umd"
        },
        {
            name: "maquette-jsx",
            location: `${DEFAULT_WORKER_URL}maquette-jsx`,
            main: "dist/maquette-jsx.umd"
        },
        { name: "tslib", location: `${DEFAULT_WORKER_URL}tslib`, main: "tslib" }
    ]
};