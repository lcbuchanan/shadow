let movingPixels;
let firstPixels;

const purple = [209, 130, 255];
const blue = [206, 255, 246];
const black = [0, 0, 0];

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

var myp5 = new p5(s, 'c2');

// canvas that renders movement trackers
var t = function( p ) {

  p.setup = function() {
    p.createCanvas(600, 450);
    p.pixelDensity(1);
  };

  p.draw = function() {
    p.background(255, 255, 255, 30);
    const blueBubble = new Bubble(50, 50, blue);
    const purpleBubble = new Bubble(500, 50, purple)
    blueBubble.display();
    purpleBubble.display();
    let toFill = black

    for (var y = 0; y < p.height; y+=4) {
      for (var x = 0; x < p.width; x+=4) {
        var index = (x + y * p.width)*4;
        if (firstPixels && movingPixels
          && !Math.abs(firstPixels[index+0] - movingPixels[index+0] <=10)
          && !Math.abs(firstPixels[index+1] - movingPixels[index+1] <=10)
          && !Math.abs(firstPixels[index+2] - movingPixels[index+2] <=10)
        ){
          if (Math.abs(x - 50) <= 10 && Math.abs(y - 50) <= 10){
            toFill = blue
          } else if (Math.abs(x - 500) <= 10 && Math.abs(y - 50) <= 10){
            toFill = purple
          }
          const tracker = new Tracker(x, y);
          tracker.display(toFill);
        }
      }
    }

  };

  function Tracker(x, y){
    this.x = x;
    this.y = y;
    this.r = 4;

    this.display = function(colorArray){
      p.noStroke();
      p.fill(colorArray[0], colorArray[1], colorArray[2]);
      p.ellipse(x, y, this.r, this.r)
    }
  }

  function Bubble(x, y, color) {
    this.x = x;
    this.y = y;
    this.r = 25;
    this.red = color[0]
    this.green = color[1]
    this.blue = color[2]


    this.display = function(){
      p.noStroke();
      p.fill(this.red, this.green, this.blue);
      p.ellipse(this.x, this.y, this.r*2, this.r*2)
    }
  }
};
var myp5 = new p5(t, 'c1');
