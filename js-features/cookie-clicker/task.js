const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = () => {
    counter.textContent++;

    if (cookie.width === 200) {
        cookie.width = 190;
        cookie.height = 190;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
};