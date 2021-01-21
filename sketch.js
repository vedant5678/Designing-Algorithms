var moving,fixed
function setup() {
  createCanvas(1200,400);
  fixed=createSprite(400, 200, 50, 80);
  moving=createSprite(200,200,80,50)
  moving.shapeColor="red"
  fixed.shapeColor="blue"
}

function draw() {
  background(255,255,255);  
  moving.x=mouseX
  moving.y=mouseY
  if(moving.x-fixed.x<=moving.width/2+fixed.width/2&&
    fixed.x-moving.x<=moving.width/2+fixed.width/2&&
    moving.y-fixed.y<=moving.height/2+fixed.height/2&&
    fixed.y-moving.y<=fixed.height/2+moving.height/2){
      fixed.shapeColor="purple"
      moving.shapeColor="green"
    }
    else{
    moving.shapeColor="red"
    fixed.shapeColor="blue"
    }
  drawSprites();
}