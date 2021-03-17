var canvas;
var database, quiz, question;
var gameState = 0;
var contestant, contestantCount;
var game;
function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  game = new Quiz();
  game.start();
  game.getState();
}


function draw(){
  background("pink");

  
}
