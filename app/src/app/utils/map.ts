function moveMapToBerlin(map) {
    map.setCenter({ lat: 52.5159, lng: 13.3777 });
    map.setZoom(14);
}

export class HereMap {
    showRout(start: import("./orders").Coordinates, end: import("./orders").Coordinates) {
        throw new Error("Method not implemented.");
    }
    private _map: any;
    navigateTocurrentLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this._map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
            this._map.setZoom(14);
        });
    }
    private _initMap() {
        var platform = new H.service.Platform({
            app_id: 'devportal-demo-20180625',
            app_code: '9v2BkviRwi9Ot26kp2IysQ',
            useHTTPS: true
        });
        var pixelRatio = window.devicePixelRatio || 1;
        var defaultLayers = platform.createDefaultLayers({
            tileSize: pixelRatio === 1 ? 256 : 512,
            ppi: pixelRatio === 1 ? undefined : 320
        });


        this._map = new H.Map(this.element,
            defaultLayers.normal.map, { pixelRatio: pixelRatio });

        var events = new H.mapevents.MapEvents(this._map);
        this._map.addEventListener('tap', function (evt) {
        });

        var behavior = new H.mapevents.Behavior(events);

        // Create the default UI components
        var ui = H.ui.UI.createDefault(this._map, defaultLayers);
    }
    constructor(private element: HTMLElement) {
        this._initMap();
    }
}

export function renderMap(element: HTMLElement) {
    var map = new HereMap(element);
    map.navigateTocurrentLocation();
    return map;
}