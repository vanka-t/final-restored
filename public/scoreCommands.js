// class ScoreSettings{
//     constructor(){
   
//         this.x = random(150,ww);
//         this.y = random(100,height-100);
//         this.vy = 0;
//         this.gravity = 0.7; //velocity when pulled back to ground
//         this.r = 100; //player size
//         this.yr = 75;
//       }
    
//       jump(){
//             this.vy = -2; //velocity of jump
          
//       }
  
//       move(){
//         this.y += this.vy;
//         this.vy += this.gravity;
//         this.y = constrain(this.y, this.y-3, this.y+3); //player can only go from ground level to 'roof'
      
//       }
  
    
//       show(){
  
//         // for(this.y=0;this.y<500;this.y++){
//         // for(this.x=0;this.x<800;this.x++){
//             scoreSprite.position.x = this.x;
//             scoreSprite.position.y = this.y;
//             drawSprite(scoreSprite);
//       }
        
// }

function scoreFunction(){
    drawSprites(scoreGroup);
}