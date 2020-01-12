// nav/footer rotation animations

function navSwipe() {
    if(nav.classList.contains('reverse-nav-swipe')) {
        nav.classList.remove('reverse-nav-swipe');
        footer.classList.remove('reverse-footer-swipe');
    }
    nav.classList.add('nav-swipe');
    footer.classList.add('footer-swipe');

    setTimeout(function() {
        nav.style.transform = 'translate(15px)';
        footer.style.transform = 'translate(-15px)';
        trackNavFooter();
    }, 500);
}

function reverseNavSwipe() {
    if(nav.classList.contains('nav-swipe')) {
        nav.classList.remove('nav-swipe');
        footer.classList.remove('footer-swipe');

        nav.classList.add('reverse-nav-swipe');
        footer.classList.add('reverse-footer-swipe');

        setTimeout(function() {
            nav.style.transform = 'translate(0px) rotate(90deg)';
            footer.style.transform = 'translate(0px) rotate(-90deg)';
            trackNavFooter();
        }, 500);
    }
}

function trackNavFooter() {
    if(window.innerWidth >= 1024) {
        if (footer.classList.contains('footer-swipe')) {
            footer.style.transform = 'translate(-6vw)';
            nav.style.transform = 'translate(3vw)';
        } else {
            nav.style.transform = 'translate(0px) rotate(90deg)';
            footer.style.transform = 'translate(0px) rotate(-90deg)';
        }      
    } else {
        if (footer.classList.contains('footer-swipe')) {
            footer.style.transform = 'translate(-15px)';
            nav.style.transform = 'translate(15px)';
        } else {
            footer.style.transform = 'translate(0)';
            nav.style.transform = 'translate(0)';
        }       
    }
}

// nav-item class control

function navActive(index) {
    if (navItem[index].classList.contains('inactive-nav')) {
        navItem[index].classList.remove('inactive-nav');
        navItem[index].classList.add('active-nav');
    }
}
navActive(0);

function navInactive(index) {
    navItem[index].classList.remove('active-nav');
    navItem[index].classList.add('inactive-nav');
}

function emailActive() {
    emailButton.classList.remove('inactive-nav');
    emailButton.classList.add('active-nav');
}

function emailInactive() {
    emailButton.classList.remove('active-nav');
    emailButton.classList.add('inactive-nav');
}

//active nav/footer styles tracking

window.addEventListener('resize', function() {
    trackNavFooter();
});