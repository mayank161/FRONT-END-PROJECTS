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
console.log(small);
if(small) {
    small.onclick = (e) =>{
        if(e.target.classList.contains('small-img')) {
            big.src= e.target.src;
        }
      }
}


// adding items to cart
let idx = 0;
const add = document.getElementById('addToCart');
if(add) {
    add.addEventListener('click', (e)=> {
        
        const img = e.target.parentElement.parentElement.children[0].children[0].outerHTML;
        const i = [img,e.target.parentElement.children[4].value,e.target.parentElement.children[2].innerText];

    
        for(let j=0; j<localStorage.length; j++) {
            if(img === JSON.parse(localStorage.getItem(localStorage.key(j)))[0]) {
                console.log('same item');
                //localStorage.setItem(`${j}`,JSON.stringify(i));
                return;
            }
        }
        
        
        console.log('the element',e.target.parentElement.parentElement.children[0].children[0],img.outerHTML);
        localStorage.setItem(`${idx}`,JSON.stringify(i));
        idx += 1;
    })  
}

// ------ show elements in cart page -------

//check if local storage contains something if yes then add to cart 

if(localStorage.length) { 
    const table = document.getElementById('cartTable');

    //tr.append(td);
    if(table) {
        for(let i=0; i<localStorage.length; i++) {

             let tr = document.createElement('tr');
             let td = document.createElement('td');

             td.style.width = '20%';
             let p = localStorage.getItem(localStorage.key(i));
             let j = JSON.parse(p);
             console.log('no',j)
             if(j) {
                for(let k=0; k<j.length; k++) {
                    console.log('yes',j[k]);
                    td.innerHTML = j[k];
                    console.log(td.value)
                    if(td.innerText === "undefined") { break; }
                    tr.append(td.cloneNode(true));
                }
                td.innerHTML = `<button class="cancel"> cancel </button>`;
                tr.append(td.cloneNode(true));
                table.append(tr);
             }
         }
    }
   
}



let cancel = document.getElementsByClassName('cancel');

if(cancel) {
    for(let i=0; i<cancel.length; i++) {
        cancel[i].addEventListener('click', (e) => {
            let ts = e
            console.log(e.target.parentElement.parentElement.remove())
            localStorage.removeItem(i);
        })
    }
}