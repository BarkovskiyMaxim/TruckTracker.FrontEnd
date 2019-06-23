import { Coordinates } from './orders';

function moveMapToBerlin(map) {
    map.setCenter({ lat: 52.5159, lng: 13.3777 });
    map.setZoom(14);
}

export class HereMap {
    track(id: string, coords: Coordinates) {
        if(this.currentRoutePosition[id])
            this._map.removeObject(this.currentRoutePosition[id]);
        this.currentRoutePosition[id] = new H.map.Marker(coords);
        this._map.addObject(this.currentRoutePosition[id]);
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
    setCenter(position) {
        this._map.setCenter(position);
        this._map.setZoom(20);
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
    return map;
}