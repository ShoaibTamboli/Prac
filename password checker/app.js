let password=document.getElementById("password");
let repassword=document.getElementById("repassword");
let btn=document.getElementById("btn")
let msg=document.getElementById("msg");
let lengthmsg=document.getElementById("lengthmsg")


password.addEventListener('input', passwordvalidate)


function passwordvalidate() {
var passlength=password.value.length;

    if(passlength>10){
        password.style.color="green"
      
        btn.disabled=false;
        lengthmsg.innerText="Strong password"
        lengthmsg.style.color="DarkGreen"
    }else{
        password.style.color="red"
      
        btn.disabled=true;
        lengthmsg.innerText="password length must be atleast 10 characters long."
        lengthmsg.style.color="Red"
    }

  
}

btn.addEventListener('click', validatepassword)

function validatepassword() {
    if (password.value===repassword.value) {
        console.log("password matched");
        msg.innerText="password matched";
        msg.style.backgroundColor="green"

    } else{
       alert("password mis-matched")
        msg.innerText="password mis-matched";
        lengthmsg.style.visibility="hidden"
        msg.style.backgroundColor="red"
    }
}