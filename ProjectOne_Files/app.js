window.onload = function () {
  console.log("page loaded");

  var bernImg = document.querySelector(".bernieimg");
  var hillImg = document.querySelector(".hillaryimg");


// *************************************************
// CITATION: Code Below Based on Skeleton From:
//   http://www.webreference.com/programming/javascript/java_anim2/4.html
  var dirx = 1;
  var diry = 1;
  var spx = 10;
  var spdy = setRand();

  var imgLeftIn;
  var imgTopInt;
  var imgWidth;
  var divWidth;
  var divHeight;

  var theBall;

  var t = 0;

  var rInt, lInt;

  function animBall () {
    theBall     = document.getElementById('.donkeyimg');
    imgLeftInt  = parse(theBall.style.left);
    imgTopInt   = parseInt(theBall.style.top);
    imgHeighInt = parseInt(theBall.height);
    imgWidthInt = parseInt(theBall.width);

    winWidth = 878;
    winHeight = 632;

    PadLoc ();

    bernR  = parseInt(bernImg.style.left);
    hillL = parseInt(hillImg.style.left) + parseInt(hillImg.style.width);
      if ((imgLeftInt) == bernR) {
        bernHit ();
      } else if ((imgLeftINt) == hillL) {
        hillHit();
      }
      if (dirx == 1) {
        goRight();
      } else {
        goLeft();
      }
      if (diry == 1) {
        goDown();
      } else {}
        goUP();
    }
  };



  ////will set y-axis to a random speed
    function setRand () {
      randNum = Math.floor(Math.random()*6) +2;
      return randNum;
    }

/////should serve ball
    function captureKey(e) {
       if (e.keyCode) {
            keycode=e.keyCode;  // works with the DOM
       }
       move=String.fromCharCode(keycode);
          if (move == "s") {
              serveBall();
          }
    }
      //hopefully adds to DOM w/o event listener
    document.onkeydown = captureKey;



    function goRight () {
      theBall.style.left = imgLeftInt+spdx + "px";
      if (imgLeftInt > (winWidth = (imgWidth))) {
        score('left');
      }
    }

    function goRight () {
      theBall.style.left = imgLeftInt-spdx + "px";
      if (imgLeftInt < 10) {
        score('right');
      }
    }

    function goDown () {
      theBall.style.top = imgTopInt+spdy + "px";
      if (imgTopInt > (winHeight -(imgWidth + spdy))) {
        diry = 0;
        spdy = setRand();
      }
    }

    function goUp () {
      theBall.style.top = (imgLeftInt-spdy) + "px";
      if (imgLeftInt < 5) {
        diry = 1;
        spdy = setRand();
      }
    }

    function PadLoc() {
      bernImg;
      rInt = parseInt(bernImg.style.top);
      hillImg;
      lInt = parseInt(hillImg.style.top);
      return bernImg, rIng, hillImg, lInt;
    }

    function bernHit () {
    rBottom = rInt + parseInt(bernImg.style.height);
    rTop = rInt - imgHeight;
    if ((imgTopInt > rTop)) {

    dirx = 0;
  }
}

function hillHit () {
  lBottom = lInt + parseInt (hillImg.style.height);
  lTop = lInt - imgHeight;
  if ((imgTopInt < lTop)) {
    dirx = 1;
  }
}

function score (side) {
  clearInterval (t);
  msgBox = document.getElementById('messageBox')
}



// // ***************************************************
// // //CITATION: Code below provided by Matt Short at one-on-one meeting


// //   var bernie = {
// //     y: 50,
// //     el: document.querySelector('.bernie')/*,
// //     redraw: function () {
// //
// //      },
// //      update: function () {
// //
// //     } */
// //   };
// //
// //   var hillary = {
// //     y: 50,
// //     el: document.querySelector('#hillary')/*,
// //     redraw: function () {
// //
// //      },
// //      update: function () {
// //
// //     } */
// //   };
// //
// //   var donkey = {
// //    x: 50,
// //    y: 50,
// //    el: document.querySelector('donkey'),
// //    tick: function () {
// //      // update current x + y values
// //    },
// //    redraw: function () {
// //      // update this.el to reflect new x + y values
// //    },
// //    update: function () {
// //      this.tick();
// //      this.checkForCollision();
// //      this.redraw();
// //    },
// //    checkForCollision: function () {
// //      if (this.x >= bernie.x) {
// //
// //      } else if (this.x <= hillary.x) {
// //
// //      } else {
// //
// //      }
// //    },
// //    players: [
// //      bernie,
// //      hillary
// //    ]
// //  };
// //
// //   // game = {
// //   //  tick: function () {
// //   //    hillary.tick();
// //   //    bernie.tick();
// //   //    donkey.tick();
// //   //  }
// //   // }
// **********************************************



// **************************************************************************************************************************************
//   // CITATION: BELOW CODE BASED OFF - How to move a character on a screen with Javascript (https://www.youtube.com/watch?v=vbnjxXCq5HQ)

var hillBottom = 600;
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
// *****************************************************







}; //END OF FILE
