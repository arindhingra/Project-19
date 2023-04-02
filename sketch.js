var PLAY = 1;
var END = 0;
var gameState = PLAY;

var rocketShip, brokenShip, rocketShipImg, brokenShipImg;
var coin1, coin2, coin3, coin4, coin1Img, coin2Img, coin3Img, coin4Img; 
var skull1, skull2,skull1Img, skull2Img ; 
var lasers, lasersImg; 
var backGround, backGroundImg; 
var gameOver, gameOverImg; 

var score;


function preload(){
rocketShipImg = loadImage("rocketShip.png");
brokenShipImg = loadImage("brokenship.png");
coin1Img = loadImage("coin.png");
coin2Img = loadImage("coin.png");
coin3Img = loadImage("coin.png");
coin4Img = loadImage("coin.png");
skull1Img = loadImage("skull.png");
skull2Img = loadImage("skull.png");
gameOverImg = loadImage("gameover.png");
backGroundImg = loadImage("background.png");
lasersImg = loadImage("lasers.png");
}

function setup() {
 createCanvas(1000,650);
 background = createSprite(600, 600, 600, 600);
 background.addImage("background", backGroundImg);
 background.y = background.height /2;
 gameOver = createSprite(200, 200, 200, 200);
 gameOver.addImage("gameover", gameOverImg);
 gameOver.visible = false;
  background.scale = 1000000000;
 rocketShip = createSprite(300, 100, 5, 10);
 rocketShip.addImage("rocketShip", rocketShipImg);
rocketShip.scale = 0.5;
 gameOver = createSprite(300, 300, 20, 10);
 gameOver.addImage(gameOverImg)

 coin1 = createSprite(Math.round(random(1,1000)), -50, 4, 4);
 coin2 = createSprite(Math.round(random(100,1000)), -10, 4, 4);
 coin3 = createSprite(Math.round(random(40,1000)), -150, 4, 4);
 coin4 = createSprite(Math.round(random(20,1000)), -100, 4, 4);
 skull1 = createSprite(Math.round(random(200,1000)), -75, 4, 4);
 skull2 = createSprite(Math.round(random(150,1000)), -175, 4, 4);
 coin1.scale = 0.3;
 skull1.scale = 0.3;
 skull2.scale = 0.3;
 coin2.scale = 0.3;
 coin3.scale = 0.3;
 coin4.scale = 0.3;
 lasers = createSprite(rocketShip.x, rocketShip.y);
 lasers.scale = 0.3;
 lasers.visible = false;
 
 coin1.addImage("coin1", coin1Img);
 coin2.addImage("coin2", coin2Img);
 coin3.addImage("coin3", coin3Img);
 coin4.addImage("coin4", coin4Img);
 skull1.addImage("image1", skull1Img);
 skull2.addImage("image2", skull2Img);
 lasers.addImage("lasers", lasersImg);
  score = 0;
  

}

