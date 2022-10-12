const inputBtn = document.querySelector("#inputBtn")
const form = document.querySelector(".form")
const outputBox = document.querySelector(".outputBox")

form.addEventListener("submit", clickHandler)


const rightAnswer = ["3",
    "scalene",
    "3",
    "isosceles",
    "equilateral",
    "Equilateral triangle",
    "Pythagoras",
    "Polygon",
    "2",
    "false"
];

function clickHandler(event) {
    event.preventDefault();
    let score = 0;
    let i = 0;
    const results = new FormData(form);
    for (let value of results.values()) {
        if (value === rightAnswer[i]) {
            score = score + 1;
        }
        i = i + 1

    }
    console.log(score)
    outputBox.innerText = `Your score is ${score}.`
}
