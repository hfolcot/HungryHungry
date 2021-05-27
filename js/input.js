class InputHandler {
    constructor(game) {
        document.addEventListener('keydown', (e)=>{
            e.preventDefault();
            game.keys[e.key] = true;
        })
        document.addEventListener('keyup', (e)=>{
            e.preventDefault();
            game.keys[e.key] = false;
        })
    }
}