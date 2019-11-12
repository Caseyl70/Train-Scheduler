$(document).ready(function () {
    console.log("Jquery is loaded");
    // Set the configuration for your app
    // TODO: Replace with your project's config object
    var config = {
        apiKey: "AIzaSyAgPLTDRy2BKC-tJae1GjUTmSdRHIgyNOI",
        authDomain: "train-schedule011.firebaseapp.com",
        databaseURL: "https://train-schedule011.firebaseio.com",
        storageBucket: "train-schedule011.appspot.com"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    var database = firebase.database();

    $("form").on("submit", function (event) {
        // event.preventDefault();
        var trainData = {

            destination: $("#destination").val().trim(),
            train: $("#first-train").val().trim(),
            frequency: $("#frequency").val().trim()
        }
        // uploading to the firebase database
        database.ref().child($("#train-name-input").val().trim()).set(trainData);
    });

    database.ref().on("value", function(results){
        console.log(results.val());
    })


})

