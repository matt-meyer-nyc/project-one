window.onload = function () {
  console.log("page loaded");


  var bernie = {
    y: 50,
    el: document.querySelector('.bernie')/*,
    redraw: function () {

     },
     update: function () {

    } */
  };

  var hillary = {
    y: 50,
    el: document.querySelector('#hillary')/*,
    redraw: function () {

     },
     update: function () {

    } */
  };

  var donkey = {
   x: 50,
   y: 50,
   el: document.querySelector('donkey'),
   tick: function () {
     // update current x + y values
   },
   redraw: function () {
     // update this.el to reflect new x + y values
   },
   update: function () {
     this.tick();
     this.checkForCollision();
     this.redraw();
   },
   checkForCollision: function () {
     if (this.x >= bernie.x) {

     } else if (this.x <= hillary.x) {

     } else {

     }
   },
   players: [
     bernie,
     hillary
   ]
  }

  // game = {
  //  tick: function () {
  //    hillary.tick();
  //    bernie.tick();
  //    donkey.tick();
  //  }
  // }




  // CITATION: BELOW CODE BASED OFF - How to move a character on a screen with Javascript (https://www.youtube.com/watch?v=vbnjxXCq5HQ)
var hillImg = document.querySelector(".hillaryimg");
var hillBottom = 600;
var bernImg = document.querySelector(".bernieimg");
var bernBottom = 705;

function anim (e) {
  if (e.keyCode == 87) {
    hillBottom += 30;
    hillImg.style.bottom = hillBottom + "px";
  }
  if (e.keyCode == 90) {
    hillBottom -= 30;
    hillImg.style.bottom = hillBottom + "px";

  } if (e.keyCode == 73) {
    bernBottom += 30;
    bernImg.style.bottom = bernBottom + "px";
  }
  if (e.keyCode == 77) {
    bernBottom -= 30;
    bernImg.style.bottom = bernBottom + "px";
  }

  }

document.onkeydown = anim;


// }





}; //END OF FILE
