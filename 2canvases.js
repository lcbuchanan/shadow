import {s, movingPixels, firstPixels} from './videoCanvas.js';
import Bubble from './bubble';
import Tracker from './tracker';
import { blue, purple, black } from './constants';
// import Particle from './particle'


//canvas that records video
var myp5 = new p5(s, 'c2');

// canvas that renders movement trackers
var trackCanvas = function( p ) {

  p.setup = function() {
    p.createCanvas(600, 450);
    p.pixelDensity(1);
  };

  p.draw = function() {
    p.background(255, 255, 255, 30);
    const blueBubble = new Bubble(p, 50, 50, blue);
    const purpleBubble = new Bubble(p, 500, 50, purple)
    blueBubble.update();
    blueBubble.display();
    purpleBubble.update();
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
          const tracker = new Tracker(p, x, y);
          tracker.display(toFill);
        }
      }
    }

  };
};
var myp5 = new p5(trackCanvas, 'c1');
