class InputHandler {
    constructor(game) {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            game.keys[e.key] = true;
            game.player.idle = false;
        })
        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            game.keys[e.key] = false;
            game.player.idle = true;
        })
    }
}