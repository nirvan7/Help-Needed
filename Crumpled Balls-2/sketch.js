const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 620);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	circleball = new Ball(50, 550,140);
	ground = new Ground(20,605,1550,10);
	leftbin= new Dustbin(600,550,8,80);
	rightbin= new Dustbin(700,550,8,80);
	bottombin= new Dustbin(650,593,100,8);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  circleball.display();
  ground.display();
  leftbin.display();
  rightbin.display();
  bottombin.display();

  keyPressed();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_ARROW){
	Matter.Body.applyForce(circleball.body,circleball.body.position,{x:0.05,y:-0.0095});
	circleball.velocityY=-2;
  }	
}



