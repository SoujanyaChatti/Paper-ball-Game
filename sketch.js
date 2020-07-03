var ground,paper,dustbin,pl;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	pl=loadImage("redball.jpg");
}

function setup() {
	createCanvas(1000, 700);
    
    
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper=new Paper(50,50);

	papersprite=createSprite(200,300, 10,10);
	papersprite.addImage(pl);
	papersprite.scale=0.5;

	ground=new Ground(500,620,1000,50);
	paper=new Paper(50,580);
    
	ground2=new Groundd(370,585,740,20);
	ground3=new Groundd(850,565,200,20);
	ground4=new Groundd(760,505,5,180);
	box1=new Box(850,585,180,20);
	box2=new Box(750,505,20,180);
	box3=new Box(950,505,20,180);
}


function draw() {
rectMode(CENTER);
ellipseMode(RADIUS);
  background(0);
  Engine.update(engine);
  paper.display();
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  ground2.display();
  ground3.display();
  ground4.display();	
  fill("yellow");
  text("USE THE CONTROL KEYS TO THROW THE PAPER INTO THE BIN",200,50);
  drawSprites();
 papersprite.x=paper.body.position.x;
 papersprite.y=paper.body.position.y;
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:160,y:-160});
	}
	else if(keyCode==RIGHT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:50,y:0});
	}
	else if(keyCode==LEFT_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.postion,{x:-50,y:0});
	}
}

