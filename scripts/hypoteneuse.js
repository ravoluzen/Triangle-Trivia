const base = document.querySelector("#base");
const perpendicular = document.querySelector("#perpendicular");
const calculate = document.querySelector("#calculate");
const result = document.querySelector("#result");

let hypo = 0;

function calculateHypo(){
    hypo = Math.sqrt((Math.pow(base.value, 2))+(Math.pow(perpendicular.value, 2)))

    result.innerText = "Value of the Hypoteneuse will be "+hypo+".";
}

calculate.addEventListener("click", calculateHypo);