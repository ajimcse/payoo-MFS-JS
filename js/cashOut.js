document.getElementById('cash-out-btn').addEventListener('click', function (event) {
    event.preventDefault()

    const cashOutInput = document.getElementById('cash-out-input').value;
    const cashBalance = parseFloat(cashOutInput)
    const cahsOutPassword = document.getElementById('cash-password-input').value;

    if (cahsOutPassword === '1') {
        console.log('cashOut seccsess')
        const cashOutBalance = document.getElementById('available-balance').innerText;
        const cashOutAvailBalance = parseFloat(cashOutBalance);
        const totalCashOutBalance = cashOutAvailBalance - cashBalance;
        document.getElementById('available-balance').innerText = totalCashOutBalance

    }
    else {
        alert('this is woring password')
    }

})

