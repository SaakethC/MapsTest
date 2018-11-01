//locations
var map;
var LocLBNagar = {lat: 17.355537, lng: 78.547017};
var LocKothapet = {lat: 17.366300,lng: 78.542448};
var LocLingampally = {lat: 17.490932,lng: 78.314697};
var LocNalgonda = {lat: 17.065101,lng: 79.265834};
var LocMehdipatnam = {lat: 17.394991,lng: 78.441153};

//content
var contentString = '<div id="content">'+
      '<div id="siteNotice">'+
      '</div>'+
      '<h1 id="firstHeading" class="firstHeading">Market Name</h1>'+
      '<div id="bodyContent">'+
      '<p><b>Market Name</b>, is located in<b> Distrcit Name </b>, is a large/medium/small ' +
      'Market '+
      '<br>Table here has overarching catagories(Like vegatables etc.), then click on each catorgory for more information, and specific prices as well as prices over time</p>'+
      '<p>More Information, <a href=""> Here'+
      '</a> '+
      '</p>'+
      '</div>'+
      '</div>';

//main, init
function initMap() {
  map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: LocKothapet, mapTypeControl: false,
       mapTypeControlOptions: {
       mapTypeIds: ['roadmap', 'satellite', 'hybrid', 'terrain', 'styled_map']       
       }});
  // The marker, positioned at Markets
  var markerNalgonda = new google.maps.Marker({
    position: LocNalgonda,
    map: map,
    title: 'Nalagonda Market!'
  });

    // Markers
  var markerLBNagar = new google.maps.Marker({
    position: LocLBNagar,
    map: map,
    title: 'LB Nagar Market!'
  });
    
  var markerKothapet = new google.maps.Marker({
    position: LocKothapet,
    map: map,
    title: 'Kothapet Market!'
  });
    
  var markerLingampally = new google.maps.Marker({
    position: LocLingampally,
    map: map,
    title: 'Lingampally Market!'
  });
    
  var markerMehdipatnam = new google.maps.Marker({
    position: LocMehdipatnam,
    map: map,
    title: 'Mehdipatnam Market!'
  });
    
// content boxes
 var infowindowNalgonda = new google.maps.InfoWindow({
    content: contentString
  });
 markerNalgonda.addListener('click', function() {
    infowindowNalgonda.open(map, markerNalgonda);
  });
    
 var infowindowLBNagar = new google.maps.InfoWindow({
    content: contentString
  });
 markerLBNagar.addListener('click', function() {
    infowindowNalgonda.open(map, markerLBNagar);
  });
    
 var infowindowKothapet = new google.maps.InfoWindow({
    content: contentString
  });
 markerKothapet.addListener('click', function() {
    infowindowNalgonda.open(map, markerKothapet);
  });

 var infowindowLingampally = new google.maps.InfoWindow({
    content: contentString
  });
 markerLingampally.addListener('click', function() {
    infowindowNalgonda.open(map, markerLingampally);
  });
    
 var infowindowMehdipatnam = new google.maps.InfoWindow({
    content: contentString
  });
 markerMehdipatnam.addListener('click', function() {
    infowindowNalgonda.open(map, markerMehdipatnam);
  });
//Hyderabad overall popup
    
// Styling
        var styledMapType = new google.maps.StyledMapType(
            [
              {elementType: 'geometry', stylers: [{color: '#ebe3cd'}]},
              {elementType: 'labels.text.fill', stylers: [{color: '#523735'}]},
              {elementType: 'labels.text.stroke', stylers: [{color: '#f5f1e6'}]},
              {
                featureType: 'administrative',
                elementType: 'geometry.stroke',
                stylers: [{color: '#c9b2a6'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'geometry.stroke',
                stylers: [{color: '#dcd2be'}]
              },
              {
                featureType: 'administrative.land_parcel',
                elementType: 'labels.text.fill',
                stylers: [{color: '#ae9e90'}]
              },
              {
                featureType: 'landscape.natural',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'poi',
                elementType: 'labels.text.fill',
                stylers: [{color: '#93817c'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'geometry.fill',
                stylers: [{color: '#a5b076'}]
              },
              {
                featureType: 'poi.park',
                elementType: 'labels.text.fill',
                stylers: [{color: '#447530'}]
              },
              {
                featureType: 'road',
                elementType: 'geometry',
                stylers: [{color: '#f5f1e6'}]
              },
              {
                featureType: 'road.arterial',
                elementType: 'geometry',
                stylers: [{color: '#fdfcf8'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry',
                stylers: [{color: '#f8c967'}]
              },
              {
                featureType: 'road.highway',
                elementType: 'geometry.stroke',
                stylers: [{color: '#e9bc62'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry',
                stylers: [{color: '#e98d58'}]
              },
              {
                featureType: 'road.highway.controlled_access',
                elementType: 'geometry.stroke',
                stylers: [{color: '#db8555'}]
              },
              {
                featureType: 'road.local',
                elementType: 'labels.text.fill',
                stylers: [{color: '#806b63'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.fill',
                stylers: [{color: '#8f7d77'}]
              },
              {
                featureType: 'transit.line',
                elementType: 'labels.text.stroke',
                stylers: [{color: '#ebe3cd'}]
              },
              {
                featureType: 'transit.station',
                elementType: 'geometry',
                stylers: [{color: '#dfd2ae'}]
              },
              {
                featureType: 'water',
                elementType: 'geometry.fill',
                stylers: [{color: '#b9d3c2'}]
              },
              {
                featureType: 'water',
                elementType: 'labels.text.fill',
                stylers: [{color: '#92998d'}]
              }
            ],
            {name: 'Styled Map'});           
    map.mapTypes.set('styled_map', styledMapType);
    map.setMapTypeId('styled_map');
}






