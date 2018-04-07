const snake = document.getElementById('snake');
const apple = document.getElementById('apple');
const input = document.getElementById('helperInput');
const eye = document.getElementById('eye-up');
const eye_up = document.getElementById('eye-up');
const eye_down = document.getElementById('eye-down');
let speed=20;
let key, lastKey;

setInterval(()=>{
    input.focus();
},100);

getApple();
let i=0;
function startMove(event){
    key = event? event.which || event.keyCode:lastKey;
    if(i==0)
    setInterval(()=>{
        move(event);
    },100);
    i=1;
}

function move(event){
     
    //document.getElementById("test").innerHTML = "The Unicode KEY code is: " + key;
    if(key==37){ //left
        snake.style.left=parseInt(snake.style.left)-speed+'px';
        snake.style.transform="rotate(180deg)";
    }
    if(key==38){ //top
        snake.style.top=parseInt(snake.style.top)-speed+'px';
        snake.style.transform="rotate(270deg)";
    }
    if(key==39){ //right
        snake.style.left=parseInt(snake.style.left)+speed+'px';
        snake.style.transform="rotate(0deg)";
    }
    if(key==40){ //down
        snake.style.top=parseInt(snake.style.top)+speed+'px';
        snake.style.transform="rotate(90deg)";
    }
    if(key==37&&parseInt(snake.style.left)<0){
        snake.style.left=screen.width+'px';
    }
    if(key==38&&parseInt(snake.style.top)<0){
        snake.style.top=screen.height+'px';
    }
    if(key==39&&parseInt(snake.style.left)>screen.width){
        snake.style.left='0px';
    }
    if(key==40&&parseInt(snake.style.top)>screen.height){
        snake.style.top='0px';
    }
    if(key==81){ //Q
        speed+=5;
        document.getElementById("test").innerHTML = "High!";
        startMove();
    }
    if(key==65){ //A
        speed-=5;
        document.getElementById("test").innerHTML = "Low!";
        startMove();
    }
    if(speed<=0){
        speed=2;
    }
    if(speed>=150){
        speed=150;
    }
    checkTouch();   
    //console.log("Snake",snakeDim.top, snakeDim.right, snakeDim.bottom, snakeDim.left);
    //console.log("Apple",appleDim.top, appleDim.right, appleDim.bottom, appleDim.left);
    lastKey=key;
}


function getApple(){
    apple.style.left=Math.floor(Math.random() * (screen.width-200 - 0 + 1)) + 0 +'px';
    apple.style.top=Math.floor(Math.random() * (screen.height-200 - 0 + 1)) + 0 +'px';
}

function checkTouch(){
    let appleDim = apple.getBoundingClientRect(); //appleDim.top, appleDim.right, appleDim.bottom, appleDim.left
    let eyeDim= eye.getBoundingClientRect();

    if((eyeDim.left<appleDim.left+50&&eyeDim.left>appleDim.left-50)
        &&(eyeDim.top<appleDim.top+50&&eyeDim.top>appleDim.top-50)
        ) {
            getApple();
            snake.style.width=parseInt(snake.style.width)+10+'px';
            console.log(snake.style.width);
            setTimeout(()=>{
                eye_up.classList.remove('eye-normal');
                eye_up.classList.add('eye-big');
                eye_down.classList.remove('eye-normal');
                eye_down.classList.add('eye-big');
            },200);
            setTimeout(()=>{
                eye_up.classList.add('eye-normal');
                eye_up.classList.remove('eye-big');
                eye_down.classList.add('eye-normal');
                eye_down.classList.remove('eye-big');
            },2000);
    }
    // document.getElementById("test").innerHTML =`Apple left:${appleDim.left}, Apple top:${appleDim.top}`
    // console.log('Eye left:', eyeDim.left);
    // console.log('Eye top:', eyeDim.top);
}