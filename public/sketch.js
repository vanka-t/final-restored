
var socket; //SERVER 

var locked = false; //

var backgroundIcon, scoreIcon, playerIcon, barIcon, enemyIcon; //IMAGES
var gameOverIcon, tryAgainIcon, cursorIcon;

var enemyGroup, scoreGroup, barGroup; //SPRITE GROUPS
var enemies = [];
var enemies2 = [];
var enemies3 = [];
var scores = []; 
var bars = [];


var ww = 1000;
var hh = 500;
var xPos = ww/2; //controlling position for all text icons
var yPos = hh/2;
var myFont;
var points = 0;

// var playerX = 100; //width and height of player
// var playerY = 75;
var enemyR = 70; //radius of enemy

//BUTTON SETTINGS
var xOffset, yOffset, overButton, locked, buttonSizeX, buttonSizeY; //adjustments for mousePressed for buttonYes/No
buttonSizeX = 180;
buttonSizeY = 100;
xOffset = 0.0;
yOffset = 0.0;

var player, enemy1, enemy2,enemy3;

function preload(){
    backgroundIcon = loadImage("images/background.jpg");//icons
    scoreIcon = loadImage("images/shmoney.png"); 
    playerIcon = loadImage("images/bikerKween.png"); 
    barIcon = loadImage("images/brickwall.jpg");
    enemyIcon = loadImage("images/fire.png");
    gameOverIcon = loadImage("images/tryagain.png")
    tryAgainIcon = loadImage("images/tryagain.png")
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
//    enemyGroup = new Group();
  scoreGroup = new Group();
  
  scoreIcon.resize(20,20); //RESIZING ICONS
  cursorIcon.resize(40,40);
  playerIcon.resize(100,75);
  barIcon.resize(150,50);
  enemyIcon.resize(70,70);
  gameOverIcon.resize(400,270);
  tryAgainIcon.resize(buttonSizeX,buttonSizeY);
  console.log("ome");
  
  barGroup = new Group(); //BAR SPRITE
for(var i=0; i<4; i++)
{
  barSprite = createSprite(random(150, width), random(height-150, 0));
 // barSprite = createSprite(random(150, width), random(height-150, height));
  barSprite.addImage(barIcon);
  barGroup.add(barSprite);
}

  playerSprite = createSprite(50,hh-75); //INTRODUCING PLAYER SPRITE
  playerSprite.addImage(playerIcon);

  enemyGroup = new Group(); //INTRODUCING ENEMY SPRITE
  //for(var i = 0; i<height-100; i+=55) { 
    enemySprite = createSprite(0,0, enemyR, enemyR);//i);
   enemySprite.addImage(enemyIcon);
   enemyGroup.add(enemySprite);
 //}


for(var j = 0; j<6; j++) {
    scoreSprite = createSprite(random(150, width), random(0, height-150)); //money icons
    scoreSprite.addImage(scoreIcon);
    //scoreGroup.add(scoreSprite);
    scoreSprite.addToGroup(scoreGroup);
  }
  //TEXT SETTINGS
textSize(50);
fill(0);
textFont(myFont);
textAlign(CENTER);

 player = new PlayerSettings();
 //score = new ScoreSettings();

   }
  
  function draw() {
      //ENEMY COMMANDS
  if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
enemies.push(new EnemySettings());
 }
 if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    enemies2.push(new EnemySettings());
 }
 if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    enemies3.push(new EnemySettings());
 }

  //START COMMANDS
  background(backgroundIcon);
//CALLING ON TEXT
  fill(255);
  textSize(35);
  text("Score      " + points, 100,50);

//DISPLAY AND MOVE PLAYER
  player.show();
  
  player.move();


//PLAYER COMMANDS
  if(keyDown('d')){
    player.right();
  } else if (keyDown('a')){
      player.left();
  } else if (keyDown('w')){
    player.jump();
//   player.move();
  }

  if(random(1) <0.01){ //spikes showing up irregularly -->decimal value = probability of bar showing up
    for(var i = 0; i<scoreGroup.length; i++) { //moves money followingg sin function
      var ss = scoreGroup[i];
      ss.position.y += sin(frameCount/10);
        }
      
    }

  
  playerSprite.overlap(scoreGroup, collect); //COLLECTING MONEY

//DISPLAY AND MOVE ENEMIES
for (let e of enemies){ 
    e.show();
    e.move();
    if (player.hits(e)){
        //console.log("oopsiez");
        e.stop(player);
        gameOver();
       }
}

for (let e of enemies2){
    e.show2();
    e.move2();
    if (player.hits(e)){
       // console.log("oopsiez");
        //gameOver();
       }
}

for (let e of enemies3){
    e.show3();
    e.move3();
    if (player.hits(e)){
      //  console.log("oopsiez");
        
        //gameOver();
       }
}

drawSprites(barGroup);
playerSprite.collide(barGroup);

for(var i = 0; i<scoreGroup.length; i++) { //moves money followingg sin function
    var ss = scoreGroup[i];
    ss.position.y += sin(frameCount/10);
      }
      push();
      for(xx=100;xx<width;xx+=500){
        for(yy=200;yy<height-100;yy+=500){
     
      translate(xx,yy);
      drawSprites(scoreGroup);
  
      }
      }

}
  

function collect(collector, collected){ //COLLECTOR == PLAYER
    collector.position.x +=1;
    collected.remove();
    points ++;
}