document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const newDepositAmount = depositInput.value;
    const newDepositAmount2 = parseFloat(newDepositAmount);

    const depositTotal = document.getElementById("depositTotal");
    const previousDeposit = depositTotal.innerText;
    const previousDeposit2 = parseFloat(previousDeposit);

    const newDeposit = previousDeposit2 + newDepositAmount2;
    depositTotal.innerText = newDeposit;

    depositInput.value = "";

    // ---------------

    const balanceTotal = document.getElementById("balanceTotal");
    const previousBalance = balanceTotal.innerText;
    const previousBalance2 = parseFloat(previousBalance);
    const total = previousBalance2 + newDepositAmount2;
    balanceTotal.innerText = total;
  });
