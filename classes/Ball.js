class Ball{
    constructor(canvas){
        this.canvas = canvas;
        this.x = 500;
        this.y = 400;
        this.radius = 15;
        this.color = "red";
        this.speedX = 10;
        this.speedY = 10;
    }

    render(){
        let ctx = this.canvas.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

    move(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.x + this.radius > this.canvas.width || this.x - this.radius < 0){
            this.speedX = -1 * this.speedX;
        }

        if(this.y + this.radius > this.canvas.height || this.y - this.radius < 0){
            this.speedY = -this.speedY;
        }
    }
}