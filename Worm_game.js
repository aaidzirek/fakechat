const gameArea = document.getElementById('gameArea');
const gridSize = 20;
const gameSize = 400;
let snake = [{ x: 100, y: 100 }];
let direction = { x: gridSize, y: 0 };
let food = generateFood();
let gameInterval;

function startGame() {
    document.addEventListener('keydown', changeDirection);
    gameInterval = setInterval(updateGame, 100);
}

function resetGame() {
    snake = [{ x: 100, y: 100 }];
    direction = { x: gridSize, y: 0 };
    food = generateFood();
    clearInterval(gameInterval);
    startGame();
}

function updateGame() {
    const head = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (checkCollision(head)) {
        resetGame();
        return;
    }

    snake.unshift(head);

    if (head.x === food.x && head.y === food.y) {
        food = generateFood();
    } else {
        snake.pop();
    }

    draw();
}

function draw() {
    gameArea.innerHTML = '';
    snake.forEach(segment => {
        const snakeElement = document.createElement('div');
        snakeElement.style.left = segment.x + 'px';
        snakeElement.style.top = segment.y + 'px';
        snakeElement.classList.add('snake');
        gameArea.appendChild(snakeElement);
    });

    const foodElement = document.createElement('div');
    foodElement.style.left = food.x + 'px';
    foodElement.style.top = food.y + 'px';
    foodElement.classList.add('food');
    gameArea.appendChild(foodElement);
}

function changeDirection(event) {
    switch (event.key) {
        case 'ArrowUp':
            if (direction.y === 0) {
                direction = { x: 0, y: -gridSize };
            }
            break;
        case 'ArrowDown':
            if (direction.y === 0) {
                direction = { x: 0, y: gridSize };
            }
            break;
        case 'ArrowLeft':
            if (direction.x === 0) {
                direction = { x: -gridSize, y: 0 };
            }
            break;
        case 'ArrowRight':
            if (direction.x === 0) {
                direction = { x: gridSize, y: 0 };
            }
            break;
    }
}

function checkCollision(head) {
    return (
        head.x < 0 ||
        head.x >= gameSize ||
        head.y < 0 ||
        head.y >= gameSize ||
        snake.some(segment => segment.x === head.x && segment.y === head.y)
    );
}

function generateFood() {
    return {
        x: Math.floor(Math.random() * (gameSize / gridSize)) * gridSize,
        y: Math.floor(Math.random() * (gameSize / gridSize)) * gridSize
    };
}

startGame();
