// login Area
document.getElementById("loginBtn").addEventListener('click', function () {
    document.getElementById("loginArea").style.display = 'none';
    document.getElementById("transactionArea").style.display = 'block';
})

// deposit button
document.getElementById("addDeposit").addEventListener('click', function () {
    const depositInputNumber = getInputAmount("depositInput");

    updateSpanText("currentDeposit", depositInputNumber);
    updateSpanText("currentBalance", depositInputNumber);
})

// withdraw button
document.getElementById("addWithdraw").addEventListener('click', function () {
    const withdrawInputNumber = getInputAmount("withdrawInput");
    
    updateSpanText("currentWithdraw", withdrawInputNumber);
    updateSpanText("currentBalance", -withdrawInputNumber);   
})

// function for deposit & withdraw
function updateSpanText(id, depositInputNumber) {
    const amountString = document.getElementById(id).innerText;
    const amountNumber = parseFloat(amountString);
    const totalAmount = depositInputNumber + amountNumber;
    document.getElementById(id).innerText = totalAmount;   
}

// function for deposit & withdraw
function getInputAmount(id) {
    const amountInputString = document.getElementById(id);
    const amountInputNumber = parseFloat(amountInputString.value);
    amountInputString.value = "";
    return amountInputNumber;
}






// ! non-optimized code
// login Area
//// document.getElementById("loginBtn").addEventListener('click', function () {
////     document.getElementById("loginArea").style.display = 'none';
////     document.getElementById("transactionArea").style.display = 'block';
//// })

// deposit button
//// document.getElementById("addDeposit").addEventListener('click', function () {
////     const depositInputString = document.getElementById("depositInput");
////     const depositInputNumber = parseFloat(depositInputString.value);

////     const currentDepositString = document.getElementById("currentDeposit").innerText;
////     const currentDepositNumber = parseFloat(currentDepositString);
////     const totalDeposit = depositInputNumber + currentDepositNumber;
////     document.getElementById("currentDeposit").innerText = totalDeposit;
    
////     const currentBalanceString = document.getElementById("currentBalance").innerText;
////     const currentBalanceNumber = parseFloat(currentBalanceString);
////     const totalBalance = depositInputNumber + currentBalanceNumber;
////     document.getElementById("currentBalance").innerText = totalBalance;

////     depositInputString.value = "";
//// })

// withdraw button
//// document.getElementById("addWithdraw").addEventListener('click', function () {
////     const withdrawInputString = document.getElementById("withdrawInput");
////     const withdrawInputNumber = parseFloat(withdrawInputString.value);
    
////     const currentWithdrawString = document.getElementById("currentWithdraw").innerText;
////     const currentWithdrawNumber = parseFloat(currentWithdrawString);
////     const totalWithdraw = withdrawInputNumber + currentWithdrawNumber;
////     document.getElementById("currentWithdraw").innerText = totalWithdraw;

////     const currentBalanceString = document.getElementById("currentBalance").innerText;
////     const currentBalanceNumber = parseFloat(currentBalanceString);
////     const totalBalance = currentBalanceNumber - withdrawInputNumber;
////     document.getElementById("currentBalance").innerText = totalBalance;

////     withdrawInputString.value = "";

//// })