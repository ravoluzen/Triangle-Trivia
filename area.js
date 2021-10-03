const sideA = document.querySelector("#a");
const sideB = document.querySelector("#b");
const sideC = document.querySelector("#c");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

function triangleArea(){
    a = Number(sideA.value);
    b = Number(sideB.value);
    c = Number(sideC.value);

    const s = (a + b + c)/2;

    const area = Math.sqrt(s*(s-a)*(s-b)*(s-c)).toFixed(4);

    result.innerText = "The area of the triangle using Heron's formula is "+area+".";
}

calculate.addEventListener("click", triangleArea);