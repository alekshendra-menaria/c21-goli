var bullet,wall,sp,weight,thickness;
function setup() {
  createCanvas(1600,400);
  
  sp=random(223,321);
  weight=random(30,52);
  thickness=random(23,83);
  bullet=createSprite(50, 200, 50, 5);
  bullet.velocityX=sp;
  wall=createSprite(1200, 200, thickness, height/2);
  bullet.shapeColor=color(255);
  wall.shapeColor=color(80,80,80);
}

function draw() {
  background(0);  
 if(hasCollided(bullet,wall)){
   bullet.velocityX=0;
  var damage=0.5*weight*sp*sp/(thickness*thickness*thickness);
  if (damage>10){
    wall.shapeColor=color(255,0,0);
  
  }
  if (damage<10){
    wall.shapeColor=color(0,255,0);
  
  }
  }

  drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletrightedge=lbullet.x+lbullet.width
  wallleftedge=lwall.x
  if (bulletrightedge>=wallleftedge){
    return true;
  }
  return false;
}