var StarDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.counter = 0;
  this.reverse = false;
  this.degree = 0;
  this.step = function() {
    this.scheduleStep(timeBetweenSteps);
    this.move();
  };
  this.step(timeBetweenSteps);
};

StarDancer.prototype = Object.create(makeDancer.prototype);
StarDancer.prototype.constructor = StarDancer;

StarDancer.prototype.move = function() {
  if(this.counter === 0) {
    this.degree = Math.random() * 360;
    this.reverse = false;
  //set variables how much horizontal sin of degree times pi times 180
  //set variables how much vertical cos of degree times pi times 180
  }

  var horiz = Math.sin(this.degree * Math.PI/180) * 10;
  var vert = Math.cos(this.degree * Math.PI/180) * 10;

  if (!this.reverse) {
    this.left += horiz;
    this.top += vert;
    this.counter++;
  } else {
    this.left -= horiz;
    this.top -= vert;
    this.counter--;
  }

  var countDone = this.counter === 50;
  var tooHigh = this.top < 0;
  var tooLow = this.top > $('body').height();
  var tooLeft = this.left < 0;
  var tooRight = this.left > $('body').width();
  var offscreen = tooRight || tooLeft || tooLow || tooHigh;
  if (countDone || offscreen) { this.reverse = !this.reverse; }

  this.setPosition(this.top, this.left);
}