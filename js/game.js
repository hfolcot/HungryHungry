class Game {
    constructor(canvas) {
        this.player;
        this.foodArr = [];
        this.keys = [];
        this.canvas = canvas;
        this.numberOfFood = 15;
        new InputHandler(this);
    }
    init() {
        this.player = new Player(canvas);
        this.foodArr = [];
        this.keys = [];
        for(let i=0; i<this.numberOfFood; i++){
            this.foodArr.unshift(new Food(this));
        }
    }
    update(ctx) {
         this.player.update(this);
         this.player.draw(ctx);
         for(let i=0; i<this.foodArr.length; i++){
             this.foodArr[i].update(this);
             this.foodArr[i].draw(ctx);
         }
    }
}