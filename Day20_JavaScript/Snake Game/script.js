document.addEventListener('DOMContentLoaded', () => {
    const gameArea = document.getElementById('gameArea');
    const startBtn = document.getElementById('startBtn');
    const scoreDisplay = document.getElementById('score');

    let snake;
    let food;
    let direction;
    let gameInterval;
    let score;

    const gridSize = 20;  // The size of each grid cell
    const gameAreaSize = 400; // Game area size (400px by 400px)

    function initializeGame() {
        snake = [{ x: 180, y: 180 }]; // Adjust starting position
        direction = { x: 0, y: 0 };
        score = 0;
        scoreDisplay.textContent = score;
        gameArea.innerHTML = '';
        createFood();
        drawSnake();
    }

    function createFood() {
        // Ensure food does not appear on the snake and is within the game area
        do {
            food = {
                x: Math.floor(Math.random() * (gameAreaSize / gridSize - 1)) * gridSize,
                y: Math.floor(Math.random() * (gameAreaSize / gridSize - 1)) * gridSize
            };
        } while (snake.some(segment => segment.x === food.x && segment.y === food.y));

        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        gameArea.appendChild(foodElement);
    }

    function drawSnake() {
        gameArea.innerHTML = '';
        snake.forEach(segment => {
            const snakeElement = document.createElement('div');
            snakeElement.classList.add('snake');
            snakeElement.style.left = `${segment.x}px`;
            snakeElement.style.top = `${segment.y}px`;
            gameArea.appendChild(snakeElement);
        });

        const foodElement = document.createElement('div');
        foodElement.classList.add('food');
        foodElement.style.left = `${food.x}px`;
        foodElement.style.top = `${food.y}px`;
        gameArea.appendChild(foodElement);
    }

    function moveSnake() {
        const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

        // Check for collision with borders
        if (head.x < 0 || head.y < 0 || head.x >= gameAreaSize - gridSize || head.y >= gameAreaSize - gridSize || snakeCollision(head)) {
            clearInterval(gameInterval);
            alert(`Game Over! Your score is ${score}. Press Start to Play Again.`);
            startBtn.disabled = false;  // Re-enable the Start button
            return;
        }

        snake.unshift(head);

        // Check if snake has eaten the food
        if (head.x === food.x && head.y === food.y) {
            score += 10;
            scoreDisplay.textContent = score;
            createFood();
        } else {
            snake.pop();
        }

        drawSnake();
    }

    function snakeCollision(head) {
        return snake.some((segment, index) => {
            if (index !== 0 && segment.x === head.x && segment.y === head.y) return true;
        });
    }

    function startGame() {
        initializeGame();
        gameInterval = setInterval(moveSnake, 150);
        startBtn.disabled = true;
    }

    function changeDirection(event) {
        // Prevent default behavior of arrow keys (scrolling)
        event.preventDefault();

        const keyPressed = event.keyCode;
        const directions = {
            37: { x: -gridSize, y: 0 },  // left arrow
            38: { x: 0, y: -gridSize },  // up arrow
            39: { x: gridSize, y: 0 },   // right arrow
            40: { x: 0, y: gridSize }    // down arrow
        };

        if (directions[keyPressed]) {
            const newDirection = directions[keyPressed];
            const oppositeDirection = { x: -direction.x, y: -direction.y };

            if (newDirection.x !== oppositeDirection.x || newDirection.y !== oppositeDirection.y) {
                direction = newDirection;
            }
        }
    }

    startBtn.addEventListener('click', startGame);
    document.addEventListener('keydown', changeDirection);
});
