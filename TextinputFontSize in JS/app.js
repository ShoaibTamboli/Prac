var inputtext=document.querySelector("#Text");

var btnincrease=document.querySelector("#increase");
var btndecrease=document.querySelector("#decrease");
let textsize=14 ;
btnincrease.addEventListener('click',increase)


function increase () {
    
    textsize=textsize+2;
inputtext.style.fontSize=`${textsize}px`;

console.log("text")
    // var result=inputtext.value
    // console.log(result)
    
}


btndecrease.addEventListener('click',decrease)


function decrease () {
    
    textsize=textsize-2;
inputtext.style.fontSize=`${textsize}px`;

console.log("text")
    // var result=inputtext.value
    // console.log(result)
    
}