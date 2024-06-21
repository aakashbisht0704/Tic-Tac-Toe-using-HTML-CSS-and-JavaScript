let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-game-btn");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg")

let turnO = true; // if true --> player O && if false --> X

let win = false;

let count = 0;

let winnerArray = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame = () =>{
    turnO = true;
    count = 0
    enableBoxes();
    for(let box of boxes){
        box.innerText = "";
        msgcontainer.classList.add("hide");
    }
}

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{

        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        count++
        console.log(count)

        checkWinner();
    })
})

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const showTie = () =>{
    msg.innerText = `Oops, it's a TIE!`
    msgcontainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner= () =>{
    for(let patterns of winnerArray){
        let pos1Value = boxes[patterns[0]].innerText;
        let pos2Value = boxes[patterns[1]].innerText;
        let pos3Value = boxes[patterns[2]].innerText;

        if(pos1Value != "" && pos2Value != "" && pos3Value != ""){
            if(pos1Value === pos2Value && pos2Value === pos3Value){
                winner = true
                console.log("Winner!", pos1Value);
                showWinner(pos1Value);
            }
            else if(count == 9 && win == false){
                console.log("L");
                showTie();
            }
        }
    }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);