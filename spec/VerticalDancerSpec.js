describe('VerticalDancer', function() {

  var wiggler, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wiggler = new VerticalDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wiggler.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that changes the "top" variable', function() {
    var position = wiggler.$node.css('top'); 
    wiggler.step();
    expect(wiggler.$node.css('top')).not.to.equal(position);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wiggler, 'step');
      expect(wiggler.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wiggler.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wiggler.step.callCount).to.be.equal(2);
    });
  });
});
