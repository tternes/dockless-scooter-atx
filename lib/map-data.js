function createMap(data) {
    var mymap = L.map('mapid').setView([30.267, -97.743], 14);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox.light',
        accessToken: 'pk.eyJ1IjoicmpoZW5uZXNzeTE1IiwiYSI6ImNpeG0xN2FrYzAwYW4ycWxlbmZicGVxbHkifQ.XpxhhKIDvEdlZvcsCupIsQ'
    }).addTo(mymap);

    console.log(data)

    for (var i = 0; i < data.length; i++) {
        start_lat = data[i]['start_latitude'];
        start_lon = data[i]['start_longitude'];
        end_lat = data[i]['end_latitude'];
        end_lon = data[i]['end_longitude'];
        arrow = L.polyline([[start_lat, start_lon], [end_lat, end_lon]]).addTo(mymap)
        arrowHead = L.polylineDecorator(arrow, {
        patterns: [
            {
                offset: '100%',
                repeat: 0,
                symbol: L.Symbol.arrowHead({pixelSize: 7, polygon: true, pathOptions: {stroke: true}})
            }
        ]
        }).addTo(mymap)
    };
};