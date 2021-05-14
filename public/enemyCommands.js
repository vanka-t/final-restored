class EnemySettings{
    constructor(){
        this.x = 200;
        this.y = 0;
        this.r = enemyR;

    }

    show(){
        drawSprite(enemySprite);
        enemySprite.position.x = this.x;
        enemySprite.position.y = this.y;
    }

    show2(){
        drawSprite(enemySprite);
        enemySprite.position.x = this.x + 200;
        enemySprite.position.y = this.y;
    }

    show3(){
        drawSprite(enemySprite);
        enemySprite.position.x = this.x + 400;
        enemySprite.position.y = this.y;
    }

    show4(){
        drawSprite(enemySprite);
        enemySprite.position.x = this.x + 650;
        enemySprite.position.y = this.y;
    }

    move(){
        this.y +=5;
       // this.x +=10
       // this.direction += 2;
    }

    move2(){
        this.y +=5.5;
        //this.direction += 2;
    }

    move3(){
        this.y +=4.5;
     //   this.direction += 2;
    }

    move4(){
        this.y +=6.5;
     //   this.direction += 2;
    }


    
}