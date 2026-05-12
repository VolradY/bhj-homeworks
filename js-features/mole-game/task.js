const dead = document.getElementById('dead');
const lost = document.getElementById('lost');

const resetGame = (message) => {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
};

const getHole = index => document.getElementById(`hole${index}`);

for (let i = 1; i <= 9; i++) {
    const hole = getHole(i);

    hole.onclick = function() {
        if (hole.classList.contains('hole_has-mole')) {
            dead.textContent++;
        } else {
            lost.textContent++;
        }

        if (parseInt(dead.textContent) === 10) {
            resetGame('Победа! Вы уничтожили 10 кротов.');
        } else if (parseInt(lost.textContent) === 5) {
            resetGame('Игра окончена. Вы совершили 5 промахов.');
        }
    };
}