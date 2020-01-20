var currentNumber = 0; 
var win = 0; 
var lose = 0;
var randomNumberObject = "";

//Random Number
var lotteryValue = Math.floor(Math.random() * 120) + 19;

//Random Crystal Value  need to double check
var crystalValue1 = Math.floor(Math.random() * 12) + 1;
var crystalValue2 = Math.floor(Math.random() * 12) + 1;
var crystalValue3 = Math.floor(Math.random() * 12) + 1;
var crystalValue4 = Math.floor(Math.random() * 12) + 1;
$(document).ready(function() {

$('currentNumber').val(lotteryValue);

$("button").val(crystalValue1,crystalValue1, crystalValue1,crystalValue1);

score = $('.scoreBox');

        // in case my computer crashes on 1/19/19 go here next https://stackoverflow.com/questions/28103522/how-to-enable-and-disable-onclick-images
    $(".btn1").click(function () {     
    }); 
    $(".btn2").click(function () {                 
    }); 
    $(".btn3").click(function () {                 
    }); 
    $(".btn4").click(function () {             
    }); 
});


$(".btn1").click(function () {     
    score += crystalValue1;
}); 
// update display can't find code, will look in homework for how i did it last time 1/19





// var targetNumber = 53;  //this will be a random number 

//   $("#number-to-guess").text(targetNumber);

//   var counter = 0;

//   // Now for the hard part. Creating multiple crystals each with their own unique number value.

//   // We begin by expanding our array to include four options.
//   var numberOptions = [10, 5, 3, 7];




  $buttons()



for (var i = 0; i < numberOptions.length; i++) {

    // For each iteration, we will create an imageCrystal
    var imageCrystal = $("<img>");

    // First each crystal will be given the class ".crystal-image".
    // This will allow the CSS to take effect.
    imageCrystal.addClass("crystal-image");

    // Each imageCrystal will be given a src link to the crystal image
    imageCrystal.attr("src", "./assets/images/generic heart-1.png.png"); //figure out how to link ot my images -1/19

    // Each imageCrystal will be given a data attribute called data-crystalValue.
    // This data attribute will be set equal to the array value.
    imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    // Lastly, each crystal image (with all it classes and attributes) will get added to the page.
    $("#crystals").append(imageCrystal);
  }

//this is filler code from w3schools



document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
  document.getElementById("demo").innerHTML = "YOU CLICKED ME!";
}
 