let numberone = document.getElementById("inputone");
let numbertwo = document.getElementById("inputtwo");

let btnadd = document.getElementById("add");
let btnsubtract = document.getElementById("subtract");
let btnmultiply = document.getElementById("multiply");
let btndivide = document.getElementById("divide");
let result = document.getElementById("result");

btnadd.addEventListener('click', addition)

function addition() {
  let sum = parseInt(numberone.value) + parseInt(numbertwo.value);

  result.innerText = sum;
  console.log(sum)
}

btnmultiply.addEventListener('click', multiply)

function multiply() {
  let multiply = parseInt(numberone.value) * parseInt(numbertwo.value);

  result.innerText = multiply;
  console.log(multiply)
}

btnsubtract.addEventListener('click', subtract)

function subtract() {
  let subtract = parseInt(numberone.value) - parseInt(numbertwo.value);

  result.innerText = subtract;
  console.log(subtract)
}

btndivide.addEventListener('click', divide)

function divide() {
  let divide = parseInt(numberone.value) / parseInt(numbertwo.value);

  result.innerText = divide;
  console.log(divide)
}