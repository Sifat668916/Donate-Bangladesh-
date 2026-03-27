
// donation section button features start here

document.getElementById('flood-donate').addEventListener("click", function () {
    const donatValue = getDonationAmount('flood-amount');
    const mainbalance = getBalance('flood-balance-main');
    const now = new Date();


    if (isNaN(donatValue) || donatValue <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    else {
        document.getElementById('Transaction-multiple').innerHTML += `<div class="transaction-card"><div id="ammount-donated">${donatValue}</div> Taka is donated for Flood <div id="donation-campain">Feni Flood</div> Bangladesh</div> <div id = "donation-date">" "</div>`;
        document.getElementById('donation-date').innerText = now.toLocaleString();
        document.getElementById('flood-balance-main').innerText = donatValue + mainbalance;



        const myBalanceNumber = getBalance('myBalance');
        document.getElementById('myBalance').innerText = myBalanceNumber - donatValue;
        // document.getElementById('ammount-donated').innerText = donatValue;
        // document.getElementById('donation-campain').innerText = "Feni Flood"; 

    }


})

document.getElementById('Noakhali-flood-donate').addEventListener("click", function () {
    const Noakhali_donatValue = getDonationAmount('noakhali-flood-ammount')
    const Noakhali_mainbalance = getBalance('Noakhali-flood-balance-main');
    const now = new Date();
    document.getElementById('Noakhali-flood-balance-main').innerText = Noakhali_donatValue + Noakhali_mainbalance;


    const myBalanceNumber = getBalance('myBalance');
    document.getElementById('myBalance').innerText = myBalanceNumber - Noakhali_donatValue;

    if (isNaN(Noakhali_donatValue) || Noakhali_donatValue <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    else {
        document.getElementById('Transaction-multiple').innerHTML += `<div class="transaction-card"><div id="ammount-donated">${Noakhali_donatValue}</div> Taka is donated for Flood <div id="donation-campain">Noakhal Flood</div> Bangladesh</div> <div id = "donation-date">" "</div>`;
        document.getElementById('donation-date').innerText = now.toLocaleString();
        document.getElementById('Noakhali-flood-balance-main').innerText = Noakhali_donatValue + Noakhali_mainbalance;


        const myBalanceNumber = getBalance('myBalance');
        document.getElementById('myBalance').innerText = myBalanceNumber - Noakhali_donatValue;

        // document.getElementById('ammount-donated').innerText = donatValue;
        // document.getElementById('donation-campain').innerText = "Feni Flood"; 

    }

})

document.getElementById('quota-protest-donate').addEventListener("click", function () {
    const quota_donatValue = getDonationAmount('quota-protest-ammount')
    const quota_mainbalance = getBalance('quota-protest-balance-main');
    const now = new Date();
    document.getElementById('quota-protest-balance-main').innerText = quota_donatValue + quota_mainbalance;


    const myBalanceNumber = getBalance('myBalance');
    document.getElementById('myBalance').innerText = myBalanceNumber - quota_donatValue;
    if (isNaN(quota_donatValue) || quota_donatValue <= 0) {
        alert("Please enter a valid donation amount.");
        return;
    }
    else {
        document.getElementById('Transaction-multiple').innerHTML += `<div class="transaction-card"><div id="ammount-donated">${quota_donatValue}</div> Taka is donated for Flood <div id="donation-campain">Quota Protest</div> Bangladesh</div> <div id = "donation-date">" "</div>`;
        document.getElementById('donation-date').innerText = now.toLocaleString();
        document.getElementById('quota-protest-balance-main').innerText = quota_donatValue + quota_mainbalance;


        const myBalanceNumber = getBalance('myBalance');
        document.getElementById('myBalance').innerText = myBalanceNumber - quota_donatValue;
        // document.getElementById('ammount-donated').innerText = donatValue;
        // document.getElementById('donation-campain').innerText = "Feni Flood"; 

    }

})

//donation section button features end here


// donation and history button toggle start here

document.getElementById('nav-donate').addEventListener("click", function () {
    document.getElementById('transaction-button-main').classList.remove('bg-[#b4f461]');
    document.getElementById('nav-donate').classList.add('bg-[#b4f461]');

    document.getElementById('donation-cards').classList.remove('hidden');
    document.getElementById('historycard').classList.add('hidden');
})
document.getElementById('transaction-button-main').addEventListener("click", function () {
    document.getElementById('nav-donate').classList.remove('bg-[#b4f461]');
    document.getElementById('transaction-button-main').classList.add('bg-[#b4f461]');

    document.getElementById('historycard').classList.remove('hidden');
    document.getElementById('donation-cards').classList.add('hidden');
})

// donation and history button toggle end here  