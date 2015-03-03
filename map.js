"use strict";

L.mapbox.accessToken = 'pk.eyJ1IjoiY2hyaXNnaXN0IiwiYSI6Ik8tS05aV0kifQ.ykwb_9d8AzGUqiyX9eS_Jw';

var mapboxTiles = L.tileLayer('https://{s}.tiles.mapbox.com/v4/chrisgist.vwhtzkt9/{z}/{x}/{y}.png?access_token=' + L.mapbox.accessToken, {
  attribution: '<a href="http://www.mapbox.com/about/maps/" target="_blank">Terms &amp; Feedback</a>'
});

$.getJSON('./places.geojson', function(data) {
  var geojson = L.geoJson(data, {
    onEachFeature: function(feature, layer) {
      layer.bindPopup(feature.properties.name);
      //console.log("properties", feature.properties.name);
    }
  });
  var map = L.map('map').fitBounds(geojson.getBounds());
  map.addLayer(mapboxTiles);
  //mapboxTiles.addTo(map);
  geojson.addTo(map);
});


//var map = L.map('map').addLayer(mapboxTiles).setView([43.0305, -71.3071], 9);

