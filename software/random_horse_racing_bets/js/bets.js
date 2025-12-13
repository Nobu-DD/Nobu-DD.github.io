let numberOfRunners = document.getElementById('number_of_runners').value;
let howToBuy = document.getElementById('how_to_buy').value;
let outputButton = document.getElementById('output_button');
let resultHowToBuy = document.getElementById('result_how_to_buy');
let resultBettingNumber = document.getElementById('result_betting_number');

function bettingSelectionsOutput() {
  numberOfRunners = document.getElementById('number_of_runners').value;
  resultHowToBuy.innerHTML = howToBuy;
  resultBettingNumber.innerHTML = Math.floor(Math.random() * numberOfRunners) + 1;
}

outputButton.addEventListener("click", bettingSelectionsOutput);
