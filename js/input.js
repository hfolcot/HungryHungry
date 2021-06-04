class InputHandler {
    constructor(game) {
        document.addEventListener('keydown', (e) => {
            e.preventDefault();
            game.keys[e.key] = true;
            game.player.idle = false;

            // Pause
            if (e.key === 'p' && game.state == 1) {
                game.state = 2;
            } else if (e.key === 'p' && game.state === 2) {
                game.state = 1;
            }

            // Start/Restart Game
            if (e.code == 'Space' && [0, 3].indexOf(game.state) != -1) {
                game.init();
                game.state = 1;
            }
        })
        document.addEventListener('keyup', (e) => {
            e.preventDefault();
            game.keys[e.key] = false;
            game.player.idle = true;
        })

    }
}