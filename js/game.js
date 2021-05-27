class Game {
    constructor(canvas) {
        this.player = new Player(canvas);
        this.keys = [];
        new InputHandler(this);
    }
    update() {
         this.player.update(this);
         this.player.draw(ctx);
    }
}