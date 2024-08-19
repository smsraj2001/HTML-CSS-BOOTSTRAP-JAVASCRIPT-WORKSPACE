document.getElementById('startGame').addEventListener('click', function() {
    const ball = document.getElementById('ball');
    const pitch = document.getElementById('pitch');
    let ballX = pitch.clientWidth / 2;
    let ballY = pitch.clientHeight / 2;
    let ballSpeedX = 2;
    let ballSpeedY = 2;

    function moveBall() {
        ballX += ballSpeedX;
        ballY += ballSpeedY;

        if (ballX + ball.clientWidth > pitch.clientWidth || ballX < 0) {
            ballSpeedX = -ballSpeedX;
        }

        if (ballY + ball.clientHeight > pitch.clientHeight || ballY < 0) {
            ballSpeedY = -ballSpeedY;
        }

        ball.style.left = ballX + 'px';
        ball.style.top = ballY + 'px';

        requestAnimationFrame(moveBall);
    }

    moveBall();
});
