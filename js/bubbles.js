class Bubble {
    constructor() {
        this.spritesheet = loadImage('img/bubble.png');
        this.x = Math.random() * canvas.width;
        this.y = canvas.height;
        this.size = Math.random() * 10;
        this.wobble = Math.random() * 2;
        this.speed = Math.random() * 3 + 2;
    }
    update() {
        this.y -= this.speed;
        this.x += Math.cos(this.wobble);
        this.wobble += 0.3;
        if (this.y < 0) {
            this.y = canvas.height;
            this.x = Math.random() * canvas.width;
            this.size = Math.random() * 10;
            this.wobble = Math.random() * 2;
            this.speed = Math.random() * 5 + 2;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.spritesheet, this.x, this.y, this.size, this.size);
    }
}