document.getElementById('flood-donate').addEventListener("click", function () {
    const donatValue = getDonationAmount('flood-amount');
    const mainbalance = getBalance('flood-balance-main');
    document.getElementById('flood-balance-main').innerText = donatValue + mainbalance;


    const myBalanceNumber = getBalance('myBalance');
    document.getElementById('myBalance').innerText = myBalanceNumber - donatValue;

    if (donatValue !== Number || donatValue <= 0) {
        alert("Please enter a valid donation amount.");
    }
    else(
        
    )
})

document.getElementById('Noakhali-flood-donate').addEventListener("click", function () {
    const Noakhali_donatValue = getDonationAmount('noakhali-flood-ammount')
    const Noakhali_mainbalance = getBalance('Noakhali-flood-balance-main');
    document.getElementById('Noakhali-flood-balance-main').innerText = Noakhali_donatValue + Noakhali_mainbalance;


    const myBalanceNumber = getBalance('myBalance');
    document.getElementById('myBalance').innerText = myBalanceNumber - Noakhali_donatValue;


})

document.getElementById('quota-protest-donate').addEventListener("click", function () {
    const quota_donatValue = getDonationAmount('quota-protest-ammount')
    const quota_mainbalance = getBalance('quota-protest-balance-main');
    document.getElementById('quota-protest-balance-main').innerText = quota_donatValue + quota_mainbalance;


    const myBalanceNumber = getBalance('myBalance');
    document.getElementById('myBalance').innerText = myBalanceNumber - quota_donatValue;


})

