class Food {
    constructor(game) {
        this.direction = Math.random() > 0.5 ? 'h' : 'v'; //Random horizontal or vertical direction
        this.x = Math.random() * game.canvas.width;
        this.y = Math.random() * game.canvas.height;
        this.size = Math.random() * (game.player.size * 2);
        this.speed = (Math.random() > 0.5 ? (Math.random() * game.speed) : (Math.random() * -game.speed)); //Random speed between -x (left) and +x (right)
        this.spriteSheet = loadImage(['img/flake_green.png', 'img/flake_orange.png', 'img/flake_purple.png', 'img/flake_red.png', 'img/flake_yellow.png'][Math.floor(Math.random() * 5)]);
        if (detectCollision(this, game.player)) {
            this.x = Math.random() * game.canvas.width;
            this.y = Math.random() * game.canvas.height;
        }
    }
    update(game) {
        if (this.direction == 'h') {
            this.x += this.speed;
        } else if (this.direction == 'v') {
            this.y += this.speed;
        }

        /***************************************
         ** Check if food has left the canvas **
         ***** and reset to opposite edge ******
         ***************************************/
        if (this.x + this.size < 0 || // Food has passed left edge of canvas
            this.x > game.canvas.width || // Food has passed right edge of canvas
            this.y > game.canvas.height || // Food has passed bottom edge of canvas
            this.y + this.size < 0 ||  // Food has passed top edge of canvas
            (this.speed > -0.1 && this.speed < 0.1)) // Food hardly moving
        {
            this.reset(game);
        }
    }
    reset(game) {
        this.size = Math.random() * (game.player.size * 2);
        this.speed = Math.random() > 0.5 ? (Math.random() * 5) : (Math.random() * -5);
        if (this.direction == 'h') {
            this.y = Math.random() * game.canvas.height;
            this.x = this.speed > 0 ? 0 - this.size : game.canvas.width;
        } else if (this.direction == 'v') {
            this.y = this.speed > 0 ? 0 - this.size : game.canvas.height;
            this.x = Math.random() * game.canvas.width;
        }
    }
    draw(ctx) {
        ctx.drawImage(this.spriteSheet, this.x, this.y, this.size, this.size);
    }
}