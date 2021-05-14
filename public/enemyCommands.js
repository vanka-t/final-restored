class EnemySettings{
    constructor(){
        this.x = 200;
        this.y = 0;
        this.r = 70;

    }

    show(){
        image(enemyIcon,this.x,this.y);
    }

    show2(){
        image(enemyIcon,this.x+200,this.y);
    }

    show3(){
        image(enemyIcon,this.x+300,this.y);
    }

    move(){
        this.y +=5;
        this.x +=10
        this.direction += 2;
    }

    move2(){
        this.y +=5.5;
        this.direction += 2;
    }

    move3(){
        this.y +=4.5;
        this.direction += 2;
    }

//     yspeed += 5
//     image(enemyIcon,this.x,this.y);
//     enemy = createSprite(600, 200, 50, 100);
//   enemy.addImage(enemyIcon);


    
}