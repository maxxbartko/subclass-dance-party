var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);

  this.oldStep = this.step;
  this.step = function step() {
    // call the old version of step at the beginning of any call to this new version of step
    this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  }.bind(this);
  this.step();
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); 
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

//Gives the blinkyDancer all the dancer's shared methods (with line 8) - implied before line 2
//Runs the makeDancer constructor (line 2)
//Sets oldStep to the current (dancer) step method (line 4)
//Defines the new this.step - which we have to do in the constructor,
//because otherwise it would overwrite this.step before line 4 (in implied before-line-2)