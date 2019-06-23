import { Coordinates } from './orders';


function moveMapToBerlin(map) {
    map.setCenter({ lat: 52.5159, lng: 13.3777 });
    map.setZoom(14);
}

export class HereMap {
    track(id: string, coords: Coordinates) {
        if (this.currentRoutePosition[id]) {
            this.currentRoutePosition[id].setPosition(coords);
        } else {
            var pngIcon = new H.map.Icon("data:image/png;base64,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");
            this.currentRoutePosition[id] = new H.map.Marker(coords, { icon: pngIcon });
            debugger;
            this._map.addObject(this.currentRoutePosition[id]);
        }
    }
    showRoute(id: string, start: import("./orders").Coordinates, end: import("./orders").Coordinates) {
        var router = this.platform.getRoutingService(),
            routeRequestParams = {
                mode: 'balanced;truck;traffic:enabled',
                representation: 'display',
                routeattributes: 'waypoints,summary,shape,legs',
                maneuverattributes: 'direction,action',
                waypoint0: start.toString(),// Brandenburg Gate
                waypoint1: end.toString()  // Friedrichstraße Railway Station
            };
        router.calculateRoute(
            routeRequestParams,
            (result) => this.onSuccessRouteCalc(result, id, start, end),
            this.onErrorRouteCalc
        );
    }
    currentRoutePosition: { [key: string]: any } = {};
    routesObject: { [key: string]: { shapes: string[], current: number } } = {}
    private _map: any;
    private platform: any;
    private onSuccessRouteCalc(result, id: string, start: import("./orders").Coordinates, end: import("./orders").Coordinates) {
        if (result.response && result.response.route) {
            var route = result.response.route[0];
            this.routesObject[id] = {
                shapes: route.shape,
                current: 0
            };
            this.addRouteShapeToMap(route);
            this._map.addObject(new H.map.Marker(start));
            this._map.addObject(new H.map.Marker(end));
        }
        //addManueversToMap(route);

        //addWaypointsToPanel(route.waypoint);
        //addManueversToPanel(route);
        //addSummaryToPanel(route.summary);
    }
    private onErrorRouteCalc(error) {
        alert('Can not calculate route: ' + error.toString());
    }
    private addRouteShapeToMap(route) {
        var lineString = new H.geo.LineString(),
            routeShape = route.shape,
            polyline;

        routeShape.forEach(function (point) {
            var parts = point.split(',');
            lineString.pushLatLngAlt(parts[0], parts[1]);
        });

        polyline = new H.map.Polyline(lineString, {
            style: {
                lineWidth: 4,
                strokeColor: this.randomColor()
            }
        });
        // Add the polyline to the map
        this._map.addObject(polyline);
        // And zoom to its bounding rectangle
        this._map.setViewBounds(polyline.getBounds(), true);
    }
    private randomColorChannel() {
        return Math.round(Math.random() * 255);
    }
    private randomColor() {
        return 'rgba(' +
            this.randomColorChannel() +
            ', ' +
            this.randomColorChannel() +
            ', ' +
            this.randomColorChannel() +
            ', 0.7)';
    }
    navigateTocurrentLocation() {
        navigator.geolocation.getCurrentPosition((position) => {
            this._map.setCenter({ lat: position.coords.latitude, lng: position.coords.longitude });
            this._map.setZoom(14);
        });
    }
    private _initMap() {
        this.platform = new H.service.Platform({
            app_id: 'FfGkbnlg1ceyhr31pN8M',
            app_code: 'V367qfkLw8T0PhOYlRPSdg',
            useHTTPS: true
        });
        var pixelRatio = window.devicePixelRatio || 1;
        var defaultLayers = this.platform.createDefaultLayers({
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