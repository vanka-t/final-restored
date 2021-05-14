
var socket; //SERVER 

var locked = false; //

var backgroundIcon, scoreIcon, playerIcon, barIcon, enemyIcon; //IMAGES
var gameOverIcon, tryAgainIcon, cursorIcon;


var ww = 1000;
var hh = 500;
var xPos = ww/2; //controlling position for all text icons
var yPos = hh/2;
var myFont;

//BUTTON SETTINGS
var xOffset, yOffset, overButton, locked, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No
buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;



function preload(){
    backgroundIcon = loadImage("images/background.jpg");//icons
    scoreIcon = loadImage("images/shmoney.png"); 
    playerIcon = loadImage("images/bikerKween.png"); 
    barIcon = loadImage("images/brickwall.jpg");
    enemyIcon = loadImage("images/fire.png");
    gameOverIcon = loadImage("images/game-over.jpg")
    tryAgainIcon = loadImage("images/try-again.jpg")
    cursorIcon = loadImage("images/cursorIcon.png")
    
    
    myFont = loadFont("assets/ARCADECLASSIC.TTF") //font
    }

function setup() {
    createCanvas(ww, hh);
    socket = io.connect('http://localhost:3000');
    // socket.on('startGame', newGame);
   
   // socket = io.connect('https://final-acc.herokuapp.com/');
  
  // gameOver = true; //start off game
  // updateSprites = false;
   enemyGroup = new Group();
  scoreGroup = new Group();
  
  scoreIcon.resize(20,20);
  cursorIcon.resize(40,40);
  playerIcon.resize(100,75);
  barIcon.resize(150,50);
  enemyIcon.resize(70,70);
  gameOverIcon.resize(400,270);
  tryAgainIcon.resize(buttonSizeX,buttonSizeY);
  console.log("ome");
  
  //TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);
  }
  
  function draw() {
    background(220);

  // if (drawGame){
  //   playerSprite.collide(barSprite);
  // }
  
  
  }
  