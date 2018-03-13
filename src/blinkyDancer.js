var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.step = function() {
    // call the old version of step at the beginning of any call to this new version of step
    this.scheduleStep(this.timeBetweenSteps);
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };
  this.step(this.timeBetweenSteps);
};

makeBlinkyDancer.prototype = Object.create(makeDancer.prototype); 
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;

// Having this instead of lines 4-12 above broke in an infinite loop.
// Not sure why.
// makeBlinkyDancer.prototype.oldStep = makeDancer.prototype.step;
// makeBlinkyDancer.prototype.step = function() {
//   this.oldStep(this.timeBetweenSteps);
//   this.$node.toggle();
// };