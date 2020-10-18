
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1,bob2,bob3,bob4,bob5,roof1;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);

	bob1=new Bob(600,700)
	bob2=new Bob(500,400)
	bob3=new Bob(300,200)
	bob4=new Bob(550,650)
	bob5=new Bob(700,600)
	roof1=new Roof(500,100,1000,20)
	
  
}


function draw() {
  rectMode(CENTER);
  background("red");
  
  drawSprites();
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	roof1.display()
	
	
}



