var redboxSprite,ground,redSprite,boxSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(800, 700);
 rectMode(CENTER);
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)
	
	paperSprite=createSprite(50,620,80,80);
	
	redboxSprite=createSprite(400,650,200,20);
   redboxSprite.shapeColor=("red");

   redSprite=createSprite(490,600,20,100);
   redSprite.shapeColor=("red");

   boxSprite=createSprite(310,600,20,100);
   boxSprite.shapeColor=("red");
	
	
	engine = Engine.create();
	world = engine.world;
    
	//Create the Bodies Here.
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	paperBody = Bodies.circle(width/2 , 200 , 5 , {density:1.2, isStatic:true});
	World.add(world, paperBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paperSprite.x= paperBody.position.x 
  paperSprite.y= paperBody.position.y
 
  if(paperSprite.y>600&&paperBody.position.y>600){
	  Matter.Body.setStatic(paperBody,true);
  drawSprites();
 
}
}
function keydown(){
	if(keydown==UP_ARROW){
		Matter.Body.setStatic(paperBody,false);
	}
}

