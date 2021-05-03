$( document ).ready(function() {

  var map = L.map('map', {
    center: [59.708, 29.5848],
    zoom: 15,
  });

  var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
  };

  var geojsonFeature = {
    "type": "Feature",
    "properties": {
        "name": "Coors Field",
        "amenity": "Baseball Stadium",
        "popupContent": "This is where the Rockies play!"
    },
    "geometry": {
        "type": "Point",
        "coordinates": [59.708, 29.5848]
    }
  };

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
  L.tileLayer('https://gext.ru/rosreestr_xyz/{z}/{x}/{y}.png').addTo(map);

  $.getJSON( "pkk_rosreestr.geojson", function( data ) {
    console.log("GeoJSON", data);
    // var myLayer = L.geoJSON().addTo(map);
    // myLayer.addData(data.features);
    // L.geoJSON(geojsonFeature).addTo(map);
    // L.geoJSON(geojsonFeature, { style: myStyle }).addTo(map);
    console.log('GeoJSON added');
  });

  console.log('Leaflet JS finish');

});
