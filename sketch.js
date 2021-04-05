
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

function setup() {
	createCanvas(1700,800);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(850,350,500,65);

	bob1 = new Bob(650,650,50);
	bob2 = new Bob(750,650,50);
	bob3 = new Bob(850,650,50);
	bob4 = new Bob(950,650,50);
	bob5 = new Bob(1050,650,50);

	chain1 = new Chain(bob1.body,roof.body,-200,0)
	chain2 = new Chain(bob2.body,roof.body,-100,0)
	chain3 = new Chain(bob3.body,roof.body,0,0)
	chain4 = new Chain(bob4.body,roof.body,100,0)
	chain5 = new Chain(bob5.body,roof.body,200,0)

	keyPressed();

	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  roof.display();

  fill("red")
  bob1.display();
  fill("orange")
  bob2.display();
  fill("yellow")
  bob3.display();
  fill("green")
  bob4.display();
  fill("blue")
  bob5.display();

  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  textSize(25)
  fill("white")
  text("A = Red Bob",20,590);
  text("S = Orange Bob",20,620);
  text("D = Green Bob",20,710);
  text("F = Blue Bob",20,740);

  textSize(60)
  text("NEWTON'S CRADLE",575,55)

  drawSprites();
 
}

function keyPressed(){
	if (keyCode === 65 ) {
		Matter.Body.applyForce(bob1.body, bob1.body.position, {x: -650,y: -650})
	  }
	else 
	if (keyCode === 83 ) {
		Matter.Body.applyForce(bob2.body, bob2.body.position, {x: -650,y: -650})
	  }
	else
	if(keyCode === 68 ) {
		Matter.Body.applyForce(bob4.body, bob4.body.position, {x: 650,y: -650})
	  } 
	else 
	if(keyCode === 70 ) {
		Matter.Body.applyForce(bob5.body, bob5.body.position, {x: 650,y: -650})
	  }  
}
