/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Sanghyuk Lee Student ID: 129405171 Date: 2019-01-17
*
*
********************************************************************************/ 
$(document).ready(function(){ //ready handler is a function to execute after the DOM is ready.
    console.log("jQuery Working");
    $( "#teams-menu" ).on( "click", function(event) { //whenever the id=teams-menu has been clicked then the event in the function happens
        event.preventDefault();
        $.get("https://blooming-cove-58238.herokuapp.com/teams")
            .done(function(data){
                $("#data").empty()
                    .append("<h3>Teams<h3>")
                    .append(JSON.stringify(data));
            });   
    });
    $( "#employees-menu" ).on( "click", function(event) {
        event.preventDefault();
        $.get("https://blooming-cove-58238.herokuapp.com/employees")
            .done(function(data){
                $("#data").empty()
                    .append("<h3>Employees<h3>")
                    .append(JSON.stringify(data));
            });   
    });
    $( "#projects-menu" ).on( "click", function(event) {
        event.preventDefault();
        $.get("https://blooming-cove-58238.herokuapp.com/projects")
            .done(function(data){
                $("#data").empty()
                    .append("<h3>Projects<h3>")
                    .append(JSON.stringify(data));
            });   
    });
    $( "#positions-menu" ).on( "click", function(event) {
        event.preventDefault();
        $.get("https://blooming-cove-58238.herokuapp.com/positions")
            .done(function(data){
                $("#data").empty()
                    .append("<h3>Positions<h3>")
                    .append(JSON.stringify(data));
            });   
    });
});
