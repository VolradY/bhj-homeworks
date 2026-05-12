const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = Array.from(rotator.querySelectorAll('.rotator__case'));

    const changeCase = () => {
        const activeCase = rotator.querySelector('.rotator__case_active');
        let index = cases.indexOf(activeCase);

        activeCase.classList.remove('rotator__case_active');

        index = (index + 1) % cases.length;
        const nextCase = cases[index];

        const color = nextCase.dataset.color;
        nextCase.style.color = color;

        nextCase.classList.add('rotator__case_active');

        const speed = nextCase.dataset.speed || 1000;
        setTimeout(changeCase, speed);
    };

    const initialSpeed = cases[0].dataset.speed || 1000;
    setTimeout(changeCase, initialSpeed);
});