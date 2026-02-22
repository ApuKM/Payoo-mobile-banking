document.getElementById("btn-add-amount").addEventListener("click", () => {
    const bank = getInputFromId("select-bank");
    // console.log(bank)
    if(bank === "Choose Your Bank"){
        alert("Please select a bank");
        return;
    }
    const bankAccountNum = getInputFromId("bank-account-num");
    // console.log(bankAccountNum)
    if(bankAccountNum.length !== 11 ){
        alert("Please use a valid bank account number.")
        return;
    }
    const addAmount = getInputFromId("add-amount");
    // console.log(typeof addAmount)
    if(Number.isNaN(addAmount) || addAmount <= 0 ){
        alert("Invalid ammout")
        return
    }
    const balance = getBalance() + Number(addAmount);
    // console.log(balance)
    const pin = getInputFromId("add-amount-pin");
    // console.log(pin)
    if(pin === "1234"){
       alert(`Add money successful to ${bank} at ${new Date()}`);
       setBalance(balance);
       const history = document.getElementById("history-container");
       const newHistory = document.createElement("div");
       newHistory.innerHTML = `
        <p class="transaction-card p-3 bg-base-100">
        Add money successful to ${bank} bank at ${new Date()}
      </p>`
      history.appendChild(newHistory);
       
    }else{
        alert("Invalid Pin Number")
        return;
    }
})