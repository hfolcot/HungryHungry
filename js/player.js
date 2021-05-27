class Player {
    constructor(canvas) {
        this.height = 10;
        this.width = 10;
        this.x = 0;
        this.y = canvas.height / 2 - this.height / 2;
        this.color = '#bada55';
        this.minSpeed = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.maxSpeed = 5;
        this.move = false;
        this.canvas = canvas;
    }

    update(game) {
        if (game.keys['ArrowRight']) {
            if (this.xSpeed < this.maxSpeed) {
                this.xSpeed += 0.1;
            }
        } else {
            if(this.xSpeed > this.minSpeed && ! game.keys['ArrowLeft']) {
                this.xSpeed -= 0.1;
            }
        }
        if (game.keys['ArrowLeft']) {
            if (this.xSpeed > -this.maxSpeed) {
                this.xSpeed -= 0.1;
            }
        } else {
            if(this.xSpeed < this.minSpeed && ! game.keys['ArrowRight']) {
                this.xSpeed += 0.1;
            }
        }
        if (game.keys['ArrowDown']) {
            if (this.ySpeed < this.maxSpeed) {
                this.ySpeed += 0.1;
            }
        } else {
            if(this.ySpeed > this.minSpeed && ! game.keys['ArrowUp']) {
                this.ySpeed -= 0.1;
            }
        }
        if (game.keys['ArrowUp']) {
            if (this.ySpeed > -this.maxSpeed) {
                this.ySpeed -= 0.1;
            }
        } else {
            if(this.ySpeed < this.minSpeed && ! game.keys['ArrowDown']) {
                this.ySpeed += 0.1;
            }
        }
        this.x += this.xSpeed;
        this.y += this.ySpeed;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}