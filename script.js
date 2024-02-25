let winSec = document.querySelector(".win-msg-sec");
let winTag = document.querySelector("#winner-tag");
let newGameButton = document.querySelector("#new-game-btn");
let playAgain = document.querySelector("#play-again-btn");
let drawSec = document.querySelector(".draw-msg-sec");
let drawTag = document.querySelector("#draw-tag");
let gridSec = document.querySelector("#grid-cover");
let boxes = document.querySelectorAll(".box");
const reset = document.querySelector("#reset-btn");
console.log(drawSec);
console.log(winSec);

const win = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
];

let winner=false;

const checkWinner = () => {
    for(let i=0; i<win.length; i++){
        let option1 = boxes[win[i][0]].innerHTML;
        let option2 = boxes[win[i][1]].innerHTML;
        let option3 = boxes[win[i][2]].innerHTML;
    
        if (option1!=""||option2!=""||option3!="") {
            if(option1===option2 && option2===option3){
                winTag.innerHTML=`CONGRATULATIONS! WINNER IS PLAYER ${option1}`;
                winner=true;
                gridSec.classList.add("grid-cover-invisible");
                winSec.classList.add("win-msg-visible");
                winSec.classList.remove("win-msg-sec");
            }
        }
        
    }
}



let count=0;
playerX=true;


boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        if (playerX) {
            box.innerHTML ="X";
            box.classList.add("player-x");
            playerX=false;
        }
        else {
            box.innerHTML="O";
            box.classList.add("player-o");
            playerX=true;

        }
        box.disabled =true;

        checkWinner();

        count ++;
        if(count==9){
            if(winner==false){
                gridSec.classList.add("grid-cover-invisible");
                drawTag.innerHTML="MATCH DRAW, TRY AGAIN";
                drawSec.classList.add("draw-msg-visible");
                drawSec.classList.remove("draw-msg-sec");
            }  
        }
    })
    
})


reset.addEventListener("click", () => {
    window.location.reload();
})
newGameButton.addEventListener("click", () => {
    window.location.reload();
})
playAgain.addEventListener("click", () => {
    window.location.reload();
})



