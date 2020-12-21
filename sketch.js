const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var a;
var engine,world;
var circles=[];
var score = 0,bg;
function preload(){

  polygonImG = loadImage("polygon.png");

}
function setup() {
  createCanvas(800,800);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,250,50,20);
  block1 = new Box(300,275,30,40);
  block2 = new Box(330,275,30,40); 
  block3 = new Box(360,275,30,40); 
  block4 = new Box(390,275,30,40); 
  block5 = new Box(420,275,30,40); 
  block6 = new Box(450,275,30,40); 
  block7 = new Box(480,275,30,40); 
  //level 2
  block8 = new Box(330,235,30,30);
  block9 = new Box(360,235,30,30); 
  block10 = new Box(390,235,30,30); 
  block11 = new Box(420,235,30,30); 
  block12 = new Box(450,235,30,30);
  //level 3 
  block13 = new Box(360,195,30,30);
  block14 = new Box(390,195,30,30); 
  block15 = new Box(420,195,30,30);
  //top 
  block16 = new Box(390,155,30,30);  
  image=image(polygonImG,50,50);
 // camera=new Camera(width/2,height/2,0.5);
  //camera.on();
  a=height;
  circles.push(width/2)
}


function draw() {
  //camera.zoom=camera.zoom+1
  background(0);  
  //level 1
  
  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  text("SCORE  " + score,750,40);

  Engine.update(engine);
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();

block1.score();
block2.score();
block3.score();
block4.score();
block5.score();
block6.score();
block7.score();
block8.score();
block9.score();
block10.score();
block11.score();
block12.score();
block13.score();
block14.score();
block15.score();
block16.score();

  a=a-1;
  //camera.zoom=camera.zoom+0.01
 //camera.position={x:width/2,y:a}
 
  
  for (i=0;i<circles.length;i++)
{
	circle(circles[i], height/2,20)
}
if(camera.position.x%width===0)
{
	circles.push(camera.position.x+width/2)
}
 // camera(0, 0, 20 + sin(frameCount * 0.01) * 10, 0, 0, 0, 0, 1, 0);
 
 drawSprites();

}

function keyPressed ()
{
  if(keyCode === RIGHT_ARROW)
  {
    if(keyIsDown(RIGHT_ARROW))
    {
      camera.position.x=camera.position.x+10;
    }
  }
}

async function getBackgroundImg()
{
    var response = await fetch("http://worldclockapi.com/api/json/est/now");
    console.log(response);

    var responsejson = await response.json();
    console.log(responsejson.currentDateTime);
    var currentDateTime = responsejson.currentDateTime;
    console.log(currentDateTime);
    var hour = currentDateTime.slice(11,13);
    console.log(hour);
    
    if(hour<19&&hour>06)
    {
    bg = (255);
    }
    else
    {
        bg = (0);
    }
    backgroundImg = (255);
console.log(backgroundImg);

}