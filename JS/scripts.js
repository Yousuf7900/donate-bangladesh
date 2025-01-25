// Toggle buttons
function clickToToggleButtons(id){
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};
// History part active
document.getElementById('history-button').addEventListener('click', function(){
    clickToToggleButtons('transaction-history');
    document.getElementById('history-button').classList.add('bg-[#B4F461]', 'border-[#B4F461]');
    document.getElementById('history-button').classList.remove('border-cyan-900');
    document.getElementById('donation-button').classList.remove('bg-[#B4F461]', 'border-[#B4F461]');
    document.getElementById('donation-button').classList.add('border-cyan-900');
});
// Donation part active
document.getElementById('donation-button').addEventListener('click', function(){
    clickToToggleButtons('donation-card');
    document.getElementById('history-button').classList.add('border-cyan-900');
    document.getElementById('donation-button').classList.add('bg-[#B4F461]', 'border-[#B4F461]');
    document.getElementById('history-button').classList.remove('bg-[#B4F461]', 'border-[#B4F461]');
    document.getElementById('donation-button').classList.remove('border-cyan-900');
});
// get the input amount from user
function inputAmount(id){
    const inputValueRaw = document.getElementById(id);
    const inputValue = inputValueRaw.value;
    if(isNaN(inputValue)){
        alert('Please enter a valid amount');
        inputValueRaw.value = '';
        return;
    }
    const inputAmount = parseFloat(inputValue);
    inputValueRaw.value = '';
    return inputAmount;
};
// get the textvalue
function textAmount(id){
    const textValue = document.getElementById(id).innerText;
    const textAmount = parseFloat(textValue);
    return textAmount;
};
// For Noakhali #flood1
document.getElementById('button1').addEventListener('click', function(event){
    event.preventDefault();
    const amount = inputAmount('flood1');
    const currentBalance = textAmount('current-balance1');
    const myBalance = textAmount('my-balance');
    if(isNaN(amount)){
        return;
    }
    else if(myBalance <= 0 || amount > myBalance){
        alert('Insufficient money');
        return;
    }
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;
    document.getElementById('current-balance1').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;
    // transaction
    const transaction = document.getElementById('transaction-history');
    const newEntry = document.createElement('div');
    const date = new Date();
    newEntry.classList.add('max-w-6xl', 'lg:mx-auto', 'border', 'mx-4', 'justify-center', 'mb-1', 'p-8', 'rounded-2xl', 'text-left', 'bg-rose-400', 'text-white');
    newEntry.innerHTML = `
        <h4 class="pb-2 font-bold text-xl">${amount} Taka is Donated for ${document.getElementById('text1').innerText}. Total collection: ${updatedBalance} TK</h4>
        <p>Date: ${date}</p>
    `
    transaction.appendChild(newEntry);
    my_modal_1.showModal();
});
// For Feni #flood1
document.getElementById('button2').addEventListener('click', function(event){
    event.preventDefault();
    const amount = inputAmount('flood2');
    if(isNaN(amount)){
        return;
    }
    const currentBalance = textAmount('current-balance2');
    const myBalance = textAmount('my-balance');
    if(isNaN(amount)){
        return;
    }
    else if(myBalance <= 0 || amount > myBalance){
        alert('Insufficient money');
        return;
    }
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;

    document.getElementById('current-balance2').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;
    const transaction = document.getElementById('transaction-history');
    const newEntry = document.createElement('div');
    const date = new Date();
    newEntry.classList.add('max-w-6xl', 'lg:mx-auto', 'border', 'mx-4', 'justify-center', 'mb-1', 'p-8', 'rounded-2xl', 'text-left', 'bg-rose-400', 'text-white');
    newEntry.innerHTML = `
        <h4 class="pb-2 font-bold text-xl">${amount} Taka is Donated for ${document.getElementById('text2').innerText}. Total collection: ${updatedBalance} TK</h4>
        <p>Date: ${date}</p>
    `
    transaction.appendChild(newEntry);
    my_modal_1.showModal();
});
// For Quota #flood1
document.getElementById('button3').addEventListener('click', function(event){
    event.preventDefault();
    const amount = inputAmount('flood3');
    if(isNaN(amount)){
        return;
    }
    const currentBalance = textAmount('current-balance3');
    const myBalance = textAmount('my-balance');
    if(isNaN(amount)){
        return;
    }
    else if(myBalance <= 0 || amount > myBalance){
        alert('Insufficient money');
        return;
    }
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;
    document.getElementById('current-balance3').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;
    const transaction = document.getElementById('transaction-history');
    const newEntry = document.createElement('div');
    const date = new Date();
    newEntry.classList.add('max-w-6xl', 'lg:mx-auto', 'border', 'mx-4', 'justify-center', 'mb-1', 'p-8', 'rounded-2xl', 'text-left', 'bg-rose-400', 'text-white');
    newEntry.innerHTML = `
        <h4 class="pb-2 font-bold text-xl">${amount} Taka is Donated for ${document.getElementById('text3').innerText}. Total collection: ${updatedBalance} TK</h4>
        <p>Date: ${date}</p>
    `
    transaction.appendChild(newEntry);
    my_modal_1.showModal();
});
