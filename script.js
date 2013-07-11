var TileJSONs = [
    'http://a.tiles.mapbox.com/v3/mattmakesmaps.map-9ipoh344.jsonp',
];

$('#map').mapbox(TileJSONs, function(map, tiledata) {

    // Assign readable names to all layers
    map.getLayerAt(0).named('Place_Names');

    // Disable all overlay layers by default
    //map.disableLayer('Place_Names');

    // Set initial latitude, longitude and zoom level
    // -145.2832,64.6427,4

    map.setCenterZoom({
        lat: 64.6,
        lon: -145.2
    }, 5);

    // Set minimum and maximum zoom levels
    map.setZoomRange(4, 8);

    // Enable share control
    mapbox.share().map(map).add();

});
