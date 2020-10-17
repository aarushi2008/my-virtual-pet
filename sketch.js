//Create variables here
var dog;
var happy; 
var food;
var foodStock;
var database;


function preload(){
loadImage = image("images/dogImg.png");
loadImage = image("images/dogImg1.png");
}

function setup() {
  database=firebase.database();
  createCanvas(500,500);
  dog = createSprite(250,250,25,25);
  var locationofball = database.ref('ball/position')
  locationofball.on("value",readop,showerror)	

}


function draw() {  
   background("white")
  drawSprites();
  if(keyDown(RIGHT_ARROW)){
    writeStocks(food);
    dog.addImage(happy);
}

}
function writePosition(x,y){
  database.ref('ball/position').set({
      x:ball.x+x,
      y:ball.y+y,
  })
}
function readop(data){
  position=data.val();
  ball.x=position.x;
  ball.y=position.y;
}
function showerror(){
  console.log("error")
}


