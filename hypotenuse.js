let getNumber = document.querySelectorAll(".side-input");
let buttonHandler = document.querySelector("#hypotenuse-btn");
let getOutput = document.querySelector("#output");

function CalculateSumOfSquares( a , b ){
let sumOfSquare = a*a + b*b ;

return sumOfSquare;
}
function calculateHypotenues(){
let sumOfSquare = CalculateSumOfSquares(Number(getNumber[0].value) , Number(getNumber[1].value));
let lengthOfhypotenues = Math.sqrt(sumOfSquare);
getOutput.innerText = "The lenght of hypotenuse is" + lengthOfhypotenues; 
}


buttonHandler.addEventListener("click", calculateHypotenues);











