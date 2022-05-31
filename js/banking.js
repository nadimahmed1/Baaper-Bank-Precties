// get deposit button event handler
document.getElementById('deposit-button').addEventListener('click', function () {
    const depositInputField = document.getElementById('deposit-input');
    const depositInputText = depositInputField.value;
    const newDepositAmount = parseFloat(depositInputText);
    // set the deposit field
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    depositTotal.innerText = newDepositTotal;
    depositInputField.value = '';

})