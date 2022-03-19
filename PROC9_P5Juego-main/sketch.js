var BOB

function setup() {
  createCanvas(750,500);
  BOB=createSprite(100,100,50,45)
}

function draw() 
{
  background(30);
  //
  if (keyIsDown(RIGHT_ARROW)){
    BOB.x +=3.5
    background("red")
  }
  if (keyIsDown(LEFT_ARROW)){
    BOB.x -=3.5
    background("blue")
  }
  if (keyIsDown(UP_ARROW)){
    BOB.y -=3.5
    background("orange")
  }
  if (keyIsDown(DOWN_ARROW)){
    BOB.y +=3.5
    background("green")
  }
drawSprites()
}




