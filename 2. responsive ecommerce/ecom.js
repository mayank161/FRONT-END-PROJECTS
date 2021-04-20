// on click menu
const menu = document.querySelector(".menu");

menu.addEventListener('click',()=> {
    const bar = document.querySelector('.first');
    bar.classList.toggle('second');
})

// single product page functionality

// img zoom in

const big = document.getElementById('bigImg');
const small = document.getElementById('smallImg');

small.onclick = (e) =>{
  if(e.target.classList.contains('small-img')) {
      big.src= e.target.src;
  }
}