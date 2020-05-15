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

	paper = new Paper(50,50,20);
ground = new Ground(650,470,1300,40);
 dustbin = new Dustbin(1175,350,250,200);

}


function draw() {
  background("silver");
  Engine.update(engine);
paper.display();
 ground.display();
 dustbin.display();

 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x :2,y :-3});
	}
}


