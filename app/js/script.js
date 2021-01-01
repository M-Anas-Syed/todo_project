const theme = document.querySelector('.button');
const background = document.querySelector('.header__li');
const bgcolor = document.querySelector('.bgcolorli');
const a = document.querySelector('a');
const list = document.querySelector('#list');
const listinfo = document.querySelector('.lists__listinfo');
const options = document.querySelector('.options');
const listitems = document.querySelector('.lists__listitems');
const check = document.querySelector('#check');
const lc = document.querySelector('.lists__circle');
const comp = document.querySelector('.cc');
const act = document.querySelector('.active');
const lg = document.querySelector('.lists__grid');
const add = document.querySelector('.add');
const create = document.querySelector('.create');
const ct = document.querySelector('#createtodo');

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

function getDescendantElements(parent,child) {
	return [].slice.call(parent.getElementsByTagName(child));
}
function getClassDescendants(parent,child) {
	return [].slice.call(document.getElementById(child));
}

let x = getDescendantElements(list,'a');
const p = getClassDescendants(list,'check');
//const n = getDescendantElements(a,'div');
function getCards(parent,child) {
	return [].slice.call(parent.getElementsByClassName(child));
}

const cards = getCards(list,'bgboxcolourli');
const items = getCards(list,'lists__listitems');
// for(let i of x){
//     const n = i.getElementsByTagName('div');
//     i.addEventListener('click', function(){
//         if (i.classList.contains('bgcolour')){
//             i.classList.remove('bgcolour');
//             n[0].classList.remove('check');
//         }else{
//             i.classList.add('bgcolour');
//             n[0].classList.add('check');
//         }
//         // if(i.classList.contains('bgcolour')){
//         //     listitems.classList.add('completed_task');
//         // }else{
//         //     listitems.classList.remove('completed_task');
//         // }
        
//     });
// }

list.addEventListener('click',function(env){
    if(env.target.classList.contains('lists__circle')){
        env.target.classList.add('bgcolour');
        env.target.children[0].classList.add('check');
    } else if(env.target.id == 'check'){
        env.target.parentElement.classList.remove('bgcolour');
        env.target.classList.remove('check');
    }
})

const z = getCards(list,'bgboxcolourli');
comp.addEventListener('click', function(){
    for(let b of x){
        const parent = b.parentElement;
        if(b.classList.contains('bgcolour')){
            parent.remove();
        }
    }
})

const d = getDescendantElements(lg, 'a');
for(let elem of d){
    if(elem.classList.contains('active')){
        elem.addEventListener('click', function(){
            for(let a of x){
                const parent = a.parentElement;
                if(a.classList.contains('bgcolour')){
                    parent.style.display = 'none';
                }else{
                    parent.style.display = 'block';
                }
            }
        });
    }
    if(elem.classList.contains('completed')){
        elem.addEventListener('click', function(){
            for(let a of x){
                const parent = a.parentElement;
                if(!a.classList.contains('bgcolour')){
                    parent.style.display = 'none';
                }else{
                    parent.style.display = 'block';
                }
            }
        });
    }
    if(elem.classList.contains('all')){
        elem.addEventListener('click', function(){
            for(let h of x){
                const parent = h.parentElement;
                parent.style.display = 'block';
            }
        })
    }
}


theme.addEventListener('click', function(){
    for(let i of cards){
        if(i.classList.contains('bgboxcolourli')){
            i.classList.remove('bgboxcolourli');
            i.classList.add('bgboxcolourdk');
        }else{
            i.classList.remove('bgboxcolourdk');
            i.classList.add('bgboxcolourli');
        }
    }
    for(let b of items){
        if(b.classList.contains('fontcolourli')){
            b.classList.remove('fontcolourli');
            b.classList.add('fontcolourdk');
        }else{
            b.classList.remove('fontcolourdk');
            b.classList.add('fontcolourli');
        }
    }
    if(listinfo.classList.contains('bgboxcolourli')){
        listinfo.classList.remove('bgboxcolourli');
        listinfo.classList.add('bgboxcolourdk');
        options.classList.remove('bgboxcolourli');
        options.classList.add('bgboxcolourdk');
        add.classList.remove('bgboxcolourli');
        add.classList.add('bgboxcolourdk');
        create.classList.remove('bgboxcolourli');
        create.classList.add('bgboxcolourdk');

    } else{
        listinfo.classList.remove('bgboxcolourdk');
        listinfo.classList.add('bgboxcolourli');
        options.classList.remove('bgboxcolourdk');
        options.classList.add('bgboxcolourli');
        add.classList.remove('bgboxcolourdk');
        add.classList.add('bgboxcolourli');
        create.classList.remove('bgboxcolourdk');
        create.classList.add('bgboxcolourli');
    }
    
})

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

function addtodo(v){
    const elem = document.createElement('div');
    const link = document.createElement('a');
    const symbol = document.createElement('div');
    const text = document.createElement('div');

    elem.classList.add('bgboxcolourli');
    link.setAttribute('href','#');
    link.classList.add('lists__circle');
    symbol.setAttribute('id', 'check');
    text.classList.add('lists__listitems');

    text.innerHTML = v;

    link.appendChild(symbol);
    elem.appendChild(link);
    elem.appendChild(text);
    document.getElementById('list').appendChild(elem);
}

ct.addEventListener('click', function(){
    const inputVal = document.getElementsByClassName('create');
    addtodo(inputVal[0].value);
})