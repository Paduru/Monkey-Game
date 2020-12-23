
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, time;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX=-4;
  
  FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  score = 0;
  time = 0;
  
}


function draw() {
  background(255, 255, 255);
  ground.x = ground.width/2;
  monkey.collide(ground);
  monkey.velocityY += 0.5;
  if (keyDown("space") && monkey.y>313) {
    monkey.velocityY = -13;
  }
  
  spawnfood();
  spawnobstacle();
  
  drawSprites();
  
  time= Math.ceil(frameCount/frameRate())
  
  text("Score: "+score, 200, 50)
  text("Survival Time: "+time, 50, 50);
}

function spawnfood() {
  if (frameCount%80 === 0) {
    banana = createSprite(400, 120, 10, 10);
    banana.y = random(120, 200);
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -5;
    banana.lifetime = 100;
    FoodGroup.add(banana);
  }
}

function spawnobstacle() {
  if (frameCount%300 === 0) {
    obstacle = createSprite(400, 300, 10, 10);
    obstacle.addImage(obstaceImage);
    obstacle.scale = 0.25;
    obstacle.velocityX = -5;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
}


// Write the function for the food
// Create a banana sprite after every 80 frames.
// Give random y position for the banana, so that it appears at different locations on the screen. Range of y can be between 120, 200.
// Add an image of a banana, which should be available in the animation tab.
// Set the negative x velocity and give lifetime to the food sprite to prevent memory leakage.
// Add banana to the bananaGroup



