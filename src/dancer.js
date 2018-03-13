// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {
  // use jQuery to create an HTML <span> tag
  this.top = top;
  this.left = left;
  this.$node = $('<span class="dancer"></span>');
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition(top, left);
  this.linedUp = false;
};

makeDancer.prototype.scheduleStep = function(timeBetweenSteps) {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), timeBetweenSteps);
};

makeDancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
  // if(!this.linedUp) { this.$node.animate(styleSettings, 100); } //this is cool, let's play with this later
};

makeDancer.prototype.lineUp = function(index) {
  if (!this.linedUp) {
    this.linedUp = true;
    var destination = { left: '30px', top: index * 10 + 'px' }
    this.$node.animate(destination, 4000);
  } else {
    this.linedUp = false;
  }
  // we will need to end this linedUp state
  // this.setPosition(30, index*10);

  //iterate over dancers
  ///for each, set top position a multiple of their index in dancers array
  ///set all left values to low number
  ///use animate in css to smooth transition
}


/// aspirations
// easily checkable top left values (this.top, this.left)
//