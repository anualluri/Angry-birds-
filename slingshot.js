class Sling{
    constructor(bodyAA, pointBB){
     
      this.sling1=loadImage("sprites/sling1.png")
      this.sling2=loadImage("sprites/sling2.png")
      this.sling3=loadImage("sprites/sling3.png")
        var options = {
        bodyA: bodyAA,
        pointB:pointBB,
        stiffness:0.04,
        length:10,
    }

    this.bodyA = bodyAA;

    this.sling= Matter.Constraint.create(options);
    World.add(world, this.sling);
    this.pointB=pointBB
    }
  display(){

    stroke("#301707");

    image(this.sling1, 200, 20);
    image(this.sling2, 170, 20);

    strokeWeight(4);
    
    if(this.sling.bodyA){
        var pointA=this.sling.bodyA.position;
        var pointB=this.sling.pointB;
       
        
        if(pointA.x<220){
          image(this.sling3, pointA.x -30, pointA.y-10, 15, 35)
          line(pointA.x-20, pointA.y, pointB.x-10, pointB.y)
          line(pointA.x-20, pointA.y, pointB.x+30, pointB.y-3)
        }else{
        image(this.sling3, pointA.x +25, pointA.y-10, 15, 35)
        line(pointA.x+25, pointA.y, pointB.x-10, pointB.y)
        line(pointA.x+25, pointA.y, pointB.x+30, pointB.y-3)
        }
    }
 
    
   
    
  
  }  

 fly(){
    this.sling.bodyA=null;
  }


  attach(){
    this.sling.bodyA=this.bodyA;
  }
}