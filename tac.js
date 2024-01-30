let boxexs = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let container = document.querySelector(".head");
let mesg = document.querySelector("#mesg")
let turnO = true;

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8],

];

const resetGame = () => {
  turnO = true;
  enableboxes();
  container.classList.add("hide")
};



boxexs.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO) {
            box.innerText = "O";
            turnO = false;

        } else {
            box.innerText = "X";
            turnO = true;

        }
        box.disabled = true;
        checkWinner();
    })

});

const disableboxes = () => {
    for(let box of boxexs){
      box.disabled = true;

    }
};
    
    const enableboxes = () => {
        for(let box of boxexs){
          box.disabled = false;
          box.innerText = "";
        }

};
const showWinner = (winner) => {
    mesg.innerText = `congratulations Winner is ${winner}`
    container.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1val = boxexs[pattern[0]].innerText;
        let pos2val = boxexs[pattern[1]].innerText;
        let pos3val = boxexs[pattern[2]].innerText;
        if (pos1val !== "" && pos2val !== "" && pos3val !== "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);
                showWinner(pos1val);
            }
        }




    }
};

newBtn.addEventListener("click",  resetGame);
resetbtn.addEventListener("click", resetGame);
