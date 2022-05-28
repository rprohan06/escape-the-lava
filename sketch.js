var boy ;
var ground;
var backgroundImage,background;
var fireballImage;

function preload (){
backgroundImage=loadImage("background.jpg")
fireballImage=loadImage("fireball1.png")
}

function setup (){
  createCanvas (900,400)
  background=createSprite(0,0,900,400)
  background.addImage("bg",backgroundImage)
  background.scale=3
  boy=createSprite(50,385,30,20)
  ground=createSprite(450,390,900,10)
  ground.visible=false
}
function draw (){
  //background("red")

  background.velocityX=-3
  if (background.x<0){
    background.x=background.width/2
  }

  if(keyDown("space")){
    boy.velocityY=-6
  }
  boy.velocityY=boy.velocityY+0.5
  
  
  
  obstacle();

  boy.collide(ground)
  drawSprites();

}
function obstacle(){
  if(frameCount%100===0){
  fireball1=createSprite(900,350,10,15)
  fireball1.velocityX=-5
  fireball1.addImage(fireballImage)
  fireball1.scale=0.2
  }
}