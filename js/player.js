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
        // Speed up with momentum
        if (game.keys['ArrowRight']) {
            if (this.xSpeed < this.maxSpeed) {
                this.xSpeed += 0.1;
            }
        }
        if (game.keys['ArrowLeft']) {
            if (this.xSpeed > -this.maxSpeed) {
                this.xSpeed -= 0.1;
            }
        }
        if (game.keys['ArrowDown']) {
            if (this.ySpeed < this.maxSpeed) {
                this.ySpeed += 0.1;
            }
        }
        if (game.keys['ArrowUp']) {
            if (this.ySpeed > -this.maxSpeed) {
                this.ySpeed -= 0.1;
            }
        }

        // Slow down with momentum
        if(!game.keys['ArrowRight'] && !game.keys['ArrowLeft'] && this.xSpeed !== 0) {
            this.xSpeed = this.xSpeed < 0 ? this.xSpeed + 0.1 : this.xSpeed -0.1;
        }
        if(!game.keys['ArrowUp'] && !game.keys['ArrowDown'] && this.ySpeed !== 0) {
            this.ySpeed = this.ySpeed < 0 ? this.ySpeed + 0.1 : this.ySpeed -0.1;
        }

        // Move
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Check for collision with food
        for(let i = 0; i<game.foodArr.length; i++){
            if(detectCollision(this, game.foodArr[i])) {
                if(this.width > game.foodArr[i].width) {
                    game.foodArr[i].reset(game);
                    game.points += game.foodArr[i].width;
                    this.width+=5;
                    this.height+=5;
                } else {
                    // Game over
                    game.state = 3;
                }
                
            }
        }

        //TODO: Check for win state

    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}