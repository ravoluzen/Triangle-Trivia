const firstAngle = document.querySelector("#first-angle");
const secondAngle = document.querySelector("#second-angle");
const thirdAngle = document.querySelector("#third-angle");
const checkButton = document.querySelector("#check");
const result = document.querySelector("#result");

function triangleCheck(){
    console.log("working");
    if((firstAngle.value + secondAngle.value + thirdAngle.value) === 180){
        result.innerText = "Yes! These angles can form a triangle! :)";
    }else{
        result.innerText = "Oops! These angles can't form a triangle. :(";
    }
}

checkButton.addEventListener("click", triangleCheck);
