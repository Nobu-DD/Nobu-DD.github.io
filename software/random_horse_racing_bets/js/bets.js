const outputButton = document.getElementById('output_button');
const resultHowToBuy = document.getElementById('result_how_to_buy');
const resultBettingNumber = document.getElementById('result_betting_number');
const numberOfRunners = document.getElementById('number_of_runners');
const selectedWide = document.getElementById('wide');
const howToBuy = document.getElementById('how_to_buy');

// 買い目をランダムで出力する関数
function bettingSelectionsOutput() {

  resultHowToBuy.textContent = howToBuy.value;
  if (howToBuy.value == "単勝" || howToBuy.value == "複勝") {
    resultBettingNumber.textContent = Math.floor(Math.random() * numberOfRunners.value) + 1;
  } else if (howToBuy.value == "ワイド" || howToBuy.value == "三連複" || howToBuy.value == "三連単") {
    const countArray = Array.from({ length: numberOfRunners.value }, (v, i) => i+1);
    const picks = [];
    for (let i = 0; i < 3; i++) {
      const selectedIndex = Math.floor(Math.random() * countArray.length);
      picks.push(countArray[selectedIndex]);
      countArray.splice(selectedIndex, 1);
    }
    changeOrder(howToBuy.value, picks);
  } else if (howToBuy.value == "馬連" || howToBuy.value == "馬単") {
    const countArray = Array.from({ length: numberOfRunners.value }, (v, i) => i+1);
    const picks = [];
    for (let i= 0; i < 2; i++) {
      const selectedIndex = Math.floor(Math.random() * countArray.length);
      picks.push(countArray[selectedIndex]);
      countArray.splice(selectedIndex, 1);
    }
    changeOrder(howToBuy.value, picks);
  }
}

// ランダムで出力された買い目を昇順に入れ替え
function compareNumbers(a, b) {
  return a - b;
}

// 馬券が3頭以上の組み合わせになる場合、出走頭数の"2"を非表示にする
function changeRunners() {
  const number2 = document.getElementById("number_2");

  if (howToBuy.value == "ワイド" || howToBuy.value == "三連複" || howToBuy.value == "三連単") {
    number2.style.display = "none";
    numberOfRunners.value = numberOfRunners.value == "2" ? "3" : numberOfRunners.value;
  } else {
    number2.style.display = "block";
  }
}

// 買う馬を決めた後の並び替えをする関数
function changeOrder(target, array) {
  if (target == "馬単" || target == "三連単") {
    array.forEach((i, idx) => {
      array[idx] = `${idx + 1}着 ${array[idx]}`;
    })
  } else {
    array.sort(compareNumbers);
  }
  resultBettingNumber.textContent = array.join(" , ");
}

outputButton.addEventListener("click", bettingSelectionsOutput);
howToBuy.addEventListener("change", changeRunners);
