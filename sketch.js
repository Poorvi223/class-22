const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine
function setup() {
  createCanvas(800,400);

  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic : true
  }
  Poorvi=Bodies.rectangle(400,390,20,30,options);
  World.add(world,Poorvi)
  var ball_options={
    restitution : 1
  }
  ball = Bodies.circle(200,100,20, ball_options); 
  World.add(world,ball)
}

function draw() {
  background("black");
  Engine.update(engine);
  rectMode(CENTER)  
  rect(Poorvi.position.x,Poorvi.position.y,800,30);
  ellipseMode(RADIUS); 
  ellipse(ball.position.x, ball.position.y, 20, 20);

}