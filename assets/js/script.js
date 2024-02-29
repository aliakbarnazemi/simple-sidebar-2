let $main = document.querySelector('.main-2');
let $sidebar = document.querySelector('.sidebar');
let $open = document.querySelector('#open');
let $close = document.querySelector('.close');

$open.addEventListener('click',()=>{
    $main.classList.remove('d-none');
    $main.classList.add('main');
});

$close.addEventListener('click',()=>{
    $main.classList.add('d-none');
    $main.classList.remove('main');
});