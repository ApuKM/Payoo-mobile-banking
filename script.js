document.getElementById("btn-login").addEventListener("click", () => {
    const inputNum = document.getElementById("input-num");
    const inputPin = document.getElementById("input-pin");
    const number = inputNum.value;
    const pin = inputPin.value;
    // console.log(typeof pin)
    if(number === "01747234764" && pin === "1234"){
        alert("Login Success")
        window.location.assign("./home.html")
    }else{
        alert("Failed")
    }
    return;
})