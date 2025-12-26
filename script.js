let billInput = document.getElementById("bill");
let qualitySelect = document.getElementById("quality");
let peopleInput = document.getElementById("people");
let tipAmountDisplay = document.getElementById("tip-amount");

function handleChangeInput(e) {
  let inputValue = e.target.value.trim();
  let lastChar = inputValue.slice(-1);

  if (lastChar && isNaN(lastChar)) {
    e.target.value = inputValue.slice(0, -1);
  }

  calculate();
}

function calculate() {
  let bill = Number(billInput.value.trim());
  let tipPercent = Number(qualitySelect.value);
  let people = Number(peopleInput.value.trim());

  if (bill > 0 && people > 0) {
    let tipAmount = (bill * (tipPercent / 100)) / people;
    tipAmountDisplay.textContent = tipAmount.toFixed(2);
  } else {
    tipAmountDisplay.textContent = "0";
  }
}