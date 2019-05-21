// toggle button functions

let toggle = document.querySelector('#toggle');
let body = document.querySelector('body');

// adds background filters on load

window.addEventListener('load', () => {
    page2.style.filter = 'grayscale(100%)';
    body.classList.add('alt');
    toggle.checked = false;
});

function toggleColorMode() {
    page.style.transition = 'transition: filter 1s ease';
    page2.style.transition = 'transition: filter 1s ease';
    page3.style.transition = 'transition: filter 1s ease';

    if(page2.style.filter == 'grayscale(100%)') {
        page3.style.opacity = 0;
        page2.style.filter = 'grayscale(0)';
        setTimeout(function() {
            body.classList.remove('alt');
        }, 300);
    }else {
        page3.style.opacity = 1;
        page2.style.filter = 'grayscale(100%)';
        setTimeout(function() {
            body.classList.add('alt');
        }, 300);      
    }
}

toggle.addEventListener('click', () => {
    toggle.style.pointerEvents = 'none';
        setTimeout(function() {
            toggle.style.pointerEvents = 'auto';
        }, 2000);
    toggleColorMode();
});


// cursor background-position tracking

header.addEventListener("mousemove", e => {
    if(window.innerWidth >= 780) {
        page.style.transform = 'translate(' + (-e.offsetX / 147) + 'px, ' + (-e.offsetY / 145) + 'px)';
        page2.style.transform = 'translate(' + (-e.offsetX / 147) + 'px, ' + (-e.offsetY / 145) + 'px)';
        page3.style.transform = 'translate(' + (-e.offsetX / 147) + 'px, ' + (-e.offsetY / 145) + 'px)';
    } else {
        page.style.transform = '';
        page2.style.transform = '';
        page3.style.transform = '';
    }  
});

//control blur on background

function addBlur() {
    page.style.opacity = 0;
    page3.style.opacity = 0;
}

function removeBlur() {   
    if(page2.style.filter == 'grayscale(100%)') {
        page3.style.opacity = '1';
        page.style.opacity = '1';
    } else {
        page.style.opacity = '1';
        page3.style.opacity = '0';
    }
}