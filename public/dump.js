//const { text } = require("express");

console.log("whazzaaaaaaap");

var socket; //SERVER 

var player, enemy3; //class objects
var enemyGroup, scoreGroup, barGroup; //SPRITE GROUPS


var enemySprite, playerSprite, barSprite, scoreSprite; //SPRITES

var locked = false; //

var scores = []; 
var enemies = [];
var enemies2 = [];
var enemies3 = [];
var bars = [];

var backgroundIcon, scoreIcon, playerIcon, barIcon, enemyIcon; //IMAGES
var gameOverIcon, tryAgainIcon, cursorIcon;

var gravity = 1;
var direction = 90;
var points = 0;
var ww = 1000;
var hh = 500;
var xPos = ww/2; //controlling position for all text icons
var yPos = hh/2;
//var paused = false; // will be used to pause

var myFont;

//BUTTON SETTINGS
var xPos, yPos, xOffset, yOffset, overButton, locked, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No

buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;

var gameOver;

console.log("all ready to play babey !");




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

//CREATING SPRITES
barGroup = new Group();
for(var i=0; i<4; i++)
{
  barSprite = createSprite(random(150, width), random(height-150, 0));
 // barSprite = createSprite(random(150, width), random(height-150, height));
  barSprite.addImage(barIcon);
  barGroup.add(barSprite);
}

// for(var i=0; i<600; i+=10){
//   barSprite = createSprite(300,hh-100, 250,80); //floating bars
//   barSprite.addImage(barIcon);
//   barSprite.setCollider("rectangle", -2, 2, 155,80);
//   barSprite.immovable = true;
//   barGroup.add(barSprite);
// } 

//PLAYER SETTINGS
playerSprite = createSprite(50, hh-75);//50, height-75); //player
playerSprite.addImage(playerIcon);




for(var j=0; j<height-50; j+=50){
  scoreSprite = createSprite(random(150, width), random(height-150, 0)); //money icons
 // scoreSprite = createSprite(random(150, width), random(0, height));
scoreSprite.addImage(scoreIcon);
scoreGroup.add(scoreSprite);
}

//ENEMY
for(var i = 0; i<height-100; i+=55) {
   enemySprite = createSprite(random(150, width), random(0, height));
  enemySprite.addImage(enemyIcon);
  enemyGroup.add(enemySprite);
}

//TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);

//COLLISION SETTINGS
//frameRate(60);
}



function draw() {
  //START COMMANDS
  background(backgroundIcon);
  fill(255);
  textSize(35);
drawSprites();
  //DEFAULT SETTING
  playerSprite.velocity.y = 0; //y settings
  playerSprite.position.y = hh-75;

   //x settings
  playerSprite.position.x = 100;
  playerSprite.position.x += playerSprite.velocity.x;

//RESTARTING GAME
if(mouseWentDown(tryAgainIcon)){//(gameOver == false && mouseWentDown(tryAgainIcon)){
  //locked = true;
  newGame();
  console.log("oooooooooooh yeaaaaah");
} else { //DEFAULT GAME

//PLAYER CONTROLS
//playerSprite.position.x += 5;
if(keyDown('d')){
  playerSprite.position.x -= 10;
} 
if (keyDown('a')){
  playerSprite.velocity.x = -10;
} 
if (keyDown('w')){
    //PHYSICS OF JUMPING/MOVING
  //playerSprite.position.y = 
  playerSprite.addSpeed(-25,90);
  // playerSprite.velocity.y += gravity;
  // playerSprite.velocity.y = -5;
  


  // playerSprite.position.y -= 1 + playerSprite.velocity.y;//playerSprite.velocity.y;
  // playerSprite.velocity.y -= 4;

  // if (playerSprite.position.y < 291){ //restricts to only double jump
  //   playerSprite.velocity.y += 5;
  //   playerSprite.position.y += 1;

  //   //playerSprite.velocity.y += gravity; //falls
  //  // playerSprite.position.x += 5; //velocity of jump
     
  // }
}
  if (keyDown('s')){
    playerSprite.velocity.y = 0;
   // playerSprite.velocity.y += 7; //goes down
    playerSprite.position.y += 5;

    if (playerSprite.position.y>height-75){ //restricts to only double jump
      playerSprite.position.y = height-75;
      //playerSprite.velocity.y += gravity; //falls     
    }
  } 



playerSprite.overlap(scoreGroup, collect); //COLLECTING MONEY

//BIG BOUNDING BOX
// for(var i=0; i<allSprites.length; i++) {
//   var s = allSprites[i];
//   if(s.position.x<0) {
//     s.position.x = 1;
//    // s.velocity.x = abs(s.velocity.x);
//   }

//   if(s.position.x>width) {
//     s.position.x = width-1;
//    // s.velocity.x = -abs(s.velocity.x);
//   }

//   if(s.position.y<0) {
//     s.position.y = 1;
//    // s.velocity.y = abs(s.velocity.y);
//   }

//   if(s.position.y>height) {
//     s.position.y = height-1;
//    // s.velocity.y = -abs(s.velocity.y);
//   }
// }

//CALLING ON TEXT
text("Score      " + points, 100,50);

}


//ENEMY FALLING RANDOMLY
if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
  for(var i = 0; i<enemyGroup.length; i++) {
    var e = enemyGroup[i];
    //moving all the enemies y following a sin function (sinusoid)
    e.position.y += sin(frameCount/10);
  }
}

playerSprite.collide(barGroup);
if (enemyGroup.overlap(playerSprite)){
  gameOver();
};//, gameOver);//if enemy + player touch, its game over
//   }
 



//playerSprite.position.y = height-75;
 if(playerSprite.bounce(barGroup)){
   //playerSprite.velocity.y += gravity;
 }
//CURSOR


if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
  for(var i = 0; i<scoreGroup.length; i++) { //moves money followingg sin function
    var ss = scoreGroup[i];
    ss.position.y += sin(frameCount/10);
      }
    
  }
  image(cursorIcon, mouseX,mouseY); 
}


function newGame() {
  //enemyGroup.removeSprites();
  //gameOver = true;
  //updateSprites = true;
  playerSprite.position.x =   50;
  playerSprite.position.y = height-75;
  playerSprite.velocity.y = 0;

}



  function mouseReleased() {
    locked = false;
  }

  //COLLECTING SCORE FUNCTION
  function collect(collector, collected){ //COLLECTOR == PLAYER
  collector.position.x +=1;
  collected.remove();
  points ++;
}

