let landingPage = document.querySelector('#landing-page');
let landingHeadline = document.querySelector('#landing-headline');
let landingHeadlineLetters =[...landingHeadline.querySelectorAll('span')];
let landingHeadlineTimer = 0.3;

function letterAnimation() {
    landingHeadlineLetters.forEach(function(letter) {
        letter.style.animation = 'fade-in 2.2s forwards ease ' + landingHeadlineTimer + 's'
        landingHeadlineTimer += 0.3;
    });
    landingHeadlineTimer = 0.3;

    setTimeout(function(){
        landingPage.style.display = 'none';
    }, 4800);
}

window.addEventListener('load', function() {
    letterAnimation();
});

