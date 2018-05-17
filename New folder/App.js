import React, { Component } from 'react';
import { View, WebView, StatusBar } from 'react-native';

export default class App extends Component {
    render() {

        var webViewCode = `
<html>
<head>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
<script type="text/javascript" src="https://static.codehs.com/gulp/89cd3118fd3b4fab9f913ce7091f1761944163e8/chs-js-lib/chs.js"></script>

<style>
    body, html {
        margin: 0;
        padding: 0;
    }
    canvas {
        margin: 0px;
        padding: 0px;
        display: inline-block;
        vertical-align: top;
    }
    #btn-container {
        text-align: center;
        padding-top: 10px;
    }
    #btn-play {
        background-color: #8cc63e;
    }
    #btn-stop {
        background-color: #de5844;
    }
    .glyphicon {
        margin-top: -3px;
        color: #FFFFFF;
    }
</style>
</head>

<body>
    <div id="canvas-container" style="margin: 0 auto; ">
        <canvas
        id="game"
        width="400"
        height="480"
        class="codehs-editor-canvas"
        style="width: 100%; height: 100%; margin: 0 auto;"
        ></canvas>
    </div>
    <div id="console"></div>
    <div id="btn-container">
        <button class="btn btn-main btn-lg" id="btn-play" onclick='stopProgram(); runProgram();'><span class="glyphicon glyphicon-play" aria-hidden="true"></span></button>
        <button class="btn btn-main btn-lg" id="btn-stop" onclick='stopProgram();'><span class="glyphicon glyphicon-stop" aria-hidden="true"></span></button>
    </div>

<script>
    var console = {};
    console.log = function(msg){
        $("#console").html($("#console").html() + "     " + msg);
    };

    var runProgram = function() {
        function start() {
    setTimer(redtest,0.1);
//Creates the title on the top of the program//
    var title = new Text("  Super Art Horizontal Projectile", "21pt Arial");
    title.setPosition(0, 30);
    add(title);
//
//Creates the border around the drawing box
    var leftline = new Line(25, 40, 25, getHeight()-25);
        leftline.setColor(Color.black);
        add(leftline);
    var rightline = new Line(getWidth()-25, 40, getWidth()-25, getHeight()-25);
        rightline.setColor(Color.black);
        add(rightline);
    var topline = new Line(25, 40, getWidth()-25, 40);
        topline.setColor(Color.black);
        add(topline);
    var bottomline = new Line(25, getHeight()-25, getWidth()-25, getHeight()-25);
        bottomline.setColor(Color.black);
        add(bottomline);
//
    var red1 = new Text("1", "10pt Arial");
    red1.setPosition(45,getHeight()-8);
    var redRectangle = new Rectangle(30,20);
    redRectangle.setPosition(35,getHeight()-22);
    redRectangle.setColor(Color.RED);
    add(redRectangle);
    add(red1);
    var orange2 = new Text("2", "10pt Arial");
    orange2.setPosition(95,getHeight()-8);
    var orangeRectangle = new Rectangle(30,20);
    orangeRectangle.setPosition(85,getHeight()-22);
    orangeRectangle.setColor(Color.ORANGE);
    add(orangeRectangle);
    add(orange2);
    var blue5 = new Text("5", "10pt Arial");
    blue5.setPosition(245,getHeight()-8);
    var blueRectangle = new Rectangle(30,20);
    blueRectangle.setPosition(235,getHeight()-22);
    blueRectangle.setColor(Color.BLUE);
    add(blueRectangle);
    add(blue5);
    var green4 = new Text("4", "10pt Arial");
    green4.setPosition(195,getHeight()-8);
    var greenRectangle = new Rectangle(30,20);
    greenRectangle.setPosition(185,getHeight()-22);
    greenRectangle.setColor(Color.GREEN);
    add(greenRectangle);
    add(green4);
    var yellow3 = new Text("3", "10pt Arial");
    yellow3.setPosition(145,getHeight()-8);
    var yellowRectangle = new Rectangle(30,20);
    yellowRectangle.setPosition(135,getHeight()-22);
    yellowRectangle.setColor(Color.YELLOW);
    add(yellowRectangle);
    add(yellow3);
    var purple6 = new Text("6", "10pt Arial");
    purple6.setPosition(295,getHeight()-8);
    var purpleRectangle = new Rectangle(30,20);
    purpleRectangle.setPosition(285,getHeight()-22);
    purpleRectangle.setColor(Color.PURPLE);
    add(purpleRectangle);
    add(purple6);
    var black7 = new Text("7", "10pt Arial");
    black7.setColor(Color.white);
    black7.setPosition(345,getHeight()-8);
    var blackRectangle = new Rectangle(30,20);
    blackRectangle.setPosition(335,getHeight()-22);
    blackRectangle.setColor(Color.BLACK);
    add(blackRectangle);
    add(black7);
    var width = getWidth();
    var height = getHeight();
//Asks for where the ball should start lines 24-27
    var randomXPos= readInt("Launch position X value (0-350): ");
    while(randomXPos < 0 || randomXPos >= 350) {
        var randomXPos= readInt("Launch position X value (0-350): ");
    }
    var randomXPos = (randomXPos + 25);
    var randomYPos = readInt("Launch position Y value (0-415) : ");
    while(randomYPos < 0 || randomYPos >= 415) {
        var randomYPos= readInt("Launch position Y value (0-415): ");
    }
    var randomYPos = (randomYPos + 40);
mouseClickMethod(onMouseClick);
function onMouseClick(e) {
	var randomXPos = e.getX();
	var randomYPos = e.getY();
}
    var randomYSpeed = (ycomp);
    var randomXSpeed = (xcomp);
    var askAngle = readInt("At what angle should the ball be launched? ");
    var addninety = askAngle + 90;
    var convradians = ((addninety * 3.14) / 180);
    var askSpeed = Math.abs(readInt("What speed should the ball be launched? (1-10)"));
    while(askSpeed < 0 || askSpeed >= 10) {
        var askSpeed = Math.abs(readInt("What speed should the ball be launched? "));
    }
    var xcomp = Math.round((askSpeed) * Math.sin(convradians));
    var ycomp = Math.round((askSpeed) * Math.cos(convradians));
        println(xcomp);
        println(ycomp);
    var timeX = 0;
    var timeY = 0;
    var circle = new WebImage("https://t1.rbxcdn.com/096bd75447e51ae416e373322911faef");
        circle.setSize(50,50);
        circle.setPosition(randomXPos-25,randomYPos-25);
        add(circle);
        setTimer(move,0.1);
    var realSpeed = randomXSpeed + randomYSpeed;
    var nonRoundedSpeed = Math.sqrt(realSpeed);
    var trailColor = 0;
function move(){
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
    if(trailColor==1){
        trail.setColor(Color.RED);
    }
    if(xPos>=width){
        xcomp = xcomp * -1;
        timeX = 0;
        randomXPos = width;
    }
    if(xPos<=30){
        xcomp = xcomp * -1;
        timeX = 0;
        randomXPos = 30;
    }
    if(xPos>=(getWidth()-30)){
        xcomp = xcomp * -1;
        timeX = 0;
        randomXPos = (getWidth()-30);
    }   
    if(yPos>=height){
        ycomp = ycomp * -1;
        timeY = 0;
        randomYPos = height;
    }
    if(yPos<=45){
        ycomp = ycomp * -1;
        timeY = 0;
        randomYPos = 45;
    }
    if(yPos>=(getHeight()-30)){
        ycomp = ycomp * -1;
        timeY = 0;
        randomYPos = (getHeight()-30);
    }
}
mouseClickMethod(addBall);
function addBall(e) {
	var ball = new WebImage("https://akimg0.ask.fm/assets2/019/629/190/656/normal/file.jpg");
	var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
	//var ball = new WebImage("http://www.shufsd.org/NewsImages/OW-Nutcracker175(2).jpg");
	ball.setPosition(e.getX(), e.getY());
	ball.setSize(400,400);
    ball.setPosition(e.getX()-200,e.getY()-200);
	add(ball);
	hitmarker.play();
    
}

function redtest() {
    if(trailColor != 0){
        add(trail);
    }
}
keyDownMethod(drawtrail);
function drawtrail(r) {
    if(r.keyCode == Keyboard.letter('1')) {
        var trailColor = 1;
    }
    if(trailColor==1) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
    if(trailColor==1){
        trail.setColor(Color.RED);
    }
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('2')) {
        var trailColor = 2;
    }
    if(trailColor==2) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.ORANGE);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('3')) {
        var trailColor = 3;
    }
    if(trailColor==3) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.YELLOW);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('4')) {
        var trailColor = 4;
    }
    if(trailColor==4) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.GREEN);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('5')) {
        var trailColor = 5;
    }
    if(trailColor==5) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.BLUE);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('6')) {
        var trailColor = 6;
    }
    if(trailColor==6) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.PURPLE);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == Keyboard.letter('7')) {
        var trailColor = 7;
    }
    if(trailColor==7) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Color.BLACK);
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
    if(r.keyCode == 192) {
        var trailColor = 8;
    }
    if(trailColor==8) {
        circle.move(xcomp,ycomp);
        timeX = timeX + 1;
    var xPos = randomXPos + timeX * xcomp;
        timeY = timeY + 1;
    var yPos = randomYPos + timeY * ycomp;
    var trail = new Circle(5);
        trail.setPosition(xPos,yPos);
        trail.setColor(Randomizer.nextColor());
    var hitmarker = new Audio('http://www.flashkit.com/imagesvr_ce/flashkit/soundfx/Interfaces/Pops/Hit_Mark-Metallic-9040/Hit_Mark-Metallic-9040_hifi.mp3');
    if(trailColor != 0){
        add(trail);
        hitmarker.play();
    }
    }
}
}



        if (typeof start === 'function') {
            start();
        }

        // Overrides setSize() if called from the user's code. Needed because
        // we have to change the canvas size and attributes to reflect the
        // user's desired program size. Calling setSize() from user code only
        // has an effect if Fit to Full Screen is Off. If Fit to Full Screen is
        // On, then setSize() does nothing.
        function setSize(width, height) {
            if (!true) {
                // Call original graphics setSize()
                window.__graphics__.setSize(width, height);

                // Scale to screen width but keep aspect ratio of program
                // Subtract 2 to allow for border
                var canvasWidth = window.innerWidth - 2;
                var canvasHeight = canvasWidth * getHeight() / getWidth();

                // Make canvas reflect desired size set
                adjustMarginTop(canvasHeight);
                setCanvasContainerSize(canvasWidth, canvasHeight);
                setCanvasAttributes(canvasWidth, canvasHeight);
            }
        }
    };

    var stopProgram = function() {
        removeAll();
        window.__graphics__.fullReset();
    }

    window.onload = function() {
        if (!true) {
            $('#btn-container').remove();
        }

        var canvasWidth;
        var canvasHeight;
        if (true) {
            // Get device window width and set program size to those dimensions
            setSize(window.innerWidth, window.innerHeight);
            canvasWidth = getWidth();
            canvasHeight = getHeight();

            if (true) {
                // Make room for buttons if being shown
                $('#btn-container').css('padding', '5px 0');
                canvasHeight -= $('#btn-container').outerHeight();
            }

            setCanvasAttributes(canvasWidth, canvasHeight);
        } else {
            // Scale to screen width but keep aspect ratio of program
            // Subtract 2 to allow for border
            canvasWidth = window.innerWidth - 2;
            canvasHeight = canvasWidth * getHeight() / getWidth();

            // Light border around canvas if not full screen
            $('#canvas-container').css('border', '1px solid #beccd4');

            adjustMarginTop(canvasHeight);
        }

        setCanvasContainerSize(canvasWidth, canvasHeight);

        if (true) {
            runProgram();
        }
    };

    // Set the canvas container width and height.
    function setCanvasContainerSize(width, height) {
        $('#canvas-container').width(width);
        $('#canvas-container').height(height);
    }

    // Set the width and height attributes of the canvas. Allows
    // getTouchCoordinates to sense x and y correctly.
    function setCanvasAttributes(canvasWidth, canvasHeight) {
        $('#game').attr('width', canvasWidth);
        $('#game').attr('height', canvasHeight);
    }

    // Assumes the Fit to Full Screen setting is Off. Adjusts the top margin
    // depending on the Show Play/Stop Buttons setting.
    function adjustMarginTop(canvasHeight) {
        var marginTop = (window.innerHeight - canvasHeight)/2;
        if (true) {
            marginTop -= $('#btn-container').height()/3;
        }
        $('#canvas-container').css('margin-top', marginTop);
    }
</script>
</body>
</html>
`;
        return (
            <View style={{ flex: 1 }}>
                <StatusBar hidden />
                <WebView
                    source={{html: webViewCode, baseUrl: "/"}}
                    javaScriptEnabled={true}
                    style={{ flex: 1 }}
                    scrollEnabled={false}
                    bounces={false}
                    scalesPageToFit={false}
                ></WebView>
            </View>
        );
    }
}
