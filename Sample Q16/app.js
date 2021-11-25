const btn = document.querySelector("#btn")
const outPut = document.querySelector("#output")

var obj1={
    name:"ram",
    power:2500,
    yuga:"Treta"
}
var obj2 = {
         name: "krishna",
        power: 2325,
       yuga: "Dwapar"
     }
     

    //  if(aa>bb){
    //   outPut.innerText = obj1.name
    //  }else{
    //   outPut.innerText = obj2.name
    //  }
        
    //     // console.log(obj1.name);
    //  console.log(aa)
    //  console.log(bb)

    //  console.log(typeof(obj2.power))
    //  console.log(typeof(obj1.power))



 function checkPower(obj1, obj2) {
   if (obj1.power > obj2.power) {
       outPut.innerText = obj1.name
       console.log(obj1.name)
   } else {
        outPut.innerText = obj2.name
        console.log(obj2.name)
   }
}
function totalPower (obj1,obj2) {
     var totalPowerObj1 = obj1.power + obj1.name.length*35   ;
     var totalPowerObj2 = obj2.power + obj2.name.length*35  ;

     if (totalPowerObj1>totalPowerObj2) {
         outPut.innerText = obj1.name ;

     }else{
         outPut.innerText = obj2.name
     }
 }

 function checkCharacter(obj1, obj2) {
     if (obj1.name.length * 35 > obj2.name.length * 35) {
         outPut.innerText = obj1.name
          console.log(obj1.name);

     } else {
         outPut.innerText = obj2.name
          console.log(obj2.name);

     }
 }
console.log(checkPower (obj1,obj2)  );
btn.addEventListener("click", function () { totalPower(obj1, obj2)
  console.log("Click")
 })