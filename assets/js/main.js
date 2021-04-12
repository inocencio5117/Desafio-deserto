const sliding = document.querySelector('.sliding-sec');

const menuImg = document.querySelector('.menu')
const menu = document.querySelector('.open-menu')


document.addEventListener('click', e => { if (e.target.classList.contains('menu')) menu.classList.toggle('hide') });

function headerImageInterval() {
    if (sliding.classList.contains('fundo1')) sliding.classList.replace('fundo1', 'fundo2')
    else if (sliding.classList.contains('fundo2')) sliding.classList.replace('fundo2', 'fundo3')
    else if (sliding.classList.contains('fundo3')) sliding.classList.replace('fundo3', 'fundo1')
}

setInterval(function() {
    headerImageInterval()
}, 5000)
