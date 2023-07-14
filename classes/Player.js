class Player{
    constructor(canvas){
        this.canvas = canvas;
        this.x = this.canvas.width / 2 - 50;
        this.y = this.canvas.height - 100;
        this.width = 100;
        this.height = 20;
        this.color = "blue";
    }

    render(){
        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.rect(this.x, this.y, this.width, this.height);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
}