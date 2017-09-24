//FIREBASE - from Gabe:
  var config = {
      apiKey: "AIzaSyD9zk9bTMjEZ9sqWATtCz0QI2TQ48InrVE",
      authDomain: "maltr-2096b.firebaseapp.com",
      databaseURL: "https://maltr-2096b.firebaseio.com",
      projectId: "maltr-2096b",
      storageBucket: "maltr-2096b.appspot.com",
      messagingSenderId: "12160681601"
  	};

  firebase.initializeApp(config);

  var db = firebase.database();

  db.ref().on("value", function(snapshot) {

    // Log everything that's coming out of snapshot
    console.log(snapshot.val());
    console.log(snapshot.val().brewer);

  });
//Firebase end, begin other code:
//---------------------------------------




  function initMap() {

    var locations = [
      // ['Bondi Beach', -33.890542, 151.274856, 4],
      // ['Coogee Beach', -33.923036, 151.259052, 5],
      // ['Cronulla Beach', -34.028249, 151.157507, 3],
      // ['Manly Beach', -33.80010128657071, 151.28747820854187, 2],
      // ['Maroubra Beach', -33.950198, 151.259302, 1]
    ];

    var tenLocations = [
      ["Ten10 Brewery", 28.563698, -81.365967],
      ["Ray's Fish", 28.672278, -81.449926],
      ["Pig Floyd’s Urban Barbakoa", 28.563082, -81.364657],
      ["The Rusty Spoon", 28.540764, -81.380499],
      ["Mitchell's Fish Market", 28.601648, -81.363208]
    ];
    var obpLocations = [
      ["Avenue Gastro", 28.541801, -81.378895],
      ["Funky Monkey", 28.432785, -81.471161],
      ["Nova Restaurant",28.564531, -81.372671],
      ["Ravenous Pig",28.593358, -81.355975],
      ["Orange County Brewers",28.544308, -81.378818]
    ];
    var deadLizLocations = [
      ["Orange County Brewers", 28.544308, -81.378818],
      ["Funky Monkey", 28.376808, -81.506985],
      ["Earl's Kitchen + Bar", 28.485565, -81.43155],
      ["K Restaurant", 28.567063, -81.389679],
      ["Luma on Park", 28.596115, -81.350843]
    ];


    //Default Map Positions
    var orlando = new google.maps.LatLng(28.5444896, -81.3810539);
    var orlandoBrewing = new google.maps.LatLng(28.5247212, -81.3909102);

        map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: orlando,
          zoom: 10
        });

    var infowindow = new google.maps.InfoWindow();
    var marker, i;


    //FUNCTIONS
    // ADD Ten10 Brewers Markers
    function addMarkers1010(){
      for (i = 0; i < tenLocations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(tenLocations[i][1], tenLocations[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent("REVIEW DATA <br><br>" + tenLocations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    }
    //ADD Orange Blossom Brewing Markers
    function addMarkersOBP(){
      for (i = 0; i < obpLocations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(obpLocations[i][1], obpLocations[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent("REVIEW DATA <br><br>" + obpLocations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    };
    // ADD Dead Lizard Markers
    function addMarkersLizard(){
      for (i = 0; i < deadLizLocations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(deadLizLocations[i][1], deadLizLocations[i][2]),
          map: map
        });
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
          return function() {
            infowindow.setContent("REVIEW DATA <br><br>" + deadLizLocations[i][0]);
            infowindow.open(map, marker);
          }
        })(marker, i));
      }
    };



    //ON CLICK
    $(document).on("click", ".dropdown-item", function(event) {
        // event.preventDefault();
        map = new google.maps.Map(document.getElementById('map_canvas'), {
          center: orlando,
          zoom: 10
        });
        var brewery = $(this).attr("ID");
        console.log("Brewery Clicked: " + brewery);
        if( brewery === "ten10Click" ) {
          // locations = locations[];
          // locations.push(tenLocations);
          // console.log("Locations Array: " + locations);
          addMarkers1010();
        } else if ( brewery === "obpClick") {
          addMarkersOBP();
        } else {
          addMarkersLizard();
        }
    });



    }







//map1
//----------------------------------------
      // var map;
      // var marker;
      // var myLatLng = {lat: -25.363, lng: 131.044};
      //
      // function initMap() {
      //   var orlando = new google.maps.LatLng(28.5444896, -81.3810539);
      //   var orlandoBrewing = new google.maps.LatLng(28.5247212, -81.3909102);
      //
      //
      //   map = new google.maps.Map(document.getElementById('map_canvas'), {
      //     // center: {lat: 28.5444896, lng: -81.3810539},
      //     center: orlando,
      //     zoom: 10
      //   });
      //
      //   //What's in the text box:
      //   var contentString = "<p>Four loko williamsburg art party readymade meggings, kombucha selvage sriracha glossier mlkshk humblebrag four dollar toast ethical. Messenger bag health goth forage la croix. Affogato truffaut banh mi beard semiotics. Hell of listicle truffaut man braid, aesthetic cloud bread iceland flannel yuccie activated charcoal ethical crucifix williamsburg. Narwhal tumblr fixie echo park. Glossier venmo normcore, 8-bit tote bag gluten-free before they sold out butcher knausgaard banjo chia synth. Pabst single-origin coffee whatever four loko. IPhone post-ironic cornhole 3 wolf moon wayfarers. Fingerstache PBR&B copper mug keffiyeh pop-up church-key neutra ramps distillery pickled umami bicycle rights cronut. Authentic PBR&B brunch tilde venmo, pok pok plaid. Meditation street art gastropub franzen edison bulb, messenger bag hell of health goth stumptown deep v.</p>";
      //
      //   var infowindow = new google.maps.InfoWindow({
      //     content: contentString
      //   });
      //
      //   //Puts a marker on map:
      //   marker = new google.maps.Marker({
      //     position: orlandoBrewing,
      //     map: map,
      //     title: 'Hello World!'
      //   });
      //
      //   //Opens the text box when we click:
      //   marker.addListener('click', function() {
      //     infowindow.open(map, marker);
      //   });
      //
      // }
//---------------------------------------------------


      // $("#map_canvas").hide();
      //
      // $('.dropdown-item').click(function(e){
      //     $("#map_canvas").fadeIn('slow');
      // });










// var locations = [
//     ['Location 1 Name', 'New York, NY', 'Location 1 URL'],
//     ['Location 2 Name', 'Newark, NJ', 'Location 2 URL'],
//     ['Location 3 Name', 'Philadelphia, PA', 'Location 3 URL']
// ];
//
// var geocoder;
// var map;
// var bounds = new google.maps.LatLngBounds();
//
// function initialize() {
//     map = new google.maps.Map(
//     document.getElementById("map_canvas"), {
//         center: new google.maps.LatLng(37.4419, -122.1419),
//         zoom: 13,
//         mapTypeId: google.maps.MapTypeId.ROADMAP
//     });
//     geocoder = new google.maps.Geocoder();
//
//     for (i = 0; i < locations.length; i++) {
//
//
//         geocodeAddress(locations, i);
//     }
// }
// google.maps.event.addDomListener(window, "load", initialize);
//
// function geocodeAddress(locations, i) {
//     var title = locations[i][0];
//     var address = locations[i][1];
//     var url = locations[i][2];
//     geocoder.geocode({
//         'address': locations[i][1]
//     },
//
//     function (results, status) {
//         if (status == google.maps.GeocoderStatus.OK) {
//             var marker = new google.maps.Marker({
//                 icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
//                 map: map,
//                 position: results[0].geometry.location,
//                 title: title,
//                 animation: google.maps.Animation.DROP,
//                 address: address,
//                 url: url
//             })
//             infoWindow(marker, map, title, address, url);
//             bounds.extend(marker.getPosition());
//             map.fitBounds(bounds);
//         } else {
//             alert("geocode of " + address + " failed:" + status);
//         }
//     });
// }
//
// function infoWindow(marker, map, title, address, url) {
//     google.maps.event.addListener(marker, 'click', function () {
//         var html = "<div><h3>" + title + "</h3><p>" + address + "<br></div><a href='" + url + "'>View location</a></p></div>";
//         iw = new google.maps.InfoWindow({
//             content: html,
//             maxWidth: 350
//         });
//         iw.open(map, marker);
//     });
// }
//
// function createMarker(results) {
//     var marker = new google.maps.Marker({
//         icon: 'http://maps.google.com/mapfiles/ms/icons/blue.png',
//         map: map,
//         position: results[0].geometry.location,
//         title: title,
//         animation: google.maps.Animation.DROP,
//         address: address,
//         url: url
//     })
//     bounds.extend(marker.getPosition());
//     map.fitBounds(bounds);
//     infoWindow(marker, map, title, address, url);
//     return marker;
// }
