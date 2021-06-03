const canvas = document.getElementById('canvas');

const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;


const game = new Game(canvas);
game.init();

function loop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.update(ctx);
    requestAnimationFrame(loop);
    game.frame++;
}

requestAnimationFrame(loop);