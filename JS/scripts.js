// Toggle buttons
function clickToToggleButtons(id){
    document.getElementById('donation-card').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
};

// History button active
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
})


// get the input amount from user

function inputAmount(id){
    const inputValueRaw = document.getElementById(id);
    const inputValue = inputValueRaw.value;
    const inputAmount = parseFloat(inputValue);
    inputValueRaw.value = '';
    return inputAmount;
}

// get the textvalue
function textAmount(id){
    const textValue = document.getElementById(id).innerText;
    const textAmount = parseFloat(textValue);
    return textAmount;
}


// For Noakhali #flood1
document.getElementById('button1').addEventListener('click', function(event){
    event.preventDefault();

    const amount = inputAmount('flood1');
    const currentBalance = textAmount('current-balance1');
    const myBalance = textAmount('my-balance');
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;

    document.getElementById('current-balance1').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;

})
// For Feni #flood1
document.getElementById('button2').addEventListener('click', function(event){
    event.preventDefault();

    const amount = inputAmount('flood2');
    const currentBalance = textAmount('current-balance2');
    const myBalance = textAmount('my-balance');
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;

    document.getElementById('current-balance2').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;

})
// For Quota #flood1
document.getElementById('button3').addEventListener('click', function(event){
    event.preventDefault();

    const amount = inputAmount('flood3');
    const currentBalance = textAmount('current-balance3');
    const myBalance = textAmount('my-balance');
    const updatedBalance = currentBalance + amount;
    const myCurrentBalance = myBalance - amount;

    document.getElementById('current-balance3').innerText = updatedBalance;
    document.getElementById('my-balance').innerText = myCurrentBalance;

})