document.getElementById("btn-cashout").addEventListener("click", () => {
  const currentBalance = getBalance();
  // console.log(typeof balance)
  const agentNumber = getInputFromId("cashout-num");

  if (agentNumber.length !== 11) {
    alert("Invalid agent number");
    return;
  }
  // console.log(agentNumber)
  const amount = getInputFromId("cashout-amount");
  const newBalance = currentBalance - Number(amount);
  if (newBalance < 0) {
    alert("Invalid amount");
    return;
  }

  // console.log(typeof amount);
  const pin = getInputFromId("cashout-pin");
  if (pin === "1234") {
    alert("Withdraw successful");
    setBalance(newBalance);
    const history = document.getElementById("history-container");
       const newHistory = document.createElement("div");
       newHistory.innerHTML = `
        <p class="transaction-card p-3 bg-base-100">
        Cash out successful form ${agentNumber} at ${new Date()}
      </p>`
      history.appendChild(newHistory);
  } else {
    alert("Invalid pin");
    return;
  }
  // console.log(pin);
});
