
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	  var bobdiameter=100;
		bob1=new Bob(200,550,bobdiameter);
		bob2=new Bob(300,550,bobdiameter);
		bob3=new Bob(400,550,bobdiameter);
		bob4=new Bob(500,550,bobdiameter);
    bob5=new Bob(600,550,bobdiameter);
    
    roof = new Roof(400,105,600,40);
   
    rope1= new Rope(bob1.body,roof.body,-bobdiameter*2,0);
   Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  drawSprites();
 
}



