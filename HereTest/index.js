//define locations
  var LocLBNagar = new H.map.Marker({lat: 17.355537, lng: 78.547017});
  var LocKothapet = new H.map.Marker({lat: 17.366300,lng: 78.542448});
  var LocLingampally = new H.map.Marker({lat: 17.490932,lng: 78.314697});
  var LocNalgonda = new H.map.Marker({lat: 17.065101,lng: 79.265834});
  var LocMehdipatnam = new H.map.Marker({lat: 17.394991,lng: 78.441153});
//function to add markers to a group, used latter in the info bubbles
function addMarkerToGroup(group, marker, html) {
  marker.setData(html);
  group.addObject(marker);
}
//create info bubble from group you created above
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

    //add the text, html in string form, to the objects you created earlier
  addMarkerToGroup(group, LocLBNagar,
    '<div><a href=\'http://www.mcfc.co.uk\' >LB Nagar</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  addMarkerToGroup(group, LocKothapet,
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Kothapet</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');
  addMarkerToGroup(group, LocLingampally,
    '<div><a href=\'http://www.mcfc.co.uk\' >Lingampally</a>' +
    '</div><div >City of Manchester Stadium<br>Capacity: 48,000</div>');
  addMarkerToGroup(group, LocNalgonda,
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Nalgonda</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');
  addMarkerToGroup(group, LocMehdipatnam,
    '<div ><a href=\'http://www.liverpoolfc.tv\' >Mehdipatnam</a>' +
    '</div><div >Anfield<br>Capacity: 45,362</div>');

}
// setting the output values for each element, can replace with html latter
function testDelegation(map){
LocLBNagar.setData('LB Nagar');
LocKothapet.setData('Kothapet');
LocLingampally.setData('Lingampally');
LocNalgonda.setData('Nalgonda');
LocMehdipatnam.setData('Mehidipatnam!');

 group.addEventListener('tap', function (evt) {
    // Now lets log the event
    customLog(evt.target.getData());
  });
  // Let's zoom to our objects by default
  map.setViewBounds(container.getBounds());
  // Make objects visible by adding them to the map
  map.addObject(container);
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


// Step 5: create custom logging facilities
var logContainer = document.createElement('ul');
logContainer.className ='log';
logContainer.innerHTML = '<li class="log-entry">Try clicking on elements</li>';
map.getElement().appendChild(logContainer);

// Helper for logging events
function customLog(log) {
  var entry = document.createElement('li');
  entry.className = 'log-entry';
  entry.textContent = log;
  logContainer.insertBefore(entry, logContainer.firstChild);
}



//add markers and info bubbles to the map 
addInfoBubble(map);

testDelegation(map, customLog);

