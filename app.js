// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

//Define a constructor and initialize properties
var epicFailVideo = function(epicRating, hasAnimals){
  this.epicRating = epicRating; 
  this.hasAnimals = hasAnimals;
}

var parkourFail = new epicFailVideo(7, false); 
var corgiFail = new epicFailVideo(4, true);

console.log(parkourFail); 
console.log(corgiFail);

//Generate Random Numbers 
var epicFailVideo = function(epicRating, hasAnimals){
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

epicFailVideo.prototype.generateRandom = function(min,max) {
  return Math.floor(Math.random() * (max-min + 1)) + min; 
}

var parkourFail = new epicFailVideo(7, false); 
var corgiFail = new epicFailVideo(4, true);

console.log(parkourFail.generateRandom(1, 5));
console.log(corgiFail.generateRandom(1, 5));

//Calculate Daily Likes 
var epicFailVideo = function(epicRating, hasAnimals){
  this.epicRating = epicRating; 
  this.hasAnimals = hasAnimals;
}

epicFailVideo.prototype.generateRandom = function(min,max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

epicFailVideo.prototype.dailyLikes = function (){
  var viewers, percentage;

  viewers = this.generateRandom(10,30) * this.epicRating; 

  if (this.hasAnimals){
    percentage = 0.75; 
}else{
  percentage = 0.40;
}
return Math.round(viewers * percentage); 
}

var parkourFail = new epicFailVideo(7, false);
var corgiFail = new epicFailVideo(4, true);

console.log(parkourFail.dailyLikes());
console.log(corgiFail.dailyLikes());

//Calculate Weekly Likes
var epicFailVideo = function(epicRating, hasAnimals) {
  this.epicRating = epicRating;
  this.hasAnimals = hasAnimals;
}

epicFailVideo.prototype.generateRandom = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

epicFailVideo.prototype.dailyLikes = function() {
  var viewers, percentage;

  viewers = this.generateRandom(10, 30) * this.epicRating;

  if (this.hasAnimals) {
    percentage = 0.75;
  } else {
    percentage = 0.40;
  }

  return Math.round(viewers * percentage);
}

epicFailVideo.prototype.weeklyLikes = function() {
  var total = 0;

  for (var i = 0; i < 7; i++) {
    total += this.dailyLikes();
  }

  return total;
}

var parkourFail = new EpicFailVideo(7, false);
var corgiFail = new EpicFailVideo(4, true);

console.log(parkourFail.weeklyLikes());
console.log(corgiFail.weeklyLikes());