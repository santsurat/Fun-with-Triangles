const angles = document.querySelectorAll('.angle-input');
const isTriangleBtn = document.querySelector('#is-triangle-btn');
const isTriangleOutput = document.querySelector('#is-triangle-output');
// var errorBox = document.querySelector("#errorBox");

function play() {
	var angleOne = Number(angles[0].value);
    var angleTwo = Number(angles[1].value);
    var angleThree = Number(angles[2].value);

    calculate(angleOne, angleTwo, angleThree)

}

function calculate(anOne, anTwo, anThree) {

    if (anOne > 0 && anTwo > 0 && anThree > 0) {
        var calculateSumOfAngles = anThree + anTwo + anOne;
        if (calculateSumOfAngles === 180) {
            isTriangleOutput.innerText = "Hurrah! Entered Angles make Triangle"
        } else {
            isTriangleOutput.innerText = "Sadly ! Entered Angles doesn't make any Triangle."
        }
    } else isTriangleOutput.innerText = "All input angles should be greater than zero"

}
isTriangleBtn.addEventListener('click', play);