import p5 from 'p5';

function Bubble(p, x, y, color) {
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

  this.update = function() {
    this.x = this.x + 10
    this.y = this.y + 10
  }

  this.blink = function() {
    this.display();
  }

  this.animate = function () {

  }
}

export default Bubble;
