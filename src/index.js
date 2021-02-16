import "./style.sass";

let mark = "X";

const resetButton = document.querySelector(".reset-button");
const yourTurn = document.querySelector(".grid__turn");

yourTurn.innerText = mark;

let gameMatrix = [
    "", "","",
    "", "","",
    "", "","",
];

const changeGameMatrix = (cell) => {
    gameMatrix[cell] = mark;
    console.log(gameMatrix);
}

const gameCheck = () => {
    let notEmpySpans = 0;
    // const spans = document.querySelectorAll (".grid__value");
    gameMatrix.forEach(elem => {
        if (elem !== ""){
            notEmpySpans += 1;
        }
    })
    const[
        x1y1, x1y2, x1y3,
        x2y1, x2y2, x2y3,
        x3y1, x3y2, x3y3,
    ] = gameMatrix;

    if (
        x1y1 === x1y2 && x1y1 === x1y3 && x1y1 !== "" ||
        x2y1 === x2y2 && x2y1 === x2y3 && x2y1 !== "" ||
        x3y1 === x3y2 && x3y1 === x3y3 && x3y1 !== "" ||
        x1y1 === x2y1 && x1y1 === x3y1 && x1y1 !== "" ||
        x1y2 === x2y2 && x1y2 === x3y2 && x1y2 !== "" ||
        x1y3 === x2y3 && x1y3 === x3y3 && x1y3 !== "" ||
        x1y1 === x2y2 && x1y1 === x3y3 && x1y1 !== "" ||
        x3y1 === x2y2 && x3y1 === x1y3 && x3y1 !== ""
    
    ){
        const response = confirm(`Win ${mark}! Do you want start new game?`)
        response && reset()
        return    
    }
    if (notEmpySpans >= 9){
        const response = confirm("Draw mazafaka!")
        response && reset()
        return 
    };
    if (mark === "X"){
        mark = "O";
        yourTurn.innerText = mark;
    } else {
        mark = "X";
        yourTurn.innerText = mark;
    }
}

const onCellClick = (event) => {
    let span;
    if (event.target.nodeName === "SPAN"){
        span = event.target;
    } else {
        span = event.target.querySelector(".grid__value");
    };
    
    //if (span.innerText !== "") return;
    changeGameMatrix(span.dataset.cell);

    if (span.innerText === ""){
        span.innerHTML = mark;
    }
    setTimeout(() => gameCheck());
};

const reset = () => {
    gameMatrix = gameMatrix.map(item => "")
    let spans = document.querySelectorAll(".grid__value");
    spans.forEach(span => span.innerText ="")
    mark = "X"
    yourTurn.innerText = mark
};

const cellButtons = document.querySelectorAll(`.grid__cell`);

cellButtons.forEach(button => button.addEventListener("click", onCellClick))

resetButton.addEventListener("click", () => reset())

