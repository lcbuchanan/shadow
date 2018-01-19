function Tracker(p, x, y){
  this.x = x;
  this.y = y;
  this.r = 4;

  this.display = function(colorArray){
    p.noStroke();
    p.fill(colorArray[0], colorArray[1], colorArray[2]);
    p.ellipse(x, y, this.r, this.r)
  }

  this.shift = function(){
    this.red = 255;
    this.green = 0;
    this.blue = 0;

  }
}

Tracker.shift = function(){
  this.red = 255;
  this.green = 0;
  this.blue = 0;
}

export default Tracker;
