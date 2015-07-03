/**
 * main.js
 *
 * Write better code than this example!
 */


require(['esri/map', 'dojo/domReady!'], function(Map) { 
  var map1 = new Map('map-1', {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  });

  var map2 = new Map('map-2', {
    center: [-118, 34.5],
    zoom: 8,
    basemap: 'topo'
  });

});
