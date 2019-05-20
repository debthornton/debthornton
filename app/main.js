// document elements

let nav = document.querySelector('nav');
let header = document.querySelector('header');
let page = document.querySelector('#background');
let page2 = document.querySelector('#background-2');
let content = [...document.querySelectorAll('.content')];
let footer = document.querySelector('footer');

// buttons

let backButton = document.querySelector('#back-button');
let worksButton = [...document.querySelectorAll('.works-button')];
let buttons = [...document.querySelectorAll('button')];

// get button from each nav-item

let navItem = []; 

Array.prototype.forEach.call(document.querySelectorAll('.nav-item'), el => {
    navItem.push(el.querySelector('button'));
});

// get video from each work-display

let video = [];

content.forEach(function(contents) {
    video.push(contents.querySelector('video'));
});

// animation timers

let timerLeft = 100;
let timerRight = 100;

// background page stlyes

let pageStyle = window.getComputedStyle(page);
let page2Style = window.getComputedStyle(page2);

// main control of content

function changeContent(index) {

    buttons.forEach(function(button) {
        button.style.pointerEvents = 'none';
        setTimeout(function() {
            button.style.pointerEvents = 'auto';
        }, 2000);
    });

    switch(index) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            addBlur();
            navSwipe();
            navActive(1);
            navInactive(0);
            navInactive(2);
            break;
        case 8:
            addBlur();
            navSwipe();
            navActive(2);
            navInactive(0);
            navInactive(1);
            setTimeout(function() {
                addTextAnimation(index);
            }, 1300);
            break;
        default:
            reverseNavSwipe();
            removeBlur();
            if ((navItem[1].classList.contains('active-nav')) || (navItem[2].classList.contains('active-nav'))) {
                navActive(0);
                navInactive(1);
                navInactive(2);
            } 
    }

    switch(index) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
            setTimeout(function() {
                makeButtonVisible();
                addTextAnimation(index);
            }, 1300);         
            break;
        default:
            makeButtonInvisible();
    }

    if(index === 1) {
        worksButton.forEach(function(button) {

            if(worksButton.indexOf(button) % 2 === 0) {
                setTimeout(function() {
                    button.classList.add('button-left');
                }, timerLeft);
                timerLeft += 100;
                setTimeout(function() {
                    button.classList.remove('button-left');
                }, 2500);
            }
            if((worksButton.indexOf(button) % 2 !== 0) && (worksButton.indexOf(button) !== 0)) {
                setTimeout(function() {
                    button.classList.add('button-right');
                }, timerRight);
                timerRight += 100;
                setTimeout(function() {
                    button.classList.remove('button-right');
                }, 2500);
            }
        });
        timerLeft = 100;
        timerRight = 100;
    }

    if (header.classList.contains('z-index')) {
        header.classList.remove('z-index');
    }
    
    content.forEach(function(contents) {        
        if (index === content.indexOf(contents)) {
            setTimeout(function() {
                addFade(index);
            }, 1300);
            
        } else {
            removeFade(content.indexOf(contents));
            setTimeout(function() {
                content[content.indexOf(contents)].classList.remove('z-index');
                }, 1000); 
        }
        
    });
}

// browswer viewport accomodations

function heightChange() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

window.addEventListener('load', () => {
    heightChange();
  });

window.addEventListener('resize', () => {  
    setTimeout( () => {
        heightChange();
    }, 300)
  });