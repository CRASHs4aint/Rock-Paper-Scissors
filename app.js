let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const genCompChoice = () => {
  const options = ["rock", "paper", "scissors"];
  //rock,paper,sciccors
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
};
const drawGame=() =>{
    console.log("game was draw.");
    msg.innerText="Game was Draw.Play again. ";
}
const showWinner =(userWin) =>{
    if(userWin){
        console.log("you win");
        msg.innerText="You win!";
    }else {
        console.log("you lose");
         msg.innerText="You lose.";
    }
}
const playGame = (userChoice) => {
  console.log("user choice =", userChoice);
  const compChoice = genCompChoice();
  console.log("comp choice =", compChoice);

  if(userChoice===compChoice){
    drawGame();
  } else{
    let userWin =true;
    if(userChoice ==="rock"){
        //scissors ,paper
       userWin= compChoice === "paper" ? false :true;
    }else if(userChoice==="paper"){
//rock,scisccors
userWin = compChoice ==="scissors"?false:true;
    }else {
        //rock,paper
        userWin=compChoice==="rock"?false:true;
    }
    showWinner(userWin);
  }
};
//Generate computer choice ->modular
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});
