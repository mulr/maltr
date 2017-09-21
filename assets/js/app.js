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

// Present maltr Admin with a form so they can add data of a single distribution Point where the brewer's beers can be found.  Consider future versions to allow matlr Admin the ability to edit an existing distribution Point.

//		(a) Brewer Name
//		(b) distributionPointx Name (name where Drinker can buy the beer)
//		(c) distributionPointx Address 1
//		(d) distributionPointx Address 2
//		(e) distributionPointx City
//		(f) distributionPointx State
//		(g) distributionPointx Zip
//		(h) distributionPointx Country

// Provide maltr Admin a "Submit" button
// Provide maltry Admin a feedback loop (visual) to display back what they entered



// API KEYS

// Google Maps
//		API Key: AIzaSyCshmQTjclLlratVZseO_Vys9ED0ItqR1A
//		Documentation:

// Google Places (this is what Google calls the family of services that includes "Place Details, including user reviews")
//		API Key:  AIzaSyBcHIaliP1G_D6_vXRKgTACF8cVZbVW_ok
//		Documentation:  https://developers.google.com/maps/documentation/javascript/places#place_details
//		Gabe Notes	(1) Must have a "place_id" or "reference" from a Place Search first in order to initiate a "Place Details" request
//					(2) Load Library in html
					// <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyBcHIaliP1G_D6_vXRKgTACF8cVZbVW_ok&libraries=places"></script>



// FIREBASE INFO FOR HTML
// <script src="https://www.gstatic.com/firebasejs/4.3.1/firebase.js"></script>

// Initialize a Firebase dB to hold the maltr data
var config = {
	apiKey: "AIzaSyD9zk9bTMjEZ9sqWATtCz0QI2TQ48InrVE",
	authDomain: "maltr-2096b.firebaseapp.com",
	databaseURL: "https://maltr-2096b.firebaseio.com",
	projectId: "maltr-2096b",
	storageBucket: "",
	messagingSenderId: "12160681601"
	};

firebase.initializeApp(config);

var database = firebase.database();
// Firebase initialization complete

// DRINKER GLOBAL VARIABLES









// DRINKER ADMIN FUNCTIONS

// Display a review for a specific loaction once we have the id of a specific place
// EXAMPLE:  https://codepen.io/gpetrioli/pen/OmQyEE

// function targetLocationReview ()

// var request = {
// 	placeId: "targetLocationPlaceID" // example: ChIJN1t_tDeuEmsRUsoyG83frY4
// 	};

// var service = new google.maps.places.PlacesService(map); // map is your map object

// service.getDetails(request, function(place, status) {
// 	if (status == google.maps.places.PlacesServiceStatus.OK) {
// 		console.log(place.reviews);
// 	}
// });







// DRINKER ADMIN PROCESSES









// **** Separate .js sections for Drinker Page and maltr Admin page ****

// maltr ADMIN GLOBAL VARIABLES

var brewer = "";
var targetLocationName = "";
var targetLocationAddress1 = "";
var targetLocationAddress2 = "";
var targetLocationCity = "";
var targetLocationState = "";
var targetLocationZip = "";
var targetLocationCountry = "";

// It will be MUCH easier to require a maltr Admin to directly enter a targetLocation Place ID vs. trying to get Google to automate the search.  The reason is that a text search (by entering the address) will count as TEN (10) requests against our quota (1,000 free requests per 24 hour period; 150,000 requests per 24 hour period if we verify our identity with a credit card, which I'm willing to do), possibly causing us to time-out.
var targetLocationPlaceID = 0;







// maltr ADMIN FUNCTIONS









// maltr ADMIN PROCESSES


// Capture new target location data where a specific brewer's beer(s) can be purchased when maltr Admin selects "Submit" button

$("#add-targetLocation").on("click", function(event) {
	event.preventDefault();

	brewer = $("#brewer-input").val().trim();
	targetLocationName = $("#targetLocationName-input").val().trim();
	targetLocationAddress1 = $("#targetLocationAddress1-input").val().trim();
	targetLocationAddress2 = $("#targetLocationAddress2-input").val().trim();
	targetLocationCity = $("#targetLocationCity-input").val().trim();
	targetLocationState = $("#targetLocationState-input").val().trim();
	targetLocationZip = $("#targetLocationZip-input").val().trim();
	targetLocationCountry = $("#targetLocationCountry-input").val().trim();
	targetLocationPlaceID = $("#targetLocationPlaceID-input").val().trim();


// Push the captured data to the Firebase database
	database.ref().push({
	brewer: brewer,
	targetLocationName: targetLocationName,
	targetLocationAddress1: targetLocationAddress1,
	targetLocationAddress2: targetLocationAddress2,
	targetLocationCity: targetLocationCity,
	targetLocationState: targetLocationState,
	targetLocationZip: targetLocationZip,
	targetLocationCountry: targetLocationCountry,
	targetLocationPlaceID: targetLocationPlaceID,
	dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

});
