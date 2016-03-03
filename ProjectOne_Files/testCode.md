<!-- **************************************************************
cited: from http://stackoverflow.com/questions/29118791/how-to-move-an-element-via-arrow-keys-continuously-smoothly
*************************************************************** -->

/// store key codes and currently pressed ones
var keys = {};
    keys.UP = 38;
    keys.DOWN = 40;

/// store reference to hillary's position and element
var keys = {};
    keys.UP= 38;
    keys.DOWN = 40;

/// store reference to hillary's position and element
var hillary = {
  x: 100,
  y: 100,
  element: document.getElementById("hillary")
};

/// key detection (better to use addEventListener, but this will do)
document.body.onkeyup =
document.body.onkeydown = function(e){
  var kc = e.keyCode || e.which;
  keys[kc] = e.type == 'keydown';
};

/// hillary movement update
var moveHillary = function(dx, dy){
  hillary.x += dx||0;
  hillary.y += dy||0;
  hillary.element.style.bottom = hillary.x + 'px';
  hillary.element.style.top = hillary.y + 'px';
};

/// hillary control
var detecthillaryMovement = function(){
  if ( keys[keys.UP] ) {
    moveHillary(-1);
  }
  if ( keys[keys.DOWN] ) {
    moveHillary(1);
  }
};

/// game loop
setInterval(function(){
  detecthillaryMovement();
}, 1000/1);
<!-- *************************************************** -->
window.onkeydown = function (e) {
  if(!e) {
    e = window.event;
  }

var code = e.keycode;

var top = parseInt (hillary.style.top, 10);
var left = parseInt (hillary.style.left, 10);

if (code == 37) {
  if(left > 0) {
    hillary.style.left = left - 10 + 'px';
  }
} else if (code == 38) {

  if (top > 0) {
    hillary.style.top = top - 10 + 'px';
  }
} else if (code == 39 ) {
  if (left+hillary.width+10 < window.innerWidth) {
    hillary.style.left = left + 10 + 'px';
  }
} else if (code == 40) {
  if (top.hillary.height+10 < window.innerHeight) {
    if (top.hillary.height+10 < window.innerHeight) {
      hillary.style.top = top + 10 + 'px';
    }
  }
}
<!-- ****************************************** -->







var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;
var dx = 2;
var dy = -2;
var paddleHeight = 10;
var paddleWidth = 75;
var paddleX = (canvas.width-paddleWidth)/2;
var rightPressed = false;
var leftPressed = false;

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
}

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, ballRadius, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}
function drawPaddle() {
    ctx.beginPath();
    ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    drawPaddle();

    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }

    if(rightPressed && paddleX < canvas.width-paddleWidth) {
        paddleX += 7;
    }
    else if(leftPressed && paddleX > 0) {
        paddleX -= 7;
    }

    x += dx;
    y += dy;
}

setInterval(draw, 10);
