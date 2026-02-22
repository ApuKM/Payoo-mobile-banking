function getInputFromId(id) {
  const value = document.getElementById(id).value;
  return value;
}

function getBalance() {
  const balance = document.getElementById("balance").innerText;
  return Number(balance);
}

function setBalance(value) {
  document.getElementById("balance").innerText = value;
}

function showOnly(id){
  const addMoneySection = document.getElementById("add-money");
  const cashoutSection = document.getElementById("cashout");
  const historySection = document.getElementById("history");
  addMoneySection.classList.add("hidden");
  cashoutSection.classList.add("hidden");
  historySection.classList.add("hidden");
  const selectedSection = document.getElementById(id);
  selectedSection.classList.remove("hidden")
}
