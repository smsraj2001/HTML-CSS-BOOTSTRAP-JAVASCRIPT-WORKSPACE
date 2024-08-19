const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Canvas size
const canvasWidth = 400;
const canvasHeight = 400;

// Snake and fruit properties
const snakeSize = 20;
const fruitSize = 20;
let snake = [{ x: 200, y: 200 }];
let fruit = { x: 100, y: 100 };
let direction = 'RIGHT';
let newDirection = 'RIGHT';
let score = 0;

// Set canvas size
canvas.width = canvasWidth;
canvas.height = canvasHeight;

// Key listeners for controlling the snake
document.addEventListener('keydown', (event) => {
    switch (event.code) {
        case 'ArrowUp':
            if (direction !== 'DOWN') newDirection = 'UP';
            break;
        case 'ArrowDown':
            if (direction !== 'UP') newDirection = 'DOWN';
            break;
        case 'ArrowLeft':
            if (direction !== 'RIGHT') newDirection = 'LEFT';
            break;
        case 'ArrowRight':
            if (direction !== 'LEFT') newDirection = 'RIGHT';
            break;
    }
});

// Game loop
function gameLoop() {
    updateSnake();
    checkCollision();
    draw();
    setTimeout(gameLoop, 100); // Adjust speed of the game
}

// Update snake position
function updateSnake() {
    direction = newDirection;

    let head = { ...snake[0] };

    switch (direction) {
        case 'UP':
            head.y -= snakeSize;
            break;
        case 'DOWN':
            head.y += snakeSize;
            break;
        case 'LEFT':
            head.x -= snakeSize;
            break;
        case 'RIGHT':
            head.x += snakeSize;
            break;
    }

    snake.unshift(head);

    if (head.x === fruit.x && head.y === fruit.y) {
        score += 10;
        placeFruit();
    } else {
        snake.pop();
    }
}

// Check collisions
function checkCollision() {
    let head = snake[0];

    // Check wall collision
    if (head.x < 0 || head.x >= canvasWidth || head.y < 0 || head.y >= canvasHeight) {
        resetGame();
    }

    // Check self collision
    for (let i = 1; i < snake.length; i++) {
        if (snake[i].x === head.x && snake[i].y === head.y) {
            resetGame();
        }
    }
}

// Draw everything on canvas
function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    // Draw snake
    ctx.fillStyle = 'green';
    snake.forEach(segment => {
        ctx.fillRect(segment.x, segment.y, snakeSize, snakeSize);
    });

    // Draw fruit
    ctx.fillStyle = 'red';
    ctx.fillRect(fruit.x, fruit.y, fruitSize, fruitSize);

    // Draw score
    ctx.fillStyle = 'white';
    ctx.font = '20px Arial';
    ctx.fillText('Score: ' + score, 10, 20);
}

// Place fruit in a random location
function placeFruit() {
    fruit.x = Math.floor(Math.random() * (canvasWidth / fruitSize)) * fruitSize;
    fruit.y = Math.floor(Math.random() * (canvasHeight / fruitSize)) * fruitSize;
}

// Reset the game
function resetGame() {
    snake = [{ x: 200, y: 200 }];
    direction = 'RIGHT';
    newDirection = 'RIGHT';
    score = 0;
    placeFruit();
}

// Start the game loop
placeFruit();
gameLoop();
