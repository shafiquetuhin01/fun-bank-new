// depositAmount 
const putInput = document.getElementById('deposit-input');
const getValue = document.getElementById('deposit-total');
// withdrawAmount 
const withdrawInput = document.getElementById('withdraw-input');
const withdrawTotal = document.getElementById('withdraw-total');
// totalBalance 
const totalBalance = document.getElementById('balance-total');

function addMoney(current, newAmount){
    return parseFloat(current) + parseFloat(newAmount) ;
};
function getMoney(current, newAmount){
    return parseFloat(current) - parseFloat(newAmount);
}
function depositAmount(){
    const totalDeposit = addMoney(getValue.innerText, putInput.value);
    getValue.innerText = totalDeposit;
    const totalBalanceAmount = addMoney(totalBalance.innerText, putInput.value);
    totalBalance.innerText = totalBalanceAmount;
    putInput.value = '';
};
function withdrawAmount(){
    const withdrawM = addMoney(withdrawTotal.innerText, withdrawInput.value);
    withdrawTotal.innerText = withdrawM;
    const updateBl = getMoney(totalBalance.innerText, withdrawInput.value);
    totalBalance.innerText = updateBl;
    withdrawInput.value = '';
};

/* if (amount > 0) {
    updateTotal('deposit-total', amount);
    updateBalance(amount, true);
}

if (amount > 0 && amount <= balance) {
    updateTotal('withdraw-total', amount);
    updateBalance(amount, false)
} */