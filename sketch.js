const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var bg;
var engine, world;
var snows = [];
var rand;

var maxSnows=25;

function preload()
{
  bg = loadImage("snow3.jpg");

  joyMusic = loadSound("JoyMusic.mp3");

}
function setup() {
  createCanvas(800,600);

  engine = Engine.create();
	world = engine.world;
  joyMusic.play();
}

function draw() {
  Engine.update(engine);
  background(bg);  

   //creating snow
   
   if(frameCount % 20 === 0){

      snows.push(new createSnow(random(0,800),20,20));
    
  }
   //displaying snow flakes
   for(var j = 0; j<snows.length; j++){
    snows[j].showDrop();
    snow = [];
  }

  drawSprites();
}