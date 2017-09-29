

$("#map-nearme").hide();

var map, infowindow;

$('#locate-me-btn').on('click', function initMap() {

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };
            $("#map-nearme").show();
            infowindow = new google.maps.InfoWindow();
            map = new google.maps.Map(document.getElementById('map-nearme'), {
                center: pyrmont,
                zoom: 12
            });
            console.log(pos);
            infowindow.setPosition(pos);
            infowindow.setContent('You are near some beer!!! ');
            infowindow.open(map);
            map.setCenter(pos);

            var request = {
                location: pos,
                radius: '18000',
                type: ['bar']
            };
            var pyrmont = pos;



            var service = new google.maps.places.PlacesService(map);
            service.nearbySearch({
                location: pyrmont,
                radius: 5000,
                type: ['bar']
            }, callback);


        });



    }

    function callback(results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            animation: google.maps.Animation.DROP,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function() {
            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }
});

