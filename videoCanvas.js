let movingPixels;
let firstPixels;

const s = function( p ) {
  var x = 100;
  var y = 100;

  p.setup = function() {
    p.createCanvas(600, 450);
    p.pixelDensity(1);
    p.capture = p.createCapture('VIDEO');
    p.capture.size(320, 240);
    p.capture.hide();
  };

  p.draw = function() {
    p.image(p.capture, 0, 0, 600, 450);
    p.loadPixels();
    movingPixels = p.pixels;
    p.updatePixels();
  };

  p.mousePressed = () => {
    p.loadPixels();
    firstPixels = p.pixels;
  }
};

// const movingPixels = p.movingPixels;
// const firstPixels = p.firstPixels;

export {s, movingPixels, firstPixels};
