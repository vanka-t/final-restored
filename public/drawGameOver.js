//const { text } = require("express");

function gameOver(){

   //NOTES: keep this page static by disabling player motion
//updateSprites(false);
//gameOver = true;

   imageMode(CENTER);
   image(gameOverIcon,xPos,yPos);
   imageMode(CORNER);
   //image(tryAgainIcon,xPos+50,yPos+100);
text("Refresh to restart!",ww/2,250);
  noLoop();
   
}

function firstGame(){
   //insert final banner here and then connecting buttons to pages as accordingly
   imageMode(CENTER);
   
 //BUTTON SETTINGS 
 if ( 
    mouseX > xPos+50 - buttonSizeX && //syncing mouse with button settings
    mouseX < xPos+100 + buttonSizeX &&
    mouseY > yPos+50 - buttonSizeY &&
    mouseY < yPos +100 +buttonSizeY
  ) {
     overButton = true;
    if (!locked) { //if mouse scrolls past buttons, WHITE RECTS show up in back
      ellipseMode(CENTER);
      fill(255,255,255,80);
      noStroke();
      rect(xPos+50,yPos+100,buttonSizeX+10,buttonSizeY+10);
    
  } else {
    //console.log("ur the 2nd best")
    overButton = false;
  }
  
 }
}