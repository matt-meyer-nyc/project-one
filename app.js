window.onload = function () {



var hillaryScore = 0;
var bernieScore = 0;




//!! CITATION: Skeleton for Program borrowed from: http://jsfiddle.net/scooter/syDZ9/  !!

//display - game consel
var fieldWidth = 878;
var fieldHeight = 643;
var fieldColor = document.querySelector('.whitehouse');

//Bernie's 'paddl' details
var paddleWidth = 0.1;   //my own cheat to make it appear there's not paddle
var paddleHeight = 80;
var paddleColor = 0x00ff00;
var paddleSpeed = 6;
var paddleXPos = fieldWidth - Math.floor(fieldWidth / 10);
var paddleYPos = Math.floor((fieldHeight - paddleHeight)/2);

//hillary's 'paddle' details
var paddleWidthHill = 0.1;
var paddleHeightHill = 80;
var paddleColorHill = 0x00ff00;
var paddleSpeedHill = 6;
var paddleXPosHill = fieldWidth - (fieldWidth / 1.1);
var paddleYPosHill = Math.floor((fieldHeight - paddleHeight)/2);

//details about the 'ball' aka donkey
var ballSize = 40;
var ballXPos = (fieldWidth / 2.1);
var ballYPos = Math.floor((fieldHeight - ballSize) / 2);
var ballXSpeed = Math.floor(Math.random() * 3) + 1;
var ballYSpeed = 2;
var ballColor = document.querySelector("#ball");

var keyState = 0;
var intTimeHandle =0;





function setPosition(x,y) {
    this.xpos = x;
    this.ypos = y;
    this.obj.style.top = y.toString() + "px";
    this.obj.style.left = x.toString() + "px";
}

function setColor(newColor) {
    newColor = "000000" + newColor.toString(16);
    this.obj.style.backgroundColor = "#" + newColor.substr(newColor.length - 6);
}


function PlayingField(width, height, color) {
    this.width = width;
    this.height = height;
    this.obj = document.getElementById("playingField");
    this.obj.style.width = width.toString() + "px";
    this.obj.style.height = height.toString() + "px";
    this.setColor = setColor;
    this.setColor(color);
    this.obj.onclick = function() {

        document.getElementById('instructions').style.display = 'none';
        if (intTimeHandle === 0) {
            intTimeHandle = setInterval(function(){timerTick();},10);
        }
    };
}


function Paddle(width, height, color, speed, xpos, ypos) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.obj = document.getElementById("paddle");
    this.obj.style.width = width.toString() + "px";
    this.obj.style.height = height.toString() + "px";


    this.setColor = setColor;
    this.setColor(color);


    this.setPosition = setPosition;
    this.setPosition(xpos,ypos);
}
////////////////////////////////////////////////
function hPaddle(width, height, color, speed, xpos, ypos) {
    this.width = width;
    this.height = height;
    this.speed = speed;
    this.obj = document.getElementById("hPaddle");
    this.obj.style.width = width.toString() + "px";
    this.obj.style.height = height.toString() + "px";


    this.setColor = setColor;
    this.setColor(color);


    this.setPosition = setPosition;
    this.setPosition(xpos,ypos);
}

//////////////////////////////////////////////


function Ball(size, xpos, ypos, xspeed, yspeed, color) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;

    this.obj = document.getElementById("ball");


    this.setPosition = setPosition;


    this.setSize = setSize;
    function setSize(size) {
        this.size = size;
        this.obj.style.width = this.size.toString() + "px";
        this.obj.style.height = this.size.toString() + "px";
        var radius = Math.floor(size / 2);
        this.obj.style.borderRadius = radius.toString() + "px";
        this.obj.style.MozBorderRadius = radius.toString() + "px";
        this.obj.style.WebKitBorderRadius = radius.toString() + "px";
    }

    this.setPosition(xpos,ypos);
    this.setSize(size);
    this.setColor = setColor;
    this.setColor(color);
}


var field = new PlayingField(fieldWidth, fieldHeight, fieldColor);


var paddle = new Paddle(paddleWidth, paddleHeight, paddleColor, paddleSpeed, paddleXPos, paddleYPos);

////////////////////////////////////////////////////////////////////////////////////
var hpaddle = new hPaddle(paddleWidthHill, paddleHeightHill, paddleColorHill, paddleSpeedHill, paddleXPosHill, paddleYPosHill)
/////////////////////////////////////////////////////////////////////////////


var ball = new Ball(ballSize, ballXPos, ballYPos, ballXSpeed, ballYSpeed, ballColor);




