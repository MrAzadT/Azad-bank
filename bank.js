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
    const totalD = previousBalance2 + newDepositAmount2;
    balanceTotal.innerText = totalD;
  });

document
  .getElementById("withdraw-button")
  .addEventListener("click", function () {
    const withdrawInput = document.getElementById("withdraw-input");
    const withdrawInputAmount = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawInputAmount);

    const totalWithdraw = document.getElementById("totalWithdraw");
    const withdrawAmount = totalWithdraw.innerText;
    const newTotalWithdraw = parseFloat(withdrawAmount);

    const newWithdraw = newWithdrawAmount + newTotalWithdraw;

    totalWithdraw.innerText = newWithdraw;

    // ========
    const balanceTotal = document.getElementById("balanceTotal");
    const previousBalance = balanceTotal.innerText;
    const previousBalance2 = parseFloat(previousBalance);
    const totalB = previousBalance2 - newWithdrawAmount;
    balanceTotal.innerText = totalB;

    withdrawInput.value = "";
  });
