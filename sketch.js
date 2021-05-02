var canvas;
var database,playerCount;
var player,allPlayers;
var interface1
var quest
var obj
var gameState

function preload(){
}
function setup(){
  database = firebase.database();
  canvas = createCanvas(1200,600);
  interface1 = new Interface()
  interface1.getState()
  interface1.start()

}


function draw(){
  background("skyblue");
  box.visible = false;
  textSize(33);
  text("No. of responses : "+playerCount,700,50)
  if(gameState == 1){

  if(playerCount>1)
    interface1.play();

  }
  drawSprites()
 
}