document.onkeydown = function (e) {
    var evt = e || window.event;
    if (evt.keyCode == 38) {

        keyState = -1;
    } else if (evt.keyCode == 40) {

        keyState = 1;
    }
    return false;
};

document.onkeyup = function (e) {
    var evt = e || window.event;
    if (evt.keyCode == 38 || evt.keyCode == 40) {
        keyState = 0;
    }
    return false;
};
////////////////////////////////////////////////////
//I'm stuck here at how to connect this to  the specific div to make Hillary move (Sunday: 11:14pm)

// document.onkeydown = function (e) {
//     var evt = e || window.event;
//     if (evt.keyCode == 87 && document.querySelector('#hPaddle')) {
//       //'w' key
//         keyState = -1;
//     } else if (evt.keyCode == 90) {
//     //'z'
//         keyState = 1;
//     }
//     return false;
// };
//
// document.onkeyup = function (e) {
//     var evt = e || window.event;
//     if (evt.keyCode == 38 || evt.keyCode == 40) {
//         keyState = 0;
//     }
//     return false;
// };
//////////////////////////////////////////////////////





//////////////////////////////////////////////////////


function gameOver() {
    clearInterval(intTimeHandle);
    document.getElementById('instructions').innerHTML = "Game Over";
    document.getElementById('instructions').style.display = "block";
    field.setColor(0xff0000);



}


function timerTick() {

    var currx = ball.xpos;
    var curry = ball.ypos;
    var prevx = ball.xpos;

    currx += ball.xspeed;
    curry += ball.yspeed;

    // Check for ball leaving field
    // look for hit on left wall
    if (currx < 0) {
        currx = 0;
        ball.xspeed *= -1;
        // gameOver();
        bernieScore +=1
        document.getElementById('bernScore').innerHTML = "BERNIE's SCORE: " + "\n" + bernieScore;

    }

    if (curry < 0) {
        curry = 0;
        ball.yspeed *= -1;
    }

    if (currx > (field.width - ball.size)) {
        currx = (field.width - ball.size);
        //ball.xspeed *= -1;
        gameOver();
        hillaryScore +=1
        document.getElementById('hillScore').innerHTML = "HILLARY's SCORE: " + hillaryScore;
/////////////////////////////////////////////////////////////
        var resetButton = document.getElementbyId('instructions');
        Playingfield.onclick= reloadPage;
                                    //   <-----
        function reloadPage(){            //Stuck getting page to reload after game over to start game
        window.location.reload();         //  w/o having to refresh page; tried this, really confused,
}                                         //   because now getting rid of it messes up display of console
///////////////////////////////////////////////////////////////////////
    }
    // look for hit on bottom wall
    if (curry > (field.height - ball.size)) {
        curry = (field.height - ball.size);
        ball.yspeed *= -1;
    }

    /////////////////////////////////////////////////////////
   ////below...did ball contact paddle (check to see)
    if ((prevx <= (hpaddle.xpos - ball.size)) && (currx > (hpaddle.xpos - ball.size))) {
        if ((curry > (hpaddle.ypos - Math.floor(ball.size/2))) && (curry < hpaddle.ypos + hpaddle.height - Math.floor(ball.size/2))) {
            ball.xspeed *= -1.1;
        }
    }
    ball.setPosition(currx,curry);



    if ((prevx <= (paddle.xpos - ball.size)) && (currx > (paddle.xpos - ball.size))) {
        if ((curry > (paddle.ypos - Math.floor(ball.size/2))) && (curry < paddle.ypos + paddle.height - Math.floor(ball.size/2))) {
            ball.xspeed *= -1.1;
        }
    }
    ball.setPosition(currx,curry);



    var pady = paddle.ypos;
    pady = pady + (paddle.speed * keyState);
    if (pady < 0) {
        pady = 0;
        keyState = 0;
    }
    if (pady > (field.height - paddle.height)) {
        pady = field.height - paddle.height;
        keyState = 0;
    }
    paddle.setPosition(paddle.xpos, pady);


var hpady = hpaddle.ypos;
hpady = hpady + (hpaddle.speed * keyState);
if (phady < 0) {
    hpady = 0;
    keyState = 0;
}
if (hpady > (field.height - hpaddle.height)) {
    hpady = field.height - hpaddle.height;
    keyState = 0;
}
hpaddle.setPosition(hpaddle.xpos, hpady);
}



};//END PROGRAM


//
// Sunday: 11:40pm:
//
// 3 major flaws:
//
// 1 - can't get Hillary to move
// 2 - can't get game to restart without refreshing page (i.e. continuous game loop, so can do that and also keep score)
// 3 - can't get Bernie's score to display
