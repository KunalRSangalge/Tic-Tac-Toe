let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".resetbtn");
let newGamebtn = document.querySelector(".newbtn");
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg");
let turnx = true;

const winpattern = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetgame = () => {
    enableboxes();
    turnx = true;
    msgcontainer.classList.add("hide");
}

const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
        // box.innerText = "";
    }
}
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnx){
            box.innerText = "X";
            turnx = false;
            box.style.color = "red";
        }
        else{
            box.innerText = "O";
            turnx=true;
            box.style.color = "blue";
        }
        box.disabled=true;
        checkWinner();
    })
})

const showinner = (winner) => {
    msgcontainer.classList.remove("hide");
    msg.innerText = `Congratulations, ${winner} is the Winner`;
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

const checkWinner = () => {
    for(let pattern of winpattern){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("Winner is: ",pos1);
                showinner(pos1);
                disableboxes();
            }
        }
    }
}

resetbtn.addEventListener("click", resetgame);
newGamebtn.addEventListener("click", resetgame);

 