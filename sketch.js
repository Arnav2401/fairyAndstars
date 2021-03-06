var starImg, fairyImg, bgImg;
var fairy , fairyVoice;
var star, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("star.png");
	fairyImg = loadAnimation("fairyImage1.png","fairyImage2.png");
	bgImg = loadImage("starNight.png");
	fairyVoice = loadSound("JoyMusic.mp3");

}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	//  var option={
	// isStatic : false
	//  }

	

	fairy = createSprite(130, 520);
	fairy.addAnimation("fairyflying",fairyImg);  
	fairy.scale =0.25;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	

}


function draw() {
  background(bgImg);
  Engine.update(engine);
  star.x=starBody.position.x
  star.y = starBody.position.y
   fairy.x = mouseX
console.log(mouseX)
    if (starBody.position.y>470 &&  fairy.x<510 ){
 	Body.setStatic(starBody,true)
 	}  
    drawSprites();
   
}

function keyPressed() {
	
	if(keyCode===LEFT_ARROW){
	Body.setStatic(starBody,false)

	 
}
}
