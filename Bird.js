class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.smkimage = loadImage("sprites/smoke.png");
    this.image = loadImage("sprites/bird.png");
    this.trajPath = []
    
    
  }

  display() {
    
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    
    super.display();
    
    
    if(this.body.speed > 10 && this.body.position.x > 220){
      var position = [this.body.position.x, this.body.position.y]
      this.trajPath.push(position);
    }
    
    for(var i=0; i < this.trajPath.length; i = i + 1 ){
      var item = this.trajPath[i]; 
      image(this.smkimage, item[0], item[1]);
    }
  }
  clearTrajectory(){
    this.trajPath = [];
  }  
}

