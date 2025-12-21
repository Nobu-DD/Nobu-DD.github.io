const outputButton = document.getElementById('output_button');
const resultHowToBuy = document.getElementById('result_how_to_buy');
const resultBettingNumber = document.getElementById('result_betting_number');

function bettingSelectionsOutput() {
  const numberOfRunners = document.getElementById('number_of_runners').value;
  const howToBuy = document.getElementById('how_to_buy').value;

  resultHowToBuy.textContent = howToBuy;
  if (howToBuy == "単勝" || howToBuy == "複勝") {
    resultBettingNumber.textContent = Math.floor(Math.random() * numberOfRunners) + 1;
  } else if (howToBuy == "ワイド") {
    let countArray = Array.from({ length: numberOfRunners }, (v, i) => i+1);
    let picks = [];
    for (let i = 0; i < 3; i++) {
      let selectedIndex = Math.floor(Math.random() * countArray.length);
      picks.push(countArray[selectedIndex]);
      countArray.splice(selectedIndex, 1);
    }
    picks.sort(compareNumbers);
    resultBettingNumber.textContent = picks.join(", ");
  }
}

function compareNumbers(a, b) {
  return a - b;
}

outputButton.addEventListener("click", bettingSelectionsOutput);
