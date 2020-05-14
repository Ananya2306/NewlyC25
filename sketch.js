const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
	createCanvas(1300,500);


	engine = Engine.create();
	world = engine.world;

	paper = new Paper(300,300,30);
ground = new Ground(650,470,1300,40);
  line1 = new Dustbin(1165,450,190,20);
  line2 = new Dustbin(1065,410,20,100);
  line3 = new  Dustbin(1250,410,20,100);
}


function draw() {
  background(0);
  Engine.update(engine);
paper.display();
 ground.display();
 line1.display();
 line2.display();
 line3.display();
 keyPressed();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :1,y :-3});
	}
}


