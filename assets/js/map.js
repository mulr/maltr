//FIREBASE - from Gabe:
// var config = {
//     apiKey: "AIzaSyD9zk9bTMjEZ9sqWATtCz0QI2TQ48InrVE",
//     authDomain: "maltr-2096b.firebaseapp.com",
//     databaseURL: "https://maltr-2096b.firebaseio.com",
//     projectId: "maltr-2096b",
//     storageBucket: "maltr-2096b.appspot.com",
//     messagingSenderId: "12160681601"
// };

//-----------------------------------------
//Added functionality to center map on click:
  var map;
  var orlando = {lat: 28.5445, lng: -81.381};

  function CenterControl(controlDiv, map) {

    // Set CSS for the control border.
    var controlUI = document.createElement('div');
    controlUI.style.backgroundColor = '#fff';
    controlUI.style.border = '2px solid #fff';
    controlUI.style.borderRadius = '3px';
    controlUI.style.boxShadow = '0 2px 6px rgba(0,0,0,.3)';
    controlUI.style.cursor = 'pointer';
    controlUI.style.marginBottom = '22px';
    controlUI.style.textAlign = 'center';
    controlUI.title = 'Click to recenter the map';
    controlDiv.appendChild(controlUI);

    // Set CSS for the control interior.
    var controlText = document.createElement('div');
    controlText.style.color = 'rgb(25,25,25)';
    controlText.style.fontFamily = 'Roboto,Arial,sans-serif';
    controlText.style.fontSize = '14px';
    controlText.style.lineHeight = '32px';
    controlText.style.paddingLeft = '5px';
    controlText.style.paddingRight = '5px';
    controlText.innerHTML = 'Center Map';
    controlUI.appendChild(controlText);

    // Setup the click event listeners: simply set the map to Chicago.
    controlUI.addEventListener('click', function() {
      map.setCenter(orlando);
    });

  }
//-----------------------------------
$("#map_canvas").hide();

var markersArray = [];

//let's build a map
function initMap() {
    //FUNCTIONS
    //when brewery is selected from drop down, do this
    $(".dropdown-item").on('click', function() {
        // event.preventDefault();
        $("#map_canvas").show();

        var map = new google.maps.Map(document.getElementById('map_canvas'), {
            center: orlando,
            zoom: 10
        });

        var centerControlDiv = document.createElement('div');
        var centerControl = new CenterControl(centerControlDiv, map);
        centerControlDiv.index = 1;
        map.controls[google.maps.ControlPosition.TOP_CENTER].push(centerControlDiv);


        var infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);

        var idAdded = 0;
        //declare empty array
        var targetMarkers = [];
        //declared to only reference te selected brewer
        var brewerSelected = $(this).text();
        //function to place the markers on the map
        function mapmarkers() {
            for (i = 0; i < targetMarkers.length; i++) {

                service.getDetails({
                    placeId: targetMarkers[i]
                }, function(place, status) {
                    if (status == google.maps.places.PlacesServiceStatus.OK) {
                        var marker = new google.maps.Marker({
                            map: map,
                            animation: google.maps.Animation.DROP,
                            position: place.geometry.location
                        });
                        //adds the info windows to each marker
                        google.maps.event.addListener(marker, 'click', function() {
                            if (place.opening_hours.open_now == true) {
                            infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'Rating (out of 5): ' + place.rating + '<br>' +
                                'Open for Beer!' + '<br>' +

                                '</div>');
                            } else {
                              infowindow.setContent('<div><strong>' + place.name + '</strong><br>' +
                                'Rating (out of 5): ' + place.rating + '<br>' + 'Closed for Beer!'
                                + '<br>' + '</div>');
                            }
                            infowindow.open(map, this);
                        });
                        //places markers in array for future use --mainly to remove the markers
                        markersArray.push(marker);
                    } else if (status == google.maps.GeocoderStatus.OVER_QUERY_LIMIT) {
                        console.log('OVER_QUERY_LIMIT');
                    }
                });
            }

        }
        //at child_added do this
        database.ref().orderByChild("brewer").equalTo(brewerSelected).on("child_added", function(childSnapshot) {
            //push the name and place ID into the targetMarkers array
            console.log(childSnapshot.val());

            targetMarkers.push([childSnapshot.val().targetLocationPlaceID]);
            //increments for every child added
            idAdded++;

            console.log('the number of ids added is ' + idAdded);

            console.log('the array is ' + targetMarkers);

            // Handle the errors
        }, function(errorObject) {
            console.log("Errors handled: " + errorObject.code);

        });
        //gets the total value of the database
        database.ref().orderByChild("brewer").equalTo(brewerSelected).on("value", function(childSnapshot) {
            //compares the number of children to idAdded variable in, determing all children have been accounted
            if (childSnapshot.numChildren() === idAdded) {
              //when this happens, mapmarkers is called
                mapmarkers();
            }

        });
    });
}

//function to remove markers from map
function DeleteMarkers() {
    //Loop through all the markers and remove
    for (var i = 0; i < markersArray.length; i++) {
        markersArray[i].setMap(null);
    }
    markers = [];
};







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
