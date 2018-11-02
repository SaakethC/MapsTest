/**
 * Adds markers to the map highlighting the locations of the captials of
 * France, Italy, Germany, Spain and the United Kingdom.
 *
 * @param  {H.Map} map      A HERE Map instance within the application
 */
function addMarkersToMap(map) {
  var LocLBNagar = new H.map.Marker({lat: 17.355537, lng: 78.547017});
  map.addObject(LocLBNagar);

  var LocKothapet = new H.map.Marker({lat: 17.366300,lng: 78.542448});
  map.addObject(LocKothapet);

  var LocLingampally = new H.map.Marker({lat: 17.490932,lng: 78.314697});
  map.addObject(LocLingampally);

  var LocNalgonda = new H.map.Marker({lat: 17.065101,lng: 79.265834});
  map.addObject(LocNalgonda);

  var LocMehdipatnam = new H.map.Marker({lat: 17.394991,lng: 78.441153});
  map.addObject(LocMehdipatnam);
}
/**
 * Creates a new marker and adds it to a group
 * @param {H.map.Group} group       The group holding the new marker
 * @param {H.geo.Point} coordinate  The location of the marker
 * @param {String} html             Data associated with the marker
 */
function addMarkerToGroup(group, coordinate, html) {
  var marker = new H.map.Marker(coordinate);
  // add custom data to the marker
  marker.setData(html);
  group.addObject(marker);
}


function addInfoBubble(map) {
  var group = new H.map.Group();

  map.addObject(group);

  // add 'tap' event listener, that opens info bubble, to the group
  group.addEventListener('tap', function (evt) {
    // event target is the marker itself, group is a parent event target
    // for all objects that it contains
    var bubble =  new H.ui.InfoBubble(evt.target.getPosition(), {
      // read custom data
      content: evt.target.getData()
    });
    // show info bubble
    ui.addBubble(bubble);
  }, false);

  addMarkerToGroup(group, {lat: 17.355537, lng: 78.547017},
    '<div><a href=\'http://www.mcfc.co.uk\' >LB Nagar</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  addMarkerToGroup(group, {lat: 17.366300,lng: 78.542448},
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Kothapet</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');
  addMarkerToGroup(group, {lat: 17.490932,lng: 78.314697},
    '<div><a href=\'http://www.mcfc.co.uk\' >Lingampally</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  addMarkerToGroup(group, {lat: 17.065101,lng: 79.265834},
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Nalgonda</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');
  addMarkerToGroup(group, {lat: 17.394991,lng: 78.441153},
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Mehdipatnam</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');

}

/**
 * Boilerplate map initialization code starts below:
 */

//Step 1: initialize communication with the platform
var platform = new H.service.Platform({
  app_id: 'T2QWnnumqWJRmTfQMUSI',
  app_code: 'gvxPuorIoZeqta5XoURGCg',
  useHTTPS: false
});
var pixelRatio = window.devicePixelRatio || 1;
var defaultLayers = platform.createDefaultLayers({
  tileSize: pixelRatio === 1 ? 256 : 512,
  ppi: pixelRatio === 1 ? undefined : 320
});

//Step 2: initialize a map - this map is centered over Europe
var map = new H.Map(document.getElementById('map'),
  defaultLayers.normal.map,{
  center: {lat:17.25, lng:78.5},
  zoom: 9,
  pixelRatio: pixelRatio
});

//Step 3: make the map interactive
// MapEvents enables the event system
// Behavior implements default interactions for pan/zoom (also on mobile touch environments)
var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));

// Create the default UI components
var ui = H.ui.UI.createDefault(map, defaultLayers);

// Now use the map as required...
//addMarkersToMap(map);
addInfoBubble(map);



