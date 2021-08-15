document.getElementById("loginBtn").addEventListener("click", function () {
  const gmailInput = document.getElementById("gmailInput");
  const userGmail = gmailInput.value;

  const PassInput = document.getElementById("PassInput");
  const userPass = PassInput.value;

  if (userGmail == "azad@gmail.com" && userPass == "tamal") {
    console.log("hiiiiii");
    window.location.href = "bank.html";
  }
});
