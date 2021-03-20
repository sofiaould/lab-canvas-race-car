function random(from, to) {
  // TODO
 return Math.floor(Math.random()* (to-from)+ from)
  
}

class Obstacle {
  constructor() {
    // TODO
    this.w= random(W/4, W/2)
      this.h = 80;
      this.x = random(0,W-this.w);
      this.y = 0;
  }

  draw() {
   ctx.fillStyle ='red';
    ctx.drawImage(this.x,this.y,this.w, this.h)
  }

  hits(car) {
    // TODO
  }
}