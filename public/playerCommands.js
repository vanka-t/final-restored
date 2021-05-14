class PlayerSettings{
    constructor(){
      this.r = 75; //player size
      this.x = 50;
      this.y = height-this.r;
      this.vy = 0;
      this.gravity = 0.7; //velocity when pulled back to ground
    }
  
    jump(){
        if (this.y>height-200){ //restricts to only double jump
            this.vy = -10; //velocity of jump
        }
     
  
    }

    hits(enemySettings){
    //     var x1 = this.x + this.r * 0.5;
    //     var y1 = this.y + this.r * 0.5;
    //     var x2 = enemySettings.x + enemySettings.r * 0.5;
    //    var y2 = enemySettings.y + enemySettings.r * 0.5;
    //       return collideRectRect(x1, y1, this.r,this.r,  x2, y2, enemySettings.r,enemySettings.r);
   // return collideRectRect(this.x, this.y, this.r,this.r, enemySettings.x, enemySettings.y, enemySettings.r,enemySettings.r);
     }
   
    //  hits(scoreSettings){ //if player hits shmoney, score goes up
    //  return collideRectRect(this.x, this.y, this.r,this.r, scoreSettings.x, scoreSettings.y, scoreSettings.r,scoreSettings.r);
    //    }

    move(){
      this.y += this.vy;
      this.vy += this.gravity;
      this.y = constrain(this.y, 0, height - this.r); //player can only go from ground level to 'roof'
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