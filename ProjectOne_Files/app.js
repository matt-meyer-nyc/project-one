window.onload = function () {
  console.log("page loaded");


var hillary = document.querySelector('#hillary');
var bernie = document.querySelector('.bernie');
var donkey = document.querySelector('.donkey');
var navbar = document.querySelector('#navbar')

var singlePlayer = document.querySelector('.singleplayer');

var singlePlayerH3 = document.createElement('h3');

// singlePlayerH3.innerText = "Single Player Mode";
// singlePlayer.appendChild(singlePlayerH3);
// navbar.appendCHild(singlePlayer)
// document.body.appendChild(navbar)
//     WHY WON'T THIS PUPPY ABOVE WORK?




// ***********************************************************
// SOURCE FOR THE SKELETON OF THIS CODE - http://forums.tumult.com/t/move-an-element-or-div-with-arrow-keys/2514


hillary.style.top = 0;
hillary.style.left = 0;

document.body.onkeyup = function() {
var e = event.keyCode,
   charTop = parseInt(document.getElementById("hillary").style.top),
   charLeft = parseInt(document.getElementById("hillary").style.left);

   if (e == 40) { //down function
       document.getElementById("hillary").style.top = (parseInt(document.getElementById("hillary").style.top)) + 10 + "px";
   } else if (e == 37) { //left function
       document.getElementById("hillary").style.left = (parseInt(document.getElementById("hillary").style.left)) - 10 + "px";
   } else if (e == 39) { //right function
       document.getElementById("hillary").style.left = (parseInt(document.getElementById("hillary").style.left)) + 10 + "px";
   } else if (e == 38) { //up function
       document.getElementById("hillary").style.top = (parseInt(document.getElementById("hillary").style.top)) - 10 + "px";
   }

}

// ***************************************************************







}; //END OF FILE
