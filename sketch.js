
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	dustbin_img = loadImage("dustbingreen.jpg")
	paper_img = loadImage("paper.png")
}

function setup() {
	createCanvas(900,500);

	engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

	dustbin = createSprite(685, 390, 100, 10 );
	//dustbin.addImage(dustbin_img)
	dustbin.scale= 0.45

	//paper = createSprite(175, height -200, 20);
	//paper.scale= 0.25


	//Create the Bodies Here.
	/*stick1=createSprite(685, 455, 100, 10 );
	stick1.shapeColor = color(255,255,255)
	stick2=createSprite(635, 430, 10, 50);
	stick2.shapeColor = color(255,255,255)
	stick3=createSprite(735, 430.5, 10, 50);
	stick3.shapeColor = color(255,255,255)*/

	/*groundSprite=createSprite(width/2, height -35, width,10);
	groundSprite.shapeColor=color(240,245,20)

	ground = Bodies.rectangle(width/2, 435, width, 10 , {isStatic:true} );
 	World.add(world, ground);*/

	 ball1 = new ball(175,height -200, 50)
	 //ball1.addImage(paper_img)
	 //ball2 = new ball(paper.png, 150, height -200, 0.2)
     ground1 = new ground(450, height -30, 900, 10)
	 stick1= new box(685, 455, 100, 10 );
	 //stick1.shapeColor = color(255,255,255)
	stick2= new box(635, 430, 10, 50);
	// stick2.shapeColor = color(255,255,255)
	stick3= new box(735, 430.5, 10, 50);
	 //stick3= addImage("dust", dustbin_img)
	 //stick3.shapeColor = color(255,255,255)
 

}


function draw() {
  rectMode(CENTER);
  background(250,125);
  
  ground1.display();
  //ball2.display();
  ball1.display();
  stick1.display();
  stick2.display(); 
  stick3.display();

  //ground1.display();

  dustbin.addImage(dustbin_img)
 // paper.addImage(paper_img)

  drawSprites();
}

function keyPressed()
{
	console.log("i")
if(keyIsDown(UP_ARROW))
{
	Matter.Body.applyForce(ball1.body, ball1.body.position,{x:360 ,y:-360})
}
}

