const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var drops=[];
var man,umbrella;
var thunder;
var Maxdrops = 100;
function preload(){
    
}

function setup(){
    var canvas = createCanvas(400,625);
    engine = Engine.create();
    world = engine.world;

    for (var i=0;i<Maxdrops;i++) {
      drops.push(new Drops(random(0,400),random(0,400)));
    }

    Engine.run(engine);
}

function draw(){
background(0);
for (var i=0;i<Maxdrops;i++) {
  drops[i].display();
}

}   

