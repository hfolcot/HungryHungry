class FishSprite {
    constructor(src, maxFrameX, maxFrameY) {
        this.spriteSheet = loadImage(src);
        this.maxFrameX = maxFrameX;
        this.maxFrameY = maxFrameY;
        this.frameWidth = 418;
        this.frameHeight = 397;
        this.frameX = 0;
        this.frameY = 0;
    }

    animate() {
        if (game.frame % 10 == 0) {
            if (this.frameY < this.maxFrameY) {
                if (this.frameX < this.maxFrameX) {
                    this.frameX++;
                }
                else {
                    this.frameX = 0;
                    this.frameY++;
                }

            } else {
                this.frameY = 0;
            }
        }
    }

    draw(x, y, w, h) {
        ctx.drawImage(this.spriteSheet, this.frameWidth * this.frameX, this.frameHeight * this.frameY, this.frameWidth, this.frameHeight, x, y, w, h);
    }
}
