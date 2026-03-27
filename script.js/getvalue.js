function getDonationAmount(id){
    const inputammount = document.getElementById(id).value;
    const inputammountNumber = parseFloat(inputammount);
    return inputammountNumber;}
function getBalance(id){
    const balance = document.getElementById(id).innerText;
    const balanceNumber = parseFloat(balance);
    return balanceNumber;
}