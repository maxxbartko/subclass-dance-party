describe('StarDancer', function() {

  var shootingStar, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    shootingStar = new StarDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(shootingStar.$node).to.be.an.instanceof(jQuery);
  });

  it('should reverse direction after 50 steps', function() {
    var reversed = shootingStar.reverse;
    shootingStar.counter = 49;
    shootingStar.step();
    expect(shootingStar.reverse).not.to.equal(reversed);
  });

  it('should reverse direction after hitting the top', function() {
    var reversed = shootingStar.reverse;
    shootingStar.counter = 1;
    shootingStar.degree = 180;
    shootingStar.top = 1;
    shootingStar.step();
    expect(shootingStar.reverse).not.to.equal(reversed);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(shootingStar, 'step');
      expect(shootingStar.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(shootingStar.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(shootingStar.step.callCount).to.be.equal(2);
    });
  });
});
