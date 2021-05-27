class Player {
    constructor(canvas) {
        this.width = 10;
        this.height = this.width/2;
        this.x = canvas.width / 2 - this.width / 2;
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

        // Check player is still in play area
        if(this.x > game.canvas.width){
            this.x = 0 - this.width;
        }
        if(this.x + this.width < 0) {
            this.x = game.canvas.width;
        }
        if(this.y+this.height < 0) {
            this.y = game.canvas.height;
        }
        if(this.y > game.canvas.height){
            this.y = 0 - this.height;
        }

        // Move
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        // Check for collision with food
        for(let i = 0; i<game.foodArr.length; i++){
            if(detectCollision(this, game.foodArr[i])) {
                if(this.width > game.foodArr[i].width) {
                    game.foodArr[i].reset(game);
                    game.points += Math.ceil(game.foodArr[i].width);
                    this.width+=5;
                    this.height = this.width / 2;
                } else {
                    // Game over
                    game.state = 3;
                }
                
            }
        }

        if(this.width > game.canvas.width / 5){
            game.level++;
            game.init();
        }

    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}