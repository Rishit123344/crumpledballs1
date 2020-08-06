var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var log1,log2,log3;
function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	
	ground=new Ground(width/2, height-35, width,10);
	ball=new Ball(200,100,56,55);
	log1=new Log(600,650,200,20);
	log2 = new Log(710,610,20,100);
	log3 = new Log (490,610,20,100);
}


function draw() {
	background(0);
	Engine.update(engine);
  
  
  ball.display();
  ground.display();
  log1.display();
  log2.display();
  log3.display();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:95,y:-205})
	}
}



