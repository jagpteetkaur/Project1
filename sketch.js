
var box; 

function setup() {
  createCanvas(400,400);
  box = createSprite(240,225,10,13)
}

function draw() 
{
  background(30);
  if (keyDown("RIGHT")){
 box.position.x=box.position.x+3
  }
drawSprites()
}


