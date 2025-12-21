const outputButton = document.getElementById('output_button');
const resultHowToBuy = document.getElementById('result_how_to_buy');
const resultBettingNumber = document.getElementById('result_betting_number');
const numberOfRunners = document.getElementById('number_of_runners');
const selectedWide = document.getElementById('wide');
const howToBuy = document.getElementById('how_to_buy');

function bettingSelectionsOutput() {

  resultHowToBuy.textContent = howToBuy.value;
  if (howToBuy.value == "単勝" || howToBuy.value == "複勝") {
    resultBettingNumber.textContent = Math.floor(Math.random() * numberOfRunners.value) + 1;
  } else if (howToBuy.value == "ワイド") {
    const countArray = Array.from({ length: numberOfRunners.value }, (v, i) => i+1);
    const picks = [];
    for (let i = 0; i < 3; i++) {
      const selectedIndex = Math.floor(Math.random() * countArray.length);
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

function changeRunners() {
  const number2 = document.getElementById("number_2");

  if (howToBuy.value == "ワイド") {
    number2.style.display = "none";
    numberOfRunners.value = numberOfRunners.value == "2" ? "3" : numberOfRunners.value;
  } else {
    number2.style.display = "block";
  }
}

outputButton.addEventListener("click", bettingSelectionsOutput);
howToBuy.addEventListener("change", changeRunners);
