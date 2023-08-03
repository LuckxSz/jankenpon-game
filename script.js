const result = document.querySelector(".result");
const humanScore = document.querySelector("#human-score");
const machineScore = document.querySelector("#machine-score");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const PlayHuman = (HumanChoice) => {
  Game(HumanChoice, playMachine());
};

const playMachine = () => {
  const choices = ["rock", "paper", "scissors"];
  const RandomNumber = Math.floor(Math.random() * 3);
  return choices[RandomNumber];
};

const Game = (human, machine) => {
  console.log("humano:" + human + "Maquina:" + machine);
  if (human === machine) {
    result.innerHTML = "引き分け";
  } else if (
    (human === "paper" && machine === "rock") ||
    (human === "rock" && machine === "scissors") ||
    (human === "scissors" && machine === "paper")
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = "あなたは勝ちました";
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = "あなたが負けた";
  }
};
