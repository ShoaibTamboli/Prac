let btnblue=document.getElementById("btnblue");
let btngreen=document.getElementById("btngreen");
let btnred=document.getElementById("btnred");
let textbox=document.getElementById("text");

btnred.addEventListener('click', red)

function red() {
    textbox.style.color='red';
// console.log(textbox)
}

btnblue.addEventListener('click', blue)

function blue() {
    textbox.style.color='blue';
// console.log(textbox)
}

btngreen.addEventListener('click', green)

function green() {
    textbox.style.color='green';
// console.log(textbox)
}