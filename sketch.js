
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var stand1,stand2;
var block1;

function setup()
 {
  createCanvas(1000,500);

  engine = Engine.create();
    world = engine.world;

  stand1 = new stand(350,350,200,20);
  stand2 = new stand (700,200,200,20);

polygon = Bodies.circle(50,200,20);
World.add(world,polygon);

slingshot1= new slingshot(this.polygon,{x:100,y:200});

  block1= new block(348,350,20,20);
  
}

function draw() {
  background("black"); 
 

stand1.display();
stand2.display();
block1.display();

  drawSprites();
}