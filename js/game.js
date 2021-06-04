// Game States
// 0: Start
// 1: Play
// 2: Pause
// 3: End
// 4: Level Transition


class Game {
    constructor(canvas) {
        this.player;
        this.foodArr = [];
        this.bubbleArr = [];
        this.keys = [];
        this.canvas = canvas;
        this.numberOfFood = 15;
        this.numberOfBubbles = 3;
        this.state = 0;
        this.points = 0;
        this.level = 1;
        this.speed = 0.5;
        this.frame = 0;
        this.newLevelTimer = 3;
        new InputHandler(this);
    }
    init() {
        this.player = new Player(canvas);
        this.foodArr = [];
        this.bubbleArr = [];
        this.keys = [];
        for (let i = 0; i < this.numberOfFood; i++) {
            this.foodArr.unshift(new Food(this));
        }
        for (let i = 0; i < this.numberOfBubbles; i++) {
            this.bubbleArr.unshift(new Bubble());
        }
        if (this.level === 1) {
            this.points = 0;
        }
    }
    levelTransition() {
        let time = game.newLevelTimer;
        let timer = setInterval(function () {
            time--;
            game.newLevelTimer = time;
            if (time <= 0) {
                clearInterval(timer);
                game.state = 1;
                game.newLevelTimer = 3;
                game.level++;
                game.speed += 0.1;
                game.init();
            }
        }, 1000);
    }

    update(ctx) {

        if (this.state === 0) {
            // Start Screen
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let startMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Press space to start!", "white");
            startMessage.draw(ctx);
        }
        if (this.state === 1) {
            // Game Play
            this.player.update(this);
            this.player.draw(ctx);
            for (let i = 0; i < this.foodArr.length; i++) {
                this.foodArr[i].update(this);
                this.foodArr[i].draw(ctx);
            }
            for (let i = 0; i < this.bubbleArr.length; i++) {
                this.bubbleArr[i].update(this);
                this.bubbleArr[i].draw(ctx);
            }
        }
        if (this.state === 2) {
            // Pause Screen
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let startMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Paused", "white");
            startMessage.draw(ctx);
        }
        if (this.state === 3) {
            // Game Over
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let gameOverMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "You were knocked out!", "white");
            gameOverMessage.draw(ctx);
            let scoreText = new Message(canvas.width / 2, canvas.height / 2 + 30, 'bold 18px Arial', "Your Score: " + this.points, "white");
            scoreText.draw(ctx);
            let restartText = new Message(canvas.width / 2, canvas.height / 2 + 60, 'bold 18px Arial', "Press space to restart", "white");
            restartText.draw(ctx);
        }
        if (this.state === 4) {
            // Init new level
            this.levelTransition();
            this.state = 5;
        }
        if (this.state == 5) {
            // Pause between levels
            ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
            let gameOverMessage = new Message(canvas.width / 2, canvas.height / 2, 'bold 25px Arial', "Level " + this.level + " Passed!", "white");
            gameOverMessage.draw(ctx);
            let scoreText = new Message(canvas.width / 2, canvas.height / 2 + 30, 'bold 18px Arial', "Your Score: " + this.points, "white");
            scoreText.draw(ctx);
            let restartText = new Message(canvas.width / 2, canvas.height / 2 + 60, 'bold 18px Arial', "New level in " + this.newLevelTimer, "white");
            restartText.draw(ctx);
        }
    }
}