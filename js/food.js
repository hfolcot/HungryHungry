class Food {
    constructor(game) {
        this.direction = Math.random() > 0.5 ? 'h' : 'v'; //Random horizontal or vertical direction
        this.x = Math.random() * game.canvas.width;
        this.y = Math.random() * game.canvas.height;
        this.width = Math.random() * game.canvas.width / 6;
        this.height = this.width / 2;
        this.speed = Math.random() > 0.5 ? (Math.random() * 3) : (Math.random() * -3); //Random speed between -3 (left) and +3 (right)
    }
    update(game) {
        if (this.direction == 'h') {
            this.x += this.speed;
        } else if (this.direction == 'v') {
            this.y += this.speed;
        }

        /***************************************
         ** Check if food has left the canvas **
         ** and reset to opposite edge *********
         ***************************************/
        if (this.x + this.width < 0 || // Food has passed left edge of canvas
            this.x > game.canvas.width || // Food has passed right edge of canvas
            this.y > game.canvas.height || // Food has passed bottom edge of canvas
            this.y + this.height < 0) // Food has passed top edge of canvas
        {
            this.reset(game);
        }
    }
    reset(game) {
        this.width = Math.random() * game.canvas.width / 6;
        this.height = this.width / 2;
        this.speed = Math.random() > 0.5 ? (Math.random() * 5) : (Math.random() * -5);
        if (this.direction == 'h') {
            this.y = Math.random() * game.canvas.height;
            this.x = this.speed > 0 ? 0 - this.width : game.canvas.width;
        } else if (this.direction == 'v') {
            this.y = this.speed > 0 ? 0 - this.height : game.canvas.height;
            this.x = Math.random() * game.canvas.width;
        }
    }
    draw(ctx) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}