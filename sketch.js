//Create variables here
var dog, happyDog;
var database;
var foodS,foodStock;
function preload()
{
  dog1 = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png")
	//load images here
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,10,10);
  dog.addImage(dog1);
  dog.scale = 0.2;

  database = firebase.database();

  foodStock=database.ref('Food');
   foodStock.on("value",readStock);
}


function draw() {  
background(46,139,87);

if(keyWentDown(UP_ARROW)){
  writeStock(foodS);
  dog.addImage(happyDog);
}

  drawSprites();
  //add styles here
textSize(18);
fill("white");
stroke("red");
text("Note: Press UP_ARROW Key To Feed Drago Milk)",85,50);

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  

  database.ref('/').update({
    Food:x
  })
}
