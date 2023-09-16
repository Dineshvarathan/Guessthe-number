"use strict";

let random = Math.trunc(Math.random() * 10) + 1;
let score = 3;
const thegreatt = document.querySelector(".thegreat");
const vel = document.querySelector(".attempt");
// inp , guess-btn, hint
const btnguess = document.querySelector(".guess-btn");
const btnagain = document.querySelector(".btn-again");
const words = function (valuee) {
  document.querySelector(".hint").textContent = valuee;
};

btnguess.addEventListener("click", function () {
  const inputt = Number(document.querySelector(".inp").value);
  if (!inputt) {
    words("N0 input!, try again");
  } else if (inputt === random) {
    words("Its Correct🌟");
    thegreatt.textContent = random;
    document.querySelector("html").style.backgroundColor = "yellowgreen";
  } else if (inputt !== random) {
    if (score > 1) {
      inputt > random
        ? words(`Hint - it is smaller than ${inputt}`)
        : words(`Hint - it is  larger than ${inputt}`);
      score--;
      vel.textContent = `Attempt: ${score}`;
    } else {
      words(`Game over😢`);
      btnguess.disabled = true;
      document.querySelector("html").style.backgroundColor = "red";
      document.querySelector(".attempt").textContent = `Attempt: 0`;
    }
  }
});
btnagain.addEventListener("click", function () {
  score = 3;
  console.log("clicked");
  document.querySelector("html").style.backgroundColor = "rgb(253, 134, 227)";
  thegreatt.textContent = "?";
  document.querySelector(".inp").value = "";
  words("guess??");
  btnguess.disabled = false;
  vel.textContent = `Attempt: ${score}`;
});
