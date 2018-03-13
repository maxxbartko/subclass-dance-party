var ShyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.left = left;
  this.setPosition(this.top, this.left);

  this.$node.mouseover(function() {
    this.top += (0.5 - Math.random()) * 250;
    this.left += (0.5 - Math.random()) * 250;
    this.setPosition(this.top, this.left);
  }.bind(this));
};

ShyDancer.prototype = Object.create(makeDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;