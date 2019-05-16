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

function removeTextAnimation() {
    let docTextDiv = [...document.querySelectorAll('.text-div')];

    docTextDiv.forEach(function(text) {
        text.style.transform = 'translateY(0px)';
        text.style.transition = 'transform 0.1s ease';
    })
}

function removeFade(index) {
    if(content[index].classList.contains('front')) {
        content[index].classList.remove('front');
        content[index].classList.add('back');
    }
    if ((index > 1) && (index < 7)) {
        video[index].classList.remove('video-swipe');
        video[index].removeAttribute('autoplay');
    }
    removeTextAnimation(); 
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

function contentMovement() {
    setTimeout(function() {
        content.forEach(function(contents) {
            if(window.innerWidth > 780) {
                if(contents.classList.contains('front') && (contents.classList.contains('work-display') || contents.classList.contains('bio-content'))) {
                    contents.addEventListener('mousemove', function(e) {
                        if(window.innerWidth > 780) {
                            contents.style.transition = 'transform 0.1s linear !important';
                            contents.style.transform = 'perspective(calc(110vw + ' + (e.offsetX / 60) + 'px)) rotateY(calc(17deg + ' + ((Math.pow(e.offsetX, 0.5)) / 3) + 'deg)) rotateX(calc(-4deg + ' + ((Math.pow(e.offsetY, 0.5)) / 3) + 'deg)) translate(0) translateZ(0)';
                        } else {
                            contents.style.transform = '';
                        }                       
                    });
                    
                    window.addEventListener('resize', function() {
                        if(window.innerWidth <= 780) {
                            contents.style.transform = '';
                        } else {
                            contents.style.transition = 'transform 0.1s linear !important';
                            contents.style.transform = 'perspective(calc(110vw + ' + (e.offsetX / 60) + 'px)) rotateY(calc(17deg + ' + ((Math.pow(e.offsetX, 0.5)) / 3) + 'deg)) rotateX(calc(-4deg + ' + ((Math.pow(e.offsetY, 0.5)) / 3) + 'deg)) translate(0) translateZ(0)';
                        }
                    });
                }
            } 
            else {
                contents.style.transform = '';
            }   
        });
    }, 1500)  
}

function videoControls() {
    if(window.innerWidth <= 780) {
        video.forEach(function(vid) {
            vid.setAttribute('controls');
        })
    }
}

