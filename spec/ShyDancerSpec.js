describe('ShyDancer', function() {

  var wallflower, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    wallflower = new ShyDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(wallflower.$node).to.be.an.instanceof(jQuery);
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(wallflower, 'step');
      expect(wallflower.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(wallflower.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(wallflower.step.callCount).to.be.equal(2);
    });

    it('should hide from other dancers', function() {
      var isHidden = wallflower.hidden;
      var chad = new makeBlinkyDancer(5, 25, timeBetweenSteps);
      window.dancers.push(chad, wallflower);
      wallflower.step();
      expect(wallflower.hidden).not.to.equal(isHidden);
    });

    it('should flee from the cursor upon mouseover', function() {
      wallflower.$node.mouseover();
      expect(wallflower.top).not.to.equal(10);
      expect(wallflower.left).not.to.equal(20);
    });
  }

  );
});
