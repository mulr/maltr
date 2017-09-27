// APP PSUEDO CODE

//*** DRINKER VIEW ***

// Present option for Drinker to select a Brewer from X total Brewers

// Register Drinker's selection

// After selection is captured,
//		(a) render distributionPointx locations on Google Map (with Google API)
//		(b) render Google Reviews of each distributionPointx location

// After rendering, provide option for Drinker to:
//		(a) reset view, or
//		(b) select a new brewer




//*** MALTR ADMIN VIEW ***

// **The 1.0 version will have an ADMIN view to enter data for the brewers.  Consider future versions to have Brewer logins so they can update this themselves.

// Present maltr Admin with a form so they can add data of a single distribution Point where the brewer's beers can be found.
//		(a) Consider future versions to allow matlr Admin the ability to edit an existing distribution Point.  Directly enter the "place_id" that will be used by Google Places API to render the reviews.
//		(b) Provide maltry Admin a feedback loop (visual) to display back what they entered



// API KEYS

// Google Maps
//		API Key: AIzaSyCshmQTjclLlratVZseO_Vys9ED0ItqR1A
//		Documentation:

// Initialize a Firebase dB to hold the maltr data
var config = {
    apiKey: "AIzaSyD9zk9bTMjEZ9sqWATtCz0QI2TQ48InrVE",
    authDomain: "maltr-2096b.firebaseapp.com",
    databaseURL: "https://maltr-2096b.firebaseio.com",
    projectId: "maltr-2096b",
    storageBucket: "maltr-2096b.appspot.com",
    messagingSenderId: "12160681601"
	};

firebase.initializeApp(config);

var database = firebase.database();
// Firebase initialization complete


// GLOBAL VARIABLES



// FUNCTIONS

// Append brewer's product locations to the table below maltr map


$("#results").hide();
$("#map_canvas").hide();

// PROCESSES

https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YOUR_API_KEY


$(".dropdown-item").on('click', function() {
    // event.preventDefault();
  $("#results").show();
  $("#map_canvas").show();
	// Removes all previous values in the table EXCEPT for the header
	$("#listed-results tr").remove();

    var brewerSelected = $(this).text();

    console.log("Appending the following brewer: " + brewerSelected);

	database.ref().orderByChild("brewer").equalTo(brewerSelected).on("child_added", function(childSnapshot) {

		console.log(childSnapshot.val().brewer);
		console.log(childSnapshot.val().targetLocationName);
		console.log(childSnapshot.val().targetLocationAddress1);
		console.log(childSnapshot.val().targetLocationAddress2);
		console.log(childSnapshot.val().targetLocationCity);
		console.log(childSnapshot.val().targetLocationState);
		console.log(childSnapshot.val().targetLocationZip);
		console.log(childSnapshot.val().targetLocationPlaceID);

		// Add each brewer's data into the table
		$("#listed-results").append("<tr>" +
    "<td>" + childSnapshot.val().targetLocationName + "</td>" +
    "<td>" + childSnapshot.val().targetLocationAddress1 + "</td>" +
    "<td>" + childSnapshot.val().targetLocationCity + "</td>" +
    "<td>" + childSnapshot.val().targetLocationState + "</td>" +
    "<td>" + childSnapshot.val().targetLocationZip + "</td>" +
    "</tr>");

		// Handle the errors
		}, function(errorObject) {
  		console.log("Errors handled: " + errorObject.code);

	});

});




// Log the saved data coming out of Firebase in snapshot




// Add each train's data into the table
// $("#full-train-list > tbody").append("<tr><td>" + childSnapshot.val().name + "</td><td>" + childSnapshot.val().destination + "</td><td>" +
// childSnapshot.val().freq + "</td><td>" + childSnapshot.val().arrival + "</td><td>" + childSnapshot.val().freq + "</td></tr>");

// // Handle the errors
// }, function(errorObject) {
//   console.log("Errors handled: " + errorObject.code);
