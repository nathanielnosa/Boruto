const menu = document.querySelector('#menu');
const mobile = document.querySelector('#mobile-menu');

menu.addEventListener('click', addMenu);
function addMenu(){
    if (mobile.classList.contains('hidden')) {
        mobile.classList.remove('hidden');
        mobile.classList.add('flex');
        menu.classList.add('bx-x');
        menu.classList.remove('bx-menu');
        
    } else {
        mobile.classList.remove('flex');
        mobile.classList.add('hidden');
        menu.classList.add('bx-menu');
        menu.classList.remove('bx-x');
        
    }
}

// aos
AOS.init();