function draw() {
 

 text("Score " + score, 100, 10);

 if(gameState === PLAY){
    //backGround.velocityY = -4;
    if(lasers.isTouching(coin1)){
        score = score + 1;
        lasers.x = rocketShip.x 
        lasers.y = rocketShip.y;
        coin1.x = Math.round(random(1,1000));
        coin1.y = -50;
       
        
        
    }
    if(lasers.isTouching(coin2)){
        score = score + 1;
        lasers.x = rocketShip.x 
        lasers.y = rocketShip.y;
         coin2.x = Math.round(random(100,1000));
         coin2.y = -10;
    }
    if(lasers.isTouching(coin3)){
        score = score + 1;
        lasers.x = rocketShip.x 
        lasers.y = rocketShip.y;
         coin3.x = Math.round(random(50,1000));
         coin3.y = -100; 
    }
    if(lasers.isTouching(coin4)){
        score = score + 1;
        lasers.x = rocketShip.x 
        lasers.y = rocketShip.y;
         coin4.x = Math.round(random(40,1000));
         coin4.y = -150;
    }
   if(keyIsDown(32) ){
    lasers.visible = true; 
    lasers.velocityY = -5; 
    lasers.x = rocketShip.x;
    lasers.y = rocketShip.y;
    }
    if(keyDown("RIGHT_ARROW")){
      rocketShip.x += 7.5
    }
    if(keyDown("LEFT_ARROW")){
      rocketShip.x -= 7.5
    }
    if(keyDown("DOWN_ARROW")){
      rocketShip.y += 7.5
    }
    if(keyDown("UP_ARROW")){
      rocketShip.y -= 7.5
    }
    if(lasers.isTouching(skull1 )){
      skull1.x = Math.round(random(1,1000));
    skull1.y = -75;
  
    }
    if(lasers.isTouching(skull2 )){
      skull2.x = Math.round(random(1,1000));
 
  skull2.y = -175;
    }
    skull1.velocityY = 2;
    skull2.velocityY = 2;
    coin1.velocityY = 2;
    coin2.velocityY = 2;
    coin3.velocityY = 2;
    coin4.velocityY = 2;
    gameOver.visible = false;
    rocketShip.velocityY = 0;
    fasterVelocity();
    if(skull1.isTouching(rocketShip)){
      rocketShip.changeImage("brokenship.jpg");
  gameOver.visible = true;
  rocketShip.visible = true;
  gameOver.addImage("gameover.png");
  gameOver.visible(true);
  backGround.velocityY = 0;
  rocketShip.velocityY = 0;
  backGround.visible = false; 
      gameState = END;
      coin1.destroyEach();
      coin2.destroyEach();
      coin3.destroyEach();
      coin4.destroyEach();
     
    }
    if(skull2.isTouching(rocketShip)){
      rocketShip.changeImage("brokenship.jpg");
  gameOver.visible = true;
  rocketShip.visible = true;
  backGround.visible = false;
  gameOver.addImage("gameover.png");
  gameOver.visible(true);
  backGround.velocityY = 0;
  rocketShip.velocityY = 0;
      coin1.destroyEach();
      coin2.destroyEach();
      coin3.destroyEach();
      coin4.destroyEach();
      gameState = END;
    }
    if(rocketShip.y < 40){
      rocketShip.y = 40
    }
    if(rocketShip.y > 610){
      rocketShip.y = 610
    }
    if(rocketShip.x < 40){
      rocketShip.x = 40
    }
    if(rocketShip.x > 960){
      rocketShip.x = 960
    }
    if(coin2.y >= 600){
       coin2.x = Math.round(random(100,1000));
         coin2.y = -100;
         score = score-1
    }
    if(coin1.y >= 650){
      coin1.x = Math.round(random(1,1000));
        coin1.y = -100;
        score = score-1
    }
    if(coin3.y >= 650){
      coin3.x = Math.round(random(50,1000));
         coin3.y = -100; 
         score = score-1
    }
    if(coin4.y >= 650){
      coin4.x = Math.round(random(40,1000));
         coin4.y = -150;
         score = score-1
    }
    if(skull1.y >= 650){
      skull1.x = Math.round(random(1,1000));
    skull1.y = -150;
  score = score-1;
    }
    if(skull2.y >= 650){
      skull2.x = Math.round(random(1,1000));
      skull2.y = -150;
      score = score -1;
    }
 }
 if(gameState === END){
  rocketShip.changeImage("brokenship.jpg");
  gameOver.visible = true;
  rocketShip.visible = true;
  gameOver.addImage("gameover.png");
  gameOver.visible(true);
  backGround.velocityY = 0;
  rocketShip.velocityY = 0;
  
 }

 drawSprites();
 showScore();
}
 function showScore(){
  fill("yellow");
    
    textSize(20);
    
    text("Score: ", 10, 10, 80, 20);
    
    text(score, 80, 10, 80, 20);
 }
 function fasterVelocity(){
  if(score >= 5){
    skull1.velocityY = 3
    skull2.velocityY = 3
    

  }
  if(score >= 10){
    skull2.velocityY = 5
    skull1.velocityY = 5
    
  }
  if(score >= 15){
    skull2.velocityY = 8
    skull1.velocityY = 8
    
  }
  if(score >= 25){
    skull1.velocityY = 12
    skull2.velocityY = 12
    
  }
 }

 //function mousePressed(){
  
  //lasers.visible = true;
  //lasers.velocityY = -5;
 //}

 
 


 