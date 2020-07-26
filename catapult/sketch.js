
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload (){
	backgroundimg("sprites/bg.png");
}
function setup() {
	createCanvas(1250, 600);


	engine = Engine.create();
	world = engine.world;

	
	
	ground1 = new ground(1000,400);
	ground2 = new ground(600,300);
	shape1 = new shape(100,100);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  ground1.display();
  ground2.display();
  shape1.display();
  drawSprites();
 
}



