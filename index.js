const boy = document.querySelector('.boy');
const flower = document.querySelector('.flower');
const petal = document.querySelector('.petal');
const petal2 = document.querySelector('.petal2');
const petal3 = document.querySelector('.petal3');
const petal4 = document.querySelector('.petal4');
const girlpetal = document.querySelector('.girlpetal');
const girlpetal2 = document.querySelector('.girlpetal2');
const girlpetal3 = document.querySelector('.girlpetal3');
const girlpetal4 = document.querySelector('.girlpetal4');
const girlhand = document.querySelector('.girlhand');
const girlflower = document.querySelector('.girlflower');
const waviy = document.querySelector('.waviy');

let currentLeft = 77;
let currentTop = 150;
const maxPosition = 1200;

document.addEventListener('keydown', (event) => {
    // Arrow key names: ArrowLeft, ArrowUp, ArrowRight, ArrowDown
    switch (event.key) {
        case 'ArrowLeft':
            currentLeft = Math.max(currentLeft - 10, 0);
            break;
        case 'ArrowUp':
            currentTop = Math.max(currentTop - 10, 0);
            break;
        case 'ArrowRight':
            currentLeft = Math.min(currentLeft + 10, maxPosition - 200);
            break;
        case 'ArrowDown':
            currentTop = Math.min(currentTop + 10, maxPosition - 260);
            break;
    }

    boy.style.left = `${currentLeft}px`;
    boy.style.top = `${currentTop}px`;
    
    if (currentLeft >= maxPosition - 200) {
        flower.style.display = 'none'; 
        petal.style.display = 'none'; 
        petal2.style.display = 'none'; 
        petal3.style.display = 'none'; 
        petal4.style.display = 'none'; 
        girlpetal.style.display = 'block'; 
        girlhand.style.display = 'block';
        girlpetal2.style.display = 'block';
        girlpetal3.style.display = 'block';
        girlpetal4.style.display = 'block';
        girlflower.style.display = 'block';
        waviy.style.display = 'block';

    } else {
        flower.style.display = 'block'; 
        petal.style.display = 'block'; 
        petal2.style.display = 'block'; 
        petal3.style.display = 'block'; 
        petal4.style.display = 'block'; 
        girlpetal.style.display = 'none'; 
        girlhand.style.display = 'none';
        girlpetal2.style.display = 'none';
        girlpetal3.style.display = 'none';
        girlpetal4.style.display = 'none';
        girlflower.style.display = 'none';
        waviy.style.display = 'none'
    }

});
