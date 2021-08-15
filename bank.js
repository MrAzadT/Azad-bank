document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    const newDepositAmount2 = parseFloat(newDepositAmount);

    const depositTotal = document.getElementById("depositTotal");
    // depositTotal.innerText = depositAmount;

    const previousDeposit = depositTotal.innerText;
    const previousDeposit2 = parseFloat(previousDeposit);

    const newDeposit = previousDeposit2 + newDepositAmount2;
    depositTotal.innerText = newDeposit;

    depositInput.value = "";
  });
