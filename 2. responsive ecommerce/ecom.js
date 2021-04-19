// on click menu
const menu = document.querySelector(".menu");

menu.addEventListener('click',()=> {
    const bar = document.querySelector('.first');
    bar.classList.toggle('second');
})

