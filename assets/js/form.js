
//Collects the locations where a Brewer's beers can be found.

// FIREBASE INFO FOR HTML
// <script src="https://www.gstatic.com/firebasejs/4.4.0/firebase.js"></script>

console.log("Form.js is connected")

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

// maltr ADMIN FORM GLOBAL VARIABLES

var brewer = "";
var targetLocationName = "";

// DM-Added type of inventory
var typeOfInventory = "";
var targetLocationAddress1 = "";
var targetLocationAddress2 = "";
var targetLocationCity = "";
var targetLocationState = "";
var targetLocationZip = "";
// var targetLocationCountry = "";  // Commenting out Country in case we need to add it back later.

// It will be MUCH easier to require a maltr Admin to directly enter a targetLocation Place ID vs. trying to get Google to automate the search.  The reason is that a text search (by entering the address) will count as TEN (10) requests against our quota (1,000 free requests per 24 hour period; 150,000 requests per 24 hour period if we verify our identity with a credit card, which I'm willing to do), possibly causing us to time-out.
// Find Place IDs at https://developers.google.com/places/place-id#find-id

var targetLocationPlaceID = 0;

// console.log("The initial load o");
// console.log(brewer);
// console.log(targetLocationName);
//
// // DM-Added type of inventory
// console.log(typeOfInventory + "Type of inventory");
// console.log(targetLocationAddress1);
// console.log(targetLocationAddress2);
// console.log(targetLocationCity);
// console.log(targetLocationState);
// console.log(targetLocationZip);
// console.log(targetLocationPlaceID);
// console.log("--------------------------");





// maltr ADMIN FORM FUNCTIONS









// maltr ADMIN FORM PROCESSES


// Capture new target location data where a specific brewer's beer(s) can be purchased when maltr Admin selects "Submit" button

$("#add-targetLocation").on("click", function(event) {
	event.preventDefault();

	brewer = $("#brewer-input").val().trim();
	targetLocationName = $("#targetLocationName-input").val().trim();

  // DM-Added type of inventory
  typeOfInventory = $("#typeOfInventory").val().trim();
	targetLocationAddress1 = $("#targetLocationAddress1-input").val().trim();
	targetLocationAddress2 = $("#targetLocationAddress2-input").val().trim();
	targetLocationCity = $("#targetLocationCity-input").val().trim();
	targetLocationState = $("#targetLocationState-input").val().trim();
	targetLocationZip = $("#targetLocationZip-input").val().trim();
	// targetLocationCountry = $("#targetLocationCountry-input").val().trim();
	targetLocationPlaceID = $("#targetLocationPlaceID-input").val().trim();

	console.log("After the button is pushed");
	console.log(brewer);
	console.log(targetLocationName);

  // DM-Added type of inventory
  console.log(typeOfInventory);
	console.log(targetLocationAddress1);
	console.log(targetLocationAddress2);
	console.log(targetLocationCity);
	console.log(targetLocationState);
	console.log(targetLocationZip);
	console.log(targetLocationPlaceID);


// Push the captured data to the Firebase database
	database.ref().push({
		brewer: brewer,
		targetLocationName: targetLocationName,
    typeOfInventory: typeOfInventory,
		targetLocationAddress1: targetLocationAddress1,
		targetLocationAddress2: targetLocationAddress2,
		targetLocationCity: targetLocationCity,
		targetLocationState: targetLocationState,
		targetLocationZip: targetLocationZip,
		// targetLocationCountry: targetLocationCountry,
		targetLocationPlaceID: targetLocationPlaceID,
		dateAdded: firebase.database.ServerValue.TIMESTAMP
	});

});
