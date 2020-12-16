const theme = document.querySelector('.button');
const background = document.querySelector('.header__li')
const bgcolor = document.querySelector('.bgcolorli');

theme.addEventListener('click', function(){
    if(theme.classList.contains('switch')){
        theme.classList.remove('switch');
        theme.classList.add('button');
        background.classList.remove('header__dk');
        background.classList.add('header__li');
        bgcolor.classList.remove('bgcolordk');
        bgcolor.classList.add('bgcolorli');
    } else{
        theme.classList.remove('button');
        theme.classList.add('switch');
        background.classList.remove('header__li');
        background.classList.add('header__dk');
        bgcolor.classList.remove('bgcolorli');
        bgcolor.classList.add('bgcolordk');
    }
});

function fadeOut(element) {
    var opacity = 1;
    function decrease () {
        opacity -= 0.025;
        if (opacity <= 0){
            // complete
            element.style.opacity = 0;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(decrease);
    }
    decrease();
}
function fadeIn(element) {
    var opacity = 0;
    function increase () {
        opacity += 0.025;
        if (opacity >= 1){
            // complete
            element.style.opacity = 1;
            return true;
        }
        element.style.opacity = opacity;
        requestAnimationFrame(increase);
    }
    increase();
}


theme.addEventListener('click', function(){
    fadeOut(theme);
    fadeOut(background);
    fadeIn(theme);
    fadeIn(background);
});