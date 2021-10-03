const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const checkButton = document.querySelector("#check");
const result = document.querySelector("#result");

function triangleCheck(){
    console.log("working");
    angleOne = Number(firstAngle.value);
    angleTwo = Number(secondAngle.value);
    angleThree = Number(thirdAngle.value);

    const angleSum = angleOne + angleTwo + angleThree;

    if(angleSum == 180){
        result.innerText = "Yes! These angles can form a triangle! :)";
    }else{
        result.innerText = "Oops! These angles can't form a triangle. :(";
    }
    console.log(angleSum);
}

checkButton.addEventListener("click", triangleCheck);
