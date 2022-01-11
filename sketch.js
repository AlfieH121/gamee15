var ground1
var ground2
var ground3
var ground4
var ball
var button1
var button2


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

  button1=createImg('push.png')
  button1.position(220,30)
  button1.size(50,50)
  button1.mouseClicked(hforce)
  
  button2=createImg('push.png')
  button2.position(20,30)
  button2.size(50,50)
  button2.mouseClicked(vforce)
  
  ground1=new Ground(200,390,400,20);
  ground2=new Ground(390,200,20,400);
  ground3=new Ground(10,200,20,400);
  ground4=new Ground(200,10,400,20);
var balloptions={
restitution:1
}
ball=Bodies.circle(200,10,30,balloptions)
 World.add(world,ball)
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ground1.show();
  ground2.show();
  ground3.show();
  ground4.show();
  ellipse(ball.position.x,ball.position.y,30,30);

}

function hforce(){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.03,y:0})
}

function vforce(){
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0.0,y:-0.03})
  }



