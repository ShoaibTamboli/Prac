let inputtext=document.getElementById("text");
let h1=document.getElementById("h1");
let h2=document.getElementById("h2");
let h3=document.getElementById("h3");

let output=document.querySelector(".showoutput");


let textsize= 5;
h1.addEventListener('click', heading1)

function heading1() {
    textsize=28;
    inputtext.style.fontSize=`${textsize}px`;
   
    let result= inputtext.value;
    
output.innerText=result;

}  


h2.addEventListener('click', heading2)
function heading2() {
    textsize=24;
    inputtext.style.fontSize=`${textsize}px`;
   
    let result= inputtext.value;
    
output.innerText=result;

}  

h3.addEventListener('click', heading3)
function heading3() {
    textsize=18.2;
    inputtext.style.fontSize=`${textsize}px`;
   
    let result= inputtext.value;
    
output.innerText=result;

}  