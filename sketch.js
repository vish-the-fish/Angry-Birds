const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,ground;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    Pig1 = new Pig(810,550);
    Log1 = new Log(810,460,300,PI/2);
    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    Pig2 = new Pig(810,420);
    Log2 = new Log(810,380,300,PI/2);
    box5 = new Box(810,360,70,70);
    Log3 = new Log(760,320,160,PI/7);
    Log4 = new Log(870,320,150,-PI/7);
    bird = new Bird(200,200);
    ground = new Ground(600,height,1200,20);
    
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    Pig1.display();
    Log1.display();
    box3.display();
    box4.display();
    Pig2.display();
    Log2.display();
    box5.display();
    Log3.display();
    Log4.display();
    bird.display();
    ground.display();
   
}