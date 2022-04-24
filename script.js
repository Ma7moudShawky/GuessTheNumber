"use strict";
let secNum = Math.trunc(Math.random() * 20 + 1);
let highScore = 0;

let score = 20;
function writeMessege(msg) {
  document.querySelector(".message").textContent = msg;
}

document.querySelector(".check").addEventListener("click", function () {
  let guessNum = Number(document.querySelector(".guess").value);
  if (!guessNum) {
    writeMessege("You Have To Enter a Number");
  } else if (guessNum === secNum) {
    writeMessege("You Won 🏆");
    document.querySelector(".guess").value = "";
    document.querySelector(".number").textContent = secNum;
    if (score > highScore) {
      document.querySelector(".highscore").textContent = score;
      highScore = score;
    }
    document.querySelector("body").style.backgroundColor = "green";
  } else {
    if (score <= 1) {
      writeMessege("You Lost 🤷‍♂️");
      score--;
      document.querySelector(".label-score").textContent = `💯 Score:${score}`;
    } else {
      score--;
      document.querySelector(".label-score").textContent = `💯 Score:${score}`;
      if (guessNum > secNum) {
        writeMessege("Too High !");
      } else {
        writeMessege("Too Low !");
      }
    }
  }
});
document.querySelector(".again").addEventListener("click", again);
function again() {
  secNum = Math.trunc(Math.random() * 20 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  writeMessege("Start guessing...");
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".label-score").textContent = `💯 Score:${score}`;
  document.querySelector(".guess").value = "";
}
