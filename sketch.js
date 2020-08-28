var fixRect, movingRect;



function setup() {
  createCanvas(800,400);
  fixRect=createSprite(200, 200, 50, 50);
movingRect=createSprite(400,200,50,50);
fixRect.shapeColor="white";
movingRect.shapeColor="green";
fixRect.velocityX=2;
movingRect.velocityX=-2;

}

function draw() {
  background(240,100,155);  
//movingRect.x=mouseX;
//movingRect.y=mouseY;
/*
if(movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2&&
  fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2&&
  movingRect.y-fixRect.y<=movingRect.height/2+fixRect.width/2&&
  fixRect.y-movingRect.y<=movingRect.height/2+fixRect.width/2){
  fixRect.shapeColor="red";
movingRect.shapeColor="yellow";
}
else{fixRect.shapeColor="green";
movingRect.shapeColor="green";
}
*/
if(movingRect.x-fixRect.x<=movingRect.width/2+fixRect.width/2&&
  fixRect.x-movingRect.x<=movingRect.width/2+fixRect.width/2){
fixRect.velocityX=fixRect.velocityX*-1;
movingRect.velocityX=movingRect.velocityX*-1;
  }
if( movingRect.y-fixRect.y<=movingRect.height/2+fixRect.width/2&&
  fixRect.y-movingRect.y<=movingRect.height/2+fixRect.width/2){
    fixRect.velocityY=fixRect.velocityY*-1;
movingRect.velocityY=movingRect.velocityY*-1;
  }


  drawSprites();
}