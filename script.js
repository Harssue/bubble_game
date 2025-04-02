var timer = 60;
var score = 0;
var hitrn = 0;
var clickSound = new Audio("pop.mp3");
var gameoverSound = new Audio("gameover.mp3");

function MakeBubble(){
    var clutter = "";

    for (var i=1; i<=270; i++){
        rn = Math.floor(Math.random()*10);
        clutter+=`<div class="bubble">${rn}</div>`;
    }
    
    document.querySelector("#pbtm").innerHTML = clutter;
}

function RunTimer(){
    var timerint = setInterval(function(){
        if (timer>0){
            timer--;
            document.querySelector("#timeInterval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            gameoverSound.play();
            document.querySelector("#pbtm").innerHTML = `<h1 class = "gameover"> Game Over ! <br> Your Final Score is: ${score} </h1>`;
        }
    },1000);
}

function NewHit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hitrn;
}

function Score(){
    score+=10;
    document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#pbtm").addEventListener("click",function(dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum===hitrn){
        clickSound.play();
        Score();
        MakeBubble();
        NewHit();
    }
});

MakeBubble();
RunTimer();
NewHit();