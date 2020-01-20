//scorecard and game variables
var currentNumber = 0; 
var win = 0; 
var lose = 0;
var randomNumberObject = "";



function newGame(){
//Random Number

    // are my vars tied to my images? where do they show up -1/20
    randomNumberObject = Math.floor(Math.random() * 120) + 19;
        currentNumber = 0;
        //moving vars into the $doc... to try to clean up what I see and read, i keep losing my place otherwise 1/20
    var redRandom = Math.floor(Math.random() * 12) + 1;
    var yellowRandom = Math.floor(Math.random() * 12) + 1;
    var blueRandom = Math.floor(Math.random() * 12) + 1;
    var shrekRandom = Math.floor(Math.random() * 12) + 1;


                // in case my computer crashes on 1/19/19 go here next https://stackoverflow.com/questions/28103522/how-to-enable-and-disable-onclick-images
            


    console.log("red: " + redRandom);
    console.log("yellow: " + yellowRandom);
    console.log("blue: " + blueRandom);
    console.log("shrek: " + shrekRandom);

     //print score for game
    document.getElementById("randomNumberObject").innerHTML="Your Number Objective: " + randomNumberObject
};





newGame();
//what happens when clicked


$(".red-gem").on("click",function () {
    currentNumber += redRandom; saveState()     
}); 

$(".yellow-gem").click(function () {  
    currentNumber += yellowRandom; saveState()                
}); 
$(".blue-gem").click(function () {  
    currentNumber += blueRandom; saveState()                
}); 
$(".shrek-gem").click(function () {   
    currentNumber += shrekRandom; saveState()           
}); 

function saveState(){
    if (randomNumberObject === currentNumber) {win++;
        currentNumber += randomNumberObject; alert (Great Job, you did it! Try Again!);
        document.getElementById("win").innerHTML="Win: " + win;
        startGame();

    }
    else if (randomNumberObject <= currentNumber) {lose++;
        currentNumber += randomNumberObject; alert ("You Lose! Try Again!");
        document.getElementById("lose").innerHTML="lose: " + lose;
        startGame();

}

console.log(randomNumberObject)





// //this way didn't work keeping untii further troubleshooting
// (".red-gem").click(function () {
//     currentNumber += redRandom; saveState()     
// }); 

// $(".yellow-gem").click(function () {  
//     currentNumber += yellowRandom; saveState()                
// }); 
// $(".blue-gem").click(function () {  
//     currentNumber += blueRandom; saveState()                
// }); 
// $(".shrek-gem").click(function () {   
//     currentNumber += shrekRandom; saveState()           
// }); 

// function saveState(){
//     if (randomNumberObject === currentNumber)
// }


// update display can't find code, will look in homework for how i did it last time 1/19



//need to add ways to see losses, wins, etc.