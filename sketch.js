const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;



var ground

function setup(){

    var canvas = createCanvas(1200,400); 
  
    engine =Engine.create
    world = engine.world



    
    
    
    
    ground1 = new Ground(600,height,1200,20);
    stand1 = new Ground(750, 400, 300, 300);

    // floor 1
    box1 = new Box(600,400,30,40)
    box2 = new Box(630,400,30,40)
    box3 = new Box(660,400,30,40)
    box4 = new Box(690,400,30,40)
    box5 = new Box(720,400,30,40)
    box6 = new Box(750,400,30,40)
    box7 = new Box(780,400,30,40)
    
    //floor 2
    box8 = new Box(630,400,30,40)
    box9 = new Box(660,400,30,40)
    box10 = new Box(690,400,30,40)
    box11 = new Box(720,400,30,40)
    box12 = new Box(750,400,30,40)
    
    //floor 3
    box13 = new Box(660,400,30,40)
    box14 = new Box(690,400,30,40)
    box15 = new Box(7200,400,30,40)
    
    //floor 4
    box16 = new Box(600,400,30,40)
    




}

function draw(){
  
text("Drag the Stone to launch it towards the blocks" 600,200)





ground.display();
stand.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();











}
