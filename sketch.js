
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var left,bottom,right;



function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	paper = new Paper(200,400,15); 
	ground = new Ground(400,580,800,5);
	left = new Dustbin(600,530,15,100);
	right = new Dustbin(750,530,15,100);
	bottom = new Dustbin(675,570,150,15);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paper.display();
  ground.display();
  left.display();
  right.display();
  bottom.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.Body,paperObject.Body,{x:85,y:-85}) 
	}
};	
