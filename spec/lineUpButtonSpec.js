describe('lineUp Button', function() {

  var blinkyDancer, verticalDancer, starDancer, shyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new makeBlinkyDancer(10, 45, timeBetweenSteps);
    verticalDancer = new VerticalDancer(10, 45, timeBetweenSteps);
    starDancer = new StarDancer(10, 45, timeBetweenSteps);
    shyDancer = new ShyDancer(10, 45, timeBetweenSteps);
    window.dancers.push(blinkyDancer, verticalDancer, starDancer, shyDancer);
  });

  it('should call "animate" on all dancers upon click', function() {
    sinon.spy(blinkyDancer.$node, 'animate');
    sinon.spy(verticalDancer.$node, 'animate');
    sinon.spy(starDancer.$node, 'animate');
    sinon.spy(shyDancer.$node, 'animate');
    var button = $('<a href="#" class="lineUpButton" id="lineUp">line up!</a>');
    $('body').append(button);
    button.hide();
    $('.lineUpButton').on('click', function(event) {
      for (var i = 0; i < window.dancers.length; i++) {
        window.dancers[i].lineUp(i);
      }
    });
    $('.lineUpButton').trigger('click');
    expect(blinkyDancer.$node.animate.called).to.be.true;
    expect(verticalDancer.$node.animate.called).to.be.true;
    expect(starDancer.$node.animate.called).to.be.true;
    expect(shyDancer.$node.animate.called).to.be.true;
  });
});