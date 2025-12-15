const outputButton = document.getElementById('output_button');
const resultHowToBuy = document.getElementById('result_how_to_buy');
const resultBettingNumber = document.getElementById('result_betting_number');

function bettingSelectionsOutput() {
  const numberOfRunners = document.getElementById('number_of_runners').value;
  const howToBuy = document.getElementById('how_to_buy').value;

  resultHowToBuy.textContent = howToBuy;
  resultBettingNumber.textContent = Math.floor(Math.random() * numberOfRunners) + 1;
}

outputButton.addEventListener("click", bettingSelectionsOutput);
