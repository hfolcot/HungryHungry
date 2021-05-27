class Food {
    constructor(game) {
        this.direction = Math.random() > 0.5 ? 'h' : 'v'; //Random horizontal or vertical direction
        this.x = Math.random() * game.canvas.width;
        this.y = Math.random() * game.canvas.height;
        this.width = Math.random() * game.canvas.width/6;
        this.height = this.width/2;
        this.speed =  Math.random() > 0.5 ? (Math.random() * 1)  : (Math.random() * -1); //Random speed between -1 (left) and +1 (right)
        console.log(this)
    }
    update(game) {
        if(this.direction == 'h'){
            this.x += this.speed;
        } else if(this.direction == 'v'){
            this.y += this.speed;
        }

        /***************************************
         ** Check if food has left the canvas **
         ** and reset to opposite edge *********
         ***************************************/
        if(this.x + this.width < 0){
            // Food has passed left edge of canvas
            this.x = game.canvas.width;
            this.width = Math.random() * game.canvas.width/6;
            this.height = this.width/2;
        }
        if(this.x > game.canvas.width){
            // Food has passed right edge of canvas
            this.width = Math.random() * game.canvas.width/6;
            this.height = this.width/2;
            this.x = 0 - this.width;
        }
        if(this.y > canvas.height){
            // Food has passed bottom edge of canvas
            this.width = Math.random() * game.canvas.width/6;
            this.height = this.width/2;
            this.y = 0 - this.height;
        }
        if(this.y + this.height < 0){
            // Food has passed top edge of canvas
            this.width = Math.random() * game.canvas.width/6;
            this.height = this.width/2;
            this.y = game.canvas.height;
        }
    }
    draw(ctx){
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}