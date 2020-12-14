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