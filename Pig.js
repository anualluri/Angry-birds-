class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.visiblity=255// 255 means 11111111 which means fully visible to understand this you need to count the ones, the answer would eb 8 so now you mukltiply 2 to the power of 8 and then you can get 256 but since all numbers in coding start from 0 you need to subtract one to get 255
  }

  display(){
   console.log(this.body.speed);

   if(this.body.speed<3){
    super.display();
   }else{
     push();
     this.visiblity=this.visiblity-5
     tint(255, this.visiblity);
     image(this.image,this.body.position.x, this.body.position.y, 50, 50 )
     World.remove(world, this.body);
     pop();
   }
   
  }

};