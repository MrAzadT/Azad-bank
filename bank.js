document
  .getElementById("deposit-button")
  .addEventListener("click", function () {
    const depositInput = document.getElementById("deposit-input");
    const depositAmount = depositInput.value;
    const depositTotal = document.getElementById("depositTotal");
    depositTotal.innerText = depositAmount;
    depositInput.value = "";
  });
