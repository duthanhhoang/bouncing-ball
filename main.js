let canvas = document.getElementById("game-scene");
let ball = new Ball(canvas);
let player = new Player(canvas);
let brick = new Brick(canvas);
let bricks = [];


function updateGame() {
    clearSceen();
    showBricks();
    ball.move();
    ball.render();
    player.render();
    checkCollision();
    requestAnimationFrame(updateGame);
}

updateGame();

function clearSceen() {
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function createBricks() {
    let col = canvas.width / (BRICK_WIDTH + SPACE_BIRCK);
    let row = 3;
    for (let i = 0; i < col; i++) {
        for (let j = 0; j < row; j++) {
            let brick = new Brick(canvas);
            brick.x = i * (BRICK_WIDTH + SPACE_BIRCK);
            brick.y = j * (BRICK_HEIGHT + SPACE_BIRCK);
            bricks.push(brick);
        }

    }
}

createBricks();

function showBricks() {
    for (let i = 0; i < bricks.length; i++) {
        bricks[i].render();
    }
}

function checkCrash(obj1, obj2) {
    let left1 = obj1.x - obj1.radius;
    let right1 = obj1.x + obj1.radius;
    let top1 = obj1.y - obj1.radius;
    let bot1 = obj1.y + obj1.radius;

    let left2 = obj2.x;
    let right2 = obj2.x + obj2.width;
    let top2 = obj2.y;
    let bot2 = obj2.y + obj2.height;

    if (left1 > right2 || right1 < left2 || top1 > bot2 || bot1 < top2) {
        return false;
    }

    return true;
}

function checkCollision() {
    //Kiem tra va cham giua enemy va dan
    for (let i = 0; i < bricks.length; i++) {
        if (checkCrash(ball, bricks[i])) {
            if(bricks[i].y + bricks[i].height < ball.y){
                ball.speedY = -ball.speedY;
            }else{
                ball.speedX = -ball.speedX;
            }
            bricks.splice(i, 1);
            
            break;
        }
    }
}