
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var crumpledPaper;
var dustbin1, dustbin2, dustbin3;

function setup() {
	createCanvas(1600, 400);
	engine = Engine.create();
	world = engine.world;
   
  ground = new Ground(800, 350, 1600, 20);
  crumpledPaper = new Paper(1500, 700);
  dustbin1 = new Dustbin(1500,280,15,125);
  dustbin2 = new Dustbin(1405,333,175,15);
  dustbin3 = new Dustbin(1310,280,15,125);

}


function draw() {
  background("black");
  Engine.update(engine);

  ground.display();
  crumpledPaper.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
 
 
}

function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
  }
}
