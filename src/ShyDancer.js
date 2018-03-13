var ShyDancer = function(top, left, timeBetweenSteps){
  makeDancer.call(this, top, left, timeBetweenSteps, 'shy');
  this.setPosition(this.top, this.left);

  this.$node.mouseover(function() {
    this.top += (0.5 - Math.random()) * 250;
    this.left += (0.5 - Math.random()) * 250;
    this.setPosition(this.top, this.left);
  }.bind(this));
  
  this.step(timeBetweenSteps);
};

ShyDancer.prototype = Object.create(makeDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.hide = function() {
  var hidden = false;
  var blushing = false;
  for (var i = 0; i < window.dancers.length; i++) {
    var vertDiff = window.dancers[i].left - this.left;
    var horizDiff = window.dancers[i].top - this.top;
    var hypo = Math.sqrt(vertDiff**2 + horizDiff**2);
    if (hypo < 50 && hypo !== 0) {
      hidden = true;
      this.$node.hide();
      break;
    } else if (hypo < 100 && hypo !== 0) {
      blushing = true;
      this.$node.css('border', '8px solid red');
    }
  };
  if (!hidden) {
    this.$node.show();
  }
  if (!blushing) {
    this.$node.css('border', '10px solid blue');
  }
}

ShyDancer.prototype.step = function() {
  this.scheduleStep(this.timeBetweenSteps);
  this.hide();
}