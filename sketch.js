
var fixedRect, fixedRect1, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
 
 
  movingRect = createSprite(800, 400,80,30);
  movingRect.shapeColor = "green";

  fixedRect = createSprite(100, 100, 50, 50);
  fixedRect.shapeColor = "green";
  
  fixedRect1 = createSprite(300, 300, 50, 50);
  fixedRect1.shapeColor = "green";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect ,fixedRect)){
    movingRect.shapeColor = "blue";
    fixedRect.shapeColor = "blue";
  }
  
  else if (isTouching(movingRect,fixedRect1)){
    movingRect.shapeColor = "yellow";
    fixedRect1.shapeColor = "yellow";
  }
 
  else {
    movingRect.shapeColor = "Green";
    fixedRect.shapeColor = "Green";
    fixedRect1.shapeColor = "Green";
  }


//bounceOff(movingRect,fixedRect)
  drawSprites();
}




