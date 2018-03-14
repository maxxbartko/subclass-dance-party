// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps, name) {
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class = "dancer ' + name + '"></span>');
  this.setPosition(top, left);
  this.linedUp = false;
  this.colorAssign = Math.floor(Math.random() * 6);
  if(this.colorAssign === 0){
    this.$node.addClass('white');
  } else if (this.colorAssign === 1){
    this.$node.addClass('black');
  } else if (this.colorAssign === 2){
    this.$node.addClass('red');
  } else if (this.colorAssign === 3){
    this.$node.addClass('blue');
  } else if (this.colorAssign === 4){
    this.$node.addClass('orange');
  } else if (this.colorAssign === 5){
    this.$node.addClass('yellow');
  }
};

makeDancer.prototype.scheduleStep = function(timeBetweenSteps) {
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Ensure that top and left don't go beyond either bound
  var styleSettings = {
    top: Math.max(32, Math.min(top, $('body').height() - 45)),
    left: Math.max(0, Math.min(left, $('body').width() - 60))
  };
  // this.$node.css(styleSettings); // Instantly set position
  if(!this.linedUp) {
    this.$node.animate(styleSettings, 100);
    //Using .animate breaks synchronous position tests
  }
};

makeDancer.prototype.lineUp = function(index) {
  if (!this.linedUp) {
    this.linedUp = true;
    var destination = { left: '30px', top: index * 10 + 'px' }
    this.$node.animate(destination, 4000);
  } else {
    this.linedUp = false;
  }
}