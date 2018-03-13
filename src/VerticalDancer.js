var VerticalDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step = function() {
    this.scheduleStep(timeBetweenSteps);
    this.top += (0.5 - Math.random()) * 50;
    this.setPosition(this.top, this.left);
  };
  this.step(timeBetweenSteps);
};

VerticalDancer.prototype = Object.create(makeDancer.prototype);
VerticalDancer.prototype.constructor = VerticalDancer;