const snake = document.getElementById('snake');
const input = document.getElementById('helperInput');
let speed=20;

setInterval(()=>{
    input.focus();
},50);

function move(event){
    var key = event.which || event.keyCode; 
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
        snake.style.left='1200px';
    }
    if(key==38&&parseInt(snake.style.top)<0){
        snake.style.top='650px';
    }
    if(key==39&&parseInt(snake.style.left)>1200){
        snake.style.left='0px';
    }
    if(key==40&&parseInt(snake.style.top)>650){
        snake.style.top='0px';
    }
    if(key==81){ //Q
        speed+=5;
        document.getElementById("test").innerHTML = "High!";
    }
    if(key==65){ //A
        speed-=5;
        document.getElementById("test").innerHTML = "Low!";
    }
    if(speed<=0){
        speed=2;
    }
    if(speed>=150){
        speed=150;
    }
    console.log(key);
}
