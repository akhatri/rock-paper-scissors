/*!
 * Rock, Paper and Scissors Game
 * Based on the Javascript Lesson on Codeacademy
 *
 * 
 *
 * Copyright 2014 Akshat Khatri 
 * Released under the MIT license:
 *   http://www.opensource.org/licenses/mit-license.php
 */


    var userChoice;
    var computerChoice;

    $(document).ready(function() {

    	// disable the button until user selects a choice
    	$("#game-result").attr('disabled','disabled');

        $("#user-choice").change(function(event) {
            // enable button until user selects a choice
    		$("#game-result").removeAttr('disabled');

    		// assign value to variable
            userChoice = $("#user-choice").val();
            return userChoice;
        });

        $("#game-result").click(function(e) {
            /* Act on the event */
            e.preventDefault();
            computerGenerator();
            $("#computer-choice").text(computerChoice);
            compare(userChoice, computerChoice);
        });
    });

    /* List of functions */
    var computerGenerator = function() {
        computerChoice = Math.random();
        if (computerChoice < 0.34) {
            computerChoice = "rock";
        } else if (computerChoice <= 0.67) {
            computerChoice = "paper";
        } else {
            computerChoice = "scissors";
        }
        return computerChoice;
    };



    //compare function between user and computer choice
    var compare = function(choice1, choice2) {

        var result;

        if (choice1 === choice2) {
            var html = '<div class="alert alert-warning">Result is a tie!</div>';
            result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
        } else if (choice1 == "rock") {
            if (choice2 == "scissors") {
                var html = '<div class="alert alert-success">You win!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            } else {
                var html = '<div class="alert alert-danger">Computer wins!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            }
        } else if (choice1 == "paper") {
            if (choice2 == "rock") {
                var html = '<div class="alert alert-success">You win!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            } else {
                var html = '<div class="alert alert-danger">Computer wins!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            }
        } else if (choice1 == "scissors") {
            if (choice2 == "rock") {
                var html = '<div class="alert alert-danger">Computer wins!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            } else {
                var html = '<div class="alert alert-success">You win!</div>';
                result = $(html).hide().appendTo(".jumbotron").fadeIn(1000).delay(2000).fadeOut("slow");
            }
        }

    };
