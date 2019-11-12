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

    function populateTable(obj) {
        for (var train in obj) {
            var newTr = $("<tr>")
            newTr.append(`<td>${train}</td><td>${obj[train].destination}</td><td>${obj[train].frequency}</td><td>${nextTrain(obj[train].frequency, obj[train].train)}</td><td>${minAway(obj[train].frequency, obj[train].train)}</td>`);
            $("tBody").append(newTr);
        }
    }

    function nextTrain(freq, train) {
        return ("placeHolder");

    }

    function minAway(freq, train) {
        return ("placeHolder");

    }

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

    database.ref().on("value", function (results) {
        populateTable(results.val());
    })


})

