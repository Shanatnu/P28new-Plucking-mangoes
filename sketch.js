
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject,stone1;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy,boy1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObj=new stone(200,340,40,PI/2);

	mango1=new mango(1100,100,30);
	mango2=new mango(1150,200,30);
	mango3=new mango(1200,250,30);
	mango4=new mango(900,800,30);
	mango5=new mango(950,200,30);
	mango6=new mango(1250,180,30);
	mango7=new mango(1200,100,30);
	mango8=new mango(1120,40,30);
	mango9=new mango(850,180,30);
	mango10=new mango(950,100,30);

	boy1=new Boy(300,440,150);

	//stone1=new stone(200,340,50);
	stoneObj=new stone(220,340,50);
	
	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	launcherObject = new Chain(stoneObj.body,boy1.body);
	
	Engine.run(engine);

	
	

}

function draw() {

  background(230);
  //Add code for displaying text here!
 // image(boy ,200,340,200,300);
  

  treeObj.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  boy1.display();

  //stone1.display();

  groundObject.display();
  stoneObj.display();
  launcherObject.display();
 // strokeWeight(3);
  line(boy1.body.position.x,boy1.body.position.y,stoneObj.body.position.x,stoneObj.body.position.y);
}

function mouseDragged(){
	Matter.Body.setPosition(stoneObj.body,{x : mouseX,y : mouseY});
}

function mouseReleased(){
	launcherObject.fly();
}
