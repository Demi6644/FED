// JavaScript Document
console.log("hi");


const hamburgerButton = document.querySelector('header button img');
const menuBody = document.querySelector('nav');
const items = document.querySelectorAll('.carousel-item');
let currentItem = 0;

document.getElementById('next').addEventListener('click', () => {
    items[currentItem].classList.remove('active');
    currentItem = (currentItem + 1) % items.length;
    items[currentItem].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
    items[currentItem].classList.remove('active');
    currentItem = (currentItem - 1 + items.length) % items.length;
    items[currentItem].classList.add('active');
});

function closeMenu(){
    if(menuBody.style.display == "block") {
        menuBody.style.display = "none";
   }  else {
        menuBody.style.display = "block";
   }
}

hamburgerButton.addEventListener('click', closeMenu);