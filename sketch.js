const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	
}

function setup() {
var canvas = createCanvas(1300,500);

engine = Engine.create();
world = engine.world;

paper = new Paper(200,100,20);
ground = new Ground(650,470,1300,40);
dustbin = new Dustbin(1175,350,250,200);
line1 = new Line(1050,350,20,200);
line2 = new Line(1300,350,20,200);
line3 = new Line(1165,440,250,20);
}


function draw() {
  background("silver");
  Engine.update(engine);
line1.display();
line2.display();
line3.display();
 paper.display();
 ground.display();
 dustbin.display();
 keyPressed();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x : 2,y : -2});
	}
}


