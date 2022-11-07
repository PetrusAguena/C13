var garden,rabbit;
var gardenImg,rabbitImg;
var apple , orange , red;
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}

function setup(){
  
  createCanvas(400,400);
  
// mover o fundo
garden=createSprite(200,200);
garden.addImage(gardenImg);


rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);


}
function createApples() {
  apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale=0.07
  apple.velocityY = 3;
  apple.lifetime = 150;
  
  
  }
  function createRed() {
    red = createSprite(random(50,350),40,10,10);
    red.addImage(redImg);
    red.scale=0.07
    red.velocityY = 3;
    red.lifetime = 150;
    
    
    }
    function createOrange() {
      orange = createSprite(random(50,350),40,10,10);
      orange.addImage(orangeImg);
      orange.scale=0.07
      orange.velocityY = 3;
      orange.lifetime = 150;
      
      
      }
function draw() {
  background(0);

  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;
  if (frameCount % 210 === 0) {

 createApples()
 
  }
  if (frameCount % 90 === 0) {
    
   createOrange()
  }
  if (frameCount % 120 === 0) {
    
    createRed()
   }


  drawSprites();
  
}
