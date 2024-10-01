// JavaScript Document
console.log("hi");

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
