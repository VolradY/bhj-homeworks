const reveals = document.querySelectorAll('.reveal');

const revealBlocks = () => {
    reveals.forEach(el => {
        const { top, bottom } = el.getBoundingClientRect();

        const windowHeight = window.innerHeight;

        if (top < windowHeight && bottom > 0) {
            el.classList.add('reveal_active');
        } else {
            el.classList.remove('reveal_active');
        }
    });
};

window.addEventListener('scroll', revealBlocks);

revealBlocks();