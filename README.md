I'm psyched to have gotten this about 90% there. This is a Pong type game, but the 'paddles' are Hillary Clinton and Bernie Sanders heads, and the ball is the Decomcratic party donkey mascot.The two major flawes are:

-I can't get the Hillary 'paddle' to move
-I can't get the game to reset without refreshing the page

At first discussion about the project with Shorty on Thurs., I was feeling like this might be way beyond mine in terms of him elaborating on the physics involved in making this work using absolute positiong (vectors, speeds, etc.).

I was hoping to be able to write the programming from scratch, and I experimented with using positioning similar to what we used for our 'Snuggles' excercise. By Thurs. night I was feeling ahead of the game. I had styled the game about 80%, largely using lunapic.com and fotoflexer.com to manipulate images I pulled off Google, and then HTML and CSS to lay everything out. I was also able to get the 'paddles' moving.

However by Friday night, I was unable to create the functions to ge the game working, so I turned to go I could cite. This proved to be extremely tough, as it took me over 24 hours to find working code. At first I wanted to code along so I could udnerstand each of the process, but I was finding eventually that I'd plug the codes providied in, but they wouldn't work, so coding along was costing me time. Also, Shorty advised me not to use canvas, and nearly all the references I could find Googling Pong had used canvas. Thanks to me talk with Shorty, I knew better what I needed to find, and the codes I looked through seemed to me to be like looking at advances arithmetic (mostly understandable) as opposed to advanced calculus (and of couse, thanks to what we've learned in class so far).

Finally I found a working code for 1 player game at - http://jsfiddle.net/scooter/syDZ9/

Using what we've learned, I reworked the code to match the way I had initially stylized the game, and got it largely working.

This came up with Shorty, but I opted to leave out a normalize function, so as the 'ball' accumulates speed every time it changes directiond and makes the game harder.

The loop I got thrown for was this. Every time I tried to add in the 'Snuggles' code I had working to move the 'paddles' the entire layout fo the screen got turned about.

The code I cited used this for paddle movement:

`document.onkeydown = function (e) {
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
};`

I'm a still confused about why this moves the Bernie 'paddle' and not any other 'div' as there is nothing specifically referenced (either 'div' or defined variable). That said, I was unable how to specifically use this expression/function to specifically move Hillary as well (if I added a duplicate expression with different keycodes, it would just overwrite this one and still move Bernie).

I wrote in the ability to keep track of the score each time the ball hit the other players wall, and have it expressed on the left navbar. I also used Google fonts to make the font-style look like a retro arcade.

I'm looking forward to making up the other 10% I need to fix this, adding a few other bells/whisteles (like having the donkey flip back and forth when changign x-axis direction, and sound effects) and having it be part of my portfolio.


