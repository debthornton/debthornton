// toggle button functions

let toggle = document.querySelector('#toggle');

// adds background filters on load

window.addEventListener('load', () => {
    page.style.filter = 'contrast(117%) grayscale(100%)';
    page2.style.filter = 'contrast(125%) grayscale(100%)';
    toggle.checked = false;
});

function toggleColorMode() {
    if(page.style.filter == 'contrast(117%) grayscale(100%)') {
        page.style.filter = 'contrast(105%) grayscale(0)';
        page2.style.filter = 'contrast(105%) grayscale(0)';
    }else {
        page.style.filter = 'contrast(117%) grayscale(100%)';
        page2.style.filter = 'contrast(117%) grayscale(100%)';
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
    // let percentx = pageStyle.getPropertyValue('--percentX');
    // let percenty = pageStyle.getPropertyValue('--percentY');

    // let percentx2 = page2Style.getPropertyValue('--percentX');
    // let percenty2 = page2Style.getPropertyValue('--percentY');

    // let x = pageStyle.getPropertyValue('--x');
    // let y = pageStyle.getPropertyValue('--y');

    // let x2 = page2Style.getPropertyValue('--x');
    // let y2 = page2Style.getPropertyValue('--y');
  
    // page.style.setProperty('--x', (-e.offsetX / 100) + "px");
    // page.style.setProperty('--y', (-e.offsetY / 50) + "px");

    // page2.style.setProperty('--x', (-e.offsetX / 100) + "px");
    // page2.style.setProperty('--y', (-e.offsetY / 50) + "px");
    if(window.innerWidth >= 780) {
        page.style.transform = 'translate(' + (-e.offsetX / 147) + 'px, ' + (-e.offsetY / 45) + 'px)';
        page2.style.transform = 'translate(' + (-e.offsetX / 147) + 'px, ' + (-e.offsetY / 45) + 'px)';
    } else {
        page.style.transform = '';
        page2.style.transform = '';
    }   
});

//control blur on background

function addBlur() {
    page.style.transition = 'opacity 0.8s ease 0.5s';
    page.style.opacity = 0;
}

function removeBlur() {
    page.style.opacity = '1';
}