var bigimgBox=document.getElementById("bigimgBox");
var bigimg=document.getElementById("bigImg");


function openBigImg(pick){
    bigimgBox.style.display="flex";
    bigimg.src=pick;
}

function closeBigImg(){
    bigimgBox.style.display="none";
}