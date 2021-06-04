class Message {
    constructor(x, y, font, text, color) {
        this.x = x;
        this.y = y;
        this.font = font;
        this.text = text;
        this.color = color;
    }
    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.font = this.font;
        ctx.textAlign = 'center';
        ctx.fillText(this.text, this.x, this.y);
    }
}