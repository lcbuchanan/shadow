import p5 from 'p5';
import Bubble from './bubble'
import Tracker from './tracker'

export const t = function( p, movingPixels, firstPixels ) {

  p.setup = function() {
    p.createCanvas(600, 450);
    p.pixelDensity(1);
    // p.system = new ParticleSystem(p.createVector(50, 50));
  };

  p.draw = function() {
    p.background(255, 255, 255, 30);
    const bubble = new Bubble(p, 50, 50);
    bubble.update();
    bubble.display();

    for (var y = 0; y < p.height; y+=4) {
      for (var x = 0; x < p.width; x+=4) {
        var index = (x + y * p.width)*4;
        if (firstPixels && movingPixels
          && !Math.abs(firstPixels[index+0] - movingPixels[index+0] <=10)
          && !Math.abs(firstPixels[index+1] - movingPixels[index+1] <=10)
          && !Math.abs(firstPixels[index+2] - movingPixels[index+2] <=10)
        ){
          const tracker = new Tracker(p, x, y);
          tracker.display();

          const d = p.dist(tracker.x, tracker.y, bubble.x, bubble.y)
          if (d < bubble.r + tracker.r){
            bubble.blink();
            // p.system.addParticle();
            // system.run();
            // return;
          }
        }
      }
    }

  };
};
