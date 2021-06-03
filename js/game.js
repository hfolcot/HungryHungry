// Game States
// 0: Start
// 1: Play
// 2: Pause
// 3: End


class Game {
    constructor(canvas) {
        this.player;
        this.foodArr = [];
        this.keys = [];
        this.canvas = canvas;
        this.numberOfFood = 15;
        this.state = 0;
        this.points = 0;
        this.level = 1;
        this.frame = 0;
        new InputHandler(this);
    }
    init() {
        this.player = new Player(canvas);
        this.foodArr = [];
        this.keys = [];
        for (let i = 0; i < this.numberOfFood; i++) {
            this.foodArr.unshift(new Food(this));
        }
        if (this.level === 1) {
            this.points = 0;
        }
    }
    update(ctx) {
        this.player.update(this);
        this.player.draw(ctx);
        for (let i = 0; i < this.foodArr.length; i++) {
            this.foodArr[i].update(this);
            this.foodArr[i].draw(ctx);
        }
    }
}