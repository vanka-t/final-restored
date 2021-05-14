class PlayerSettings{
    constructor(){
   
      this.x = 50;
      this.y = height-100;
      this.vy = 0;
      this.gravity = 0.7; //velocity when pulled back to ground
      this.r = 100; //player size
      this.yr = 75;
    }
  
    jump(){
        if (this.y>height-200){ //restricts to only double jump
            this.vy = -10; //velocity of jump
        }
     
  
    }

    hits(enemy1){
    return collideRectRect(this.x, this.y, this.r,this.yr, enemy1.x, enemy1.y, enemy1.r,enemy1.r);
     }

     hits2(enemy2){
        return collideRectRect(this.x, this.y, this.r,this.yr, enemy2.x, enemy2.y, enemy2.r,enemy2.r);
      }
      
     hits3(enemy3){
            return collideRectRect(this.x, this.y, this.r,this.yr, enemy3.x, enemy3.y, enemy3.r,enemy3.r);
     }
   
    //  hits(scoreSettings){ //if player hits shmoney, score goes up
    //  return collideRectRect(this.x, this.y, this.xr,this.xr, scoreSettings.x, scoreSettings.y, scoreSettings.r,scoreSettings.r);
    //    }

    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.yr); //player can only go from ground level to 'roof'
      this.x = constrain(this.x, 0, width); //player can only go from ground level to 'roof'
  
    }

    right(){
        this.x += 5;
    }

    left(){
        this.x -= 5;
    }
  
    show(){

      drawSprite(playerSprite);
      playerSprite.position.x = this.x;
      playerSprite.position.y = this.y;
      
  
      
    }

    stop(){
      this.y = constrain(this.y, this.y-1,  this.y+1); //player can only go from ground level to 'roof'
      this.x = constrain(this.x, this.x-1, this.x+1); //player can only go from ground level to 'roof'
      this.x = this.x;
      this.y = this.y;

    }
  }