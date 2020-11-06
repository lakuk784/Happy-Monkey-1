
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var ground;
var score = 0;

function preload(){
  
  monkey_running =                    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","  sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
 createCanvas (500,500)
  
  ground = createSprite (250,435,500,10);
  ground . shapeColour = "grey";
  ground . velocityX = -9
  
  monkey = createSprite (50,400,1,1);
  monkey . scale = 0.1
  monkey . addAnimation ("runing" , monkey_running);
 
  
  
  
  obstacleGroup = new Group();
  FoodGroup = new Group();
 
  
}


function draw() {

  
 if (frameCount%40===0){
  score = score + 1
}
  
  background (0,255,255)
  stroke ("white")
  textSize (20)
  fill ("white")
  text ("Survival Time : " + score,150,50)

  if(ground.x>100){
    ground.x = 250
  }
 
  obstacles();
  food();
  
   monkey . collide  (ground)
   obstacleGroup . collide (monkey)
 
   
 
  
  if (keyDown("space")&& monkey.y >=50 ){
    monkey . velocityY = -12
  }

   monkey . velocityY = monkey.velocityY + 0.3
 
  drawSprites();
}

function obstacles(){
  
  if (frameCount % 150===0){
  obstacle = createSprite (250,400,1,1)
  obstacle . velocityX = -3
  obstacle . lifetime = 100
  obstacle . scale = 0.2
  obstacle . addImage ("moving",obstacleImage);
  obstacleGroup.add (obstacle);
  }
 

}

function food(){
  
  if (frameCount % 70===0){
    banana = createSprite (250, 150 , 1 , 1);
    banana . scale = 0.1
    banana . velocityX = -3
    banana . addImage ("still",bananaImage);
    FoodGroup.add (banana)
    FoodGroup . lifetime = 100
  }
  
}




