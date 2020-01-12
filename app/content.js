// add mousemove tracking to contents

window.addEventListener('load', function() {
    content.forEach(function(contents) {
        if(contents.classList.contains('work-display') || contents.classList.contains('bio-content') || contents.classList.contains('email-content')) {
            contents.addEventListener('mousemove', function(e) {
                if(window.innerWidth > 780) {
                    contents.style.transition = 'transform 0.1s linear !important';
                    contents.style.transform = 'perspective(calc(110vw + ' + (e.offsetX / 60) + 'px)) rotateY(calc(17deg + ' + ((Math.pow(e.offsetX, 0.5)) / 8) + 'deg)) rotateX(calc(-4deg + ' + ((Math.pow(e.offsetY, 0.5)) / 6) + 'deg)) translate(0) translateZ(0)';
                } else {
                    contents.style.transform = '';
                }  
            });

            window.addEventListener('resize', function() {
                if(window.innerWidth <= 780) {
                    contents.style.transform = '';
                } else {
                    contents.style.transition = 'transform 0.1s linear !important';
                    contents.style.transform = 'perspective(calc(110vw + ' + (e.offsetX / 60) + 'px)) rotateY(calc(17deg + ' + ((Math.pow(e.offsetX, 0.5)) / 8) + 'deg)) rotateX(calc(-4deg + ' + ((Math.pow(e.offsetY, 0.5)) / 6) + 'deg)) translate(0) translateZ(0)';
                }
            });

        }    
    })
})

// fade between contents

function addFade(index) {
    content[index].classList.add('z-index');
    if ((index > 1) && (index < 7)) {
        video[index].classList.add('video-swipe');
        video[index].setAttribute('autoplay', 'autoplay');
    }    
    if (content[index].classList.contains('back')) {
        content[index].classList.remove('back');
        content[index].classList.add('front');
    }
}

function addTextAnimation(index) {
    let textDiv = [...content[index].querySelectorAll('.text-div')];

    textDiv.forEach(function(text) {       
        setTimeout(function() {
            text.style.transform = 'translateY(10px)';
            text.style.transition = 'transform 0.3s ease';
        }, timerLeft);
        timerLeft += 100;
    })
    timerLeft = 100;
}

function addFormAnimation(index) {
    let formDiv = [...content[index].querySelectorAll('.form-div')];

    formDiv.forEach(function(input) {       
        setTimeout(function() {
            input.style.transform = 'translateY(10px)';
            input.style.transition = 'transform 0.3s ease';
        }, timerLeft);
        timerLeft += 100;
    })
    timerLeft = 100;
}

function removeTextAnimation() {
    let docTextDiv = [...document.querySelectorAll('.text-div')];

    docTextDiv.forEach(function(text) {
        text.style.transform = 'translateY(0px)';
        text.style.transition = 'transform 0.1s ease';
    })
}

function removeFormAnimation() {
    let docFormDiv = [...document.querySelectorAll('.form-div')];

    docFormDiv.forEach(function(input) {
        input.style.transform = 'translateY(0px)';
        input.style.transition = 'transform 0.1s ease';
    })
}

function fadeForm() {
    let docFormDiv = [...document.querySelectorAll('.form-div')];
    let title = document.getElementById('contact-title');
    let note = document.getElementById('note');

    title.style.transform = 'translateY(-100px)';
    title.style.opacity = 0;
    title.style.transition = 'transform 0.5s ease, opacity 0.3s ease 0.3s';

    docFormDiv.forEach(function(input) {       
        setTimeout(function() {
            input.style.transform = 'translateY(-100px)';
            input.style.opacity = 0;
            input.style.transition = 'transform 0.5s ease, opacity 0.3s ease 0.3s';
        }, timerLeft);
        timerLeft += 100;
    })
    timerLeft = 100;

    note.style.opacity = 1;
    note.style.transition = 'opacity 0.4s ease 0.8s';
}

function unfadeForm() {
    let docFormDiv = [...document.querySelectorAll('.form-div')];
    let title = document.getElementById('contact-title');
    let note = document.getElementById('note');

    title.style.transform = 'translateY(0px)';
    title.style.opacity = 1;
    title.style.transition = 'transform 0.5s ease, opacity 0.3s ease 0.3s';

    note.style.opacity = 0;
    note.style.transition = 'opacity 0.4s ease 0.8s';

    docFormDiv.forEach(function(input) {       
        setTimeout(function() {
            input.style.transform = 'translateY(0px)';
            input.style.opacity = 1;
            input.style.transition = 'transform 0.5s ease, opacity 0.3s ease 0.3s';
        }, timerLeft);
        timerLeft += 100;
    })
    timerLeft = 100;
}

function submitForm() {
    fadeForm()
    return true;
}

function removeFade(index) {
    if(content[index].classList.contains('front')) {
        content[index].classList.remove('front');
        content[index].classList.add('back');
        setTimeout(function() {
            removeTextAnimation();
            removeFormAnimation();
        }, 500);
    }
    if ((index > 1) && (index < 7)) {
        video[index].classList.remove('video-swipe');
        video[index].removeAttribute('autoplay');
    }
}

// show 'back to works section' button

function makeButtonVisible() {
    backButton.classList.remove('back');
    backButton.classList.add('front');
    backButton.classList.add('button-z-index');
}

function makeButtonInvisible() {
    backButton.classList.remove('front');
    backButton.classList.remove('button-z-index');
    backButton.classList.add('back');
}
