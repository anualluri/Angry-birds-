const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Cont =Matter.Constraint


var FLY = 0;
var ONSLING = 1;
var gamestate = ONSLING;

var engine, world;
var box1, pig1;
var backgroundImg,platform;

var slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    getTime();
}

function setup(){
    var myVariable =[1, "2", 3];
    var IIDArray = [[1, 2], [3, 4]];
    var item = IIDArray[0];
    console.log("hi " + item [0]);
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    
    
    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(100,50);

 
    var pointBB={
        x:200, y:50
    };
    slingshot = new Sling(bird.body, pointBB);

    

   
    

}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
     
    

    box1.display();
    box2.display();
    ground.display();
    pig1.display();

    pig1.countScore();
    pig3.countScore();

    log1.display();

    box3.display();
    box4.display();
    pig3.display();

    log3.display();

    box5.display();

    log4.display();
    log5.display();
   
    bird.display();
    slingshot.display();
     
    platform.display();
}


function mouseDragged(){
    

    if(gamestate===ONSLING){
        console.log('I am being dragged ˚¬˚');
    Matter.Body.setPosition(bird.body, {
        x: mouseX, y: mouseY
    });
    }
}

function mouseReleased(){
    gamestate = FLY
    slingshot.fly();
    console.log('I have been reasleased :)');
}


function keyPressed(){
    if(keyCode===32){
        gamestate = ONSLING
        slingshot.attach()
        console.log("space is pressed")
    }
}

async function getTime(){
    var APIresp = await fetch("http://worldtimeapi.org/api/timezone/America/Los_Angeles");
    var APIrespJSON = await APIresp.json();
    var time = APIrespJSON.datetime;
    var hour = time.slice(11, 13)
    if(hour>16){
        backgroundImg = loadImage("sprites/bg2.jpg");
        console.log("if 1")
    }else{
        backgroundImg = loadImage("sprites/bg.png");
        console.log("if 2")
    }
    
    



    //console.log(hour);
}