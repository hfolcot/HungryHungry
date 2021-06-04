class Player {
    constructor(canvas) {
        this.size = 20;
        this.x = canvas.width / 2 - this.size / 2;
        this.y = canvas.height / 2 - this.size / 2;
        this.color = '#bada55';
        this.minSpeed = 0;
        this.xSpeed = 0;
        this.ySpeed = 0;
        this.maxSpeed = 5;
        this.idle = true;
        this.swimSpriteRight = new FishSprite('img/fishSwimRight.png', 3, 2);
        this.swimSpriteLeft = new FishSprite('img/fishSwimLeft.png', 3, 2);
        this.currentSprite = this.swimSpriteRight;
        this.canvas = canvas;
    }

    update(game) {

        // Speed up with momentum
        if (game.keys['ArrowRight']) {
            this.currentSprite = this.swimSpriteRight;
            if (this.xSpeed < this.maxSpeed) {
                this.xSpeed += 0.1;
            }
        }
        if (game.keys['ArrowLeft']) {
            this.currentSprite = this.swimSpriteLeft;
            if (this.xSpeed > -this.maxSpeed) {
                this.xSpeed -= 0.1;
            }
        }
        if (game.keys['ArrowDown']) {
            this.idle = false;
            if (this.ySpeed < this.maxSpeed) {
                this.ySpeed += 0.1;
            }
        }
        if (game.keys['ArrowUp']) {
            this.idle = false;
            if (this.ySpeed > -this.maxSpeed) {
                this.ySpeed -= 0.1;
            }
        }

        // Slow down with momentum
        if (!game.keys['ArrowRight'] && !game.keys['ArrowLeft'] && this.xSpeed !== 0) {
            this.xSpeed = this.xSpeed < 0 ? this.xSpeed + 0.1 : this.xSpeed - 0.1;
        }
        if (!game.keys['ArrowUp'] && !game.keys['ArrowDown'] && this.ySpeed !== 0) {
            this.ySpeed = this.ySpeed < 0 ? this.ySpeed + 0.1 : this.ySpeed - 0.1;
        }

        // Check player is still in play area
        if (this.x > game.canvas.width) {
            this.x = 0 - this.size;
        }
        if (this.x + this.size < 0) {
            this.x = game.canvas.width;
        }
        if (this.y + this.size < 0) {
            this.y = game.canvas.height;
        }
        if (this.y > game.canvas.height) {
            this.y = 0 - this.size;
        }

        // Move
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if (!this.idle) {
            this.currentSprite.animate();
        }

        // Check for collision with food
        for (let i = 0; i < game.foodArr.length; i++) {
            // if (detectCollision(this, game.foodArr[i])) {
            //     if (this.size > game.foodArr[i].size) {
            //         game.foodArr[i].reset(game);
            //         game.points += Math.ceil(game.foodArr[i].size);
            //         this.size += 2;
            //     } else {
            //         // Game over
            //         game.state = 3;
            //     }

            // }
        }

        if (this.size > game.canvas.width / 5) {
            game.state = 4;
        }

    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        //ctx.fillRect(this.x, this.y, this.size, this.size);

        this.currentSprite.draw(this.x, this.y, this.size, this.size);
    }
}