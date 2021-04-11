//Create variables here
var database;

var casper, casperImage, casperHappyImage;

var foodS, foodStock;

function preload()
{
	//load images here

  casperImage = loadImage("images/dogImg.png")
  
  casperHappyImage - loadImage("images/dogImg1.png")

}

function setup() {
	createCanvas(500,500);

  casper = createSprite(250,400)
  casper.addImage(casperImage);
  casper.scale=0.2;

  database = firebase.database;


  var foodStock = database.ref('Food');
   foodStock.on('value', readStock)

  
}



function draw() {  
  background(rgb(46, 139, 87));


  if(keyDown(UP_ARROW)){

    writeStock(foadS);
    casper.addImage(casperHappyImage);
  }


  drawSprites();
  //add styles here

}

function readStock(data){

  foodS = data.val();


}


function writeStock(x){

  database.ref('food')

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }

  database.ref('/').update({

    Food:x

  })
}
