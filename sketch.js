
function setup() {
  createCanvas(500,500);
  var box = createSprite(200,300,100,50)
  
}

function draw() 
{
  background("yellow");
  if (keyIsDown(RIGHT_ARROW)){
    box.position.x+=10
  }
  drawSprites()

}




