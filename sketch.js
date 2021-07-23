const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, roof, object1, boxer, bob, rope;

var boxerimg;
function preload()
{
  // boxerimg = loadImage("boxing man.png");

}


function setup() {
  createCanvas(1300, 620);
  engine = Engine.create();
  world = engine.world;

  // Creating ground
  ground = new Ground(width/2, 555, 1200, 130);
  roof = new Ground(300, 100, 250, 10);

  // Creating 
  object1 = new Objects(400, 400, 20, 150);

  object2 = new Objects(350, 400, 20, 50);
  bob = new Bob(300, 250, 50);
  rope = new Chain(bob.body, roof.body, -50*2, 0);

}

function draw() {
  background(25);  
  
  text("X"+mouseX+"  Y"+ mouseY , 50, 50);
  Engine.update(engine);
  
  // Matter.Body.setP(boxer2.body, {x: mouseX, y: mouseY});
  Matter.Body.setPosition(object2.body, {x: mouseX, y: mouseY});
  


  // ps.x= boxer2.body.position.x ;
  // ps.y= boxer2.body.position.y ;

  ground.display();
  object1.display();
  object2.display();
  // boxer.display("no");
  bob.display();
  // rope.display();
  roof.display();
  
  drawSprites();
}




function keyPressed() {
	if (keyCode === UP_ARROW)
  {
    Matter.Body.applyForce(bob.body, bob.body.position,{x:1,y:-100})
  }
	if (keyCode === DOWN_ARROW)
  {
    Matter.Body.applyForce(bob.body, bob.body.position,{x:0,y:100})
  }
	if (keyCode === RIGHT_ARROW)
  {
    Matter.Body.applyForce(bob.body, bob.body.position,{x:100,y:-10})
  }
	if (keyCode === LEFT_ARROW)
  {
    Matter.Body.applyForce(bob.body, bob.body.position,{x:-100,y:-10})
  }
	if (keyCode === 32)
  {
    Matter.Body.applyForce(bob.body, bob.body.position,{x:0,y:0})
  }
}