class Heart {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.heart = createSprite(this.x, this.y, this.w, this.h);
  }

  display() {
    drawSprites();
  }
}
