
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var ball1,ball2,ball3,ball4,ball5,ground,connection1,connection2,connection3,connection4,connection5,roof;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Ball(200,400,80)
	ball2=new Ball(220,400,80)
	ball3=new Ball(240,400,80)
	ball4=new Ball(260,400,80)
	ball5=new Ball(280,400,80)
	ground=new Ground()
	roof=new Roof()
	connection1=new Connection(ball1,roof)
	connection2=new Connection(ball2,roof)
	connection3=new Connection(ball3,roof)
	connection4=new Connection(ball4,roof)
	connection5=new Connection(ball5,roof)



	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  ground.display()
  roof.display()
  connection1.display()
  connection2.display()
  connection3.display()
  connection4.display()
  connection5.display()
  

  
  
 
}
function keyPressed()
{
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-500})
	}
}



