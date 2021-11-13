let text=document.getElementById("text");
let btn=document.getElementById("btn");

btn.addEventListener('click',hideText);

function hideText() {
text.style.visibility="hidden"
  console.log("button clicked")
}