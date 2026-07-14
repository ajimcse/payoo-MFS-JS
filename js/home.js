document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault()
    const addAmountInput = document.getElementById('add-amount-input').value;

    const yourPassword = document.getElementById('add-password-input').value;

    if (yourPassword === '2') {
        const availableBalance = document.getElementById('available-balance').innerText;
        const addMoneyInputNUmber = parseFloat(addAmountInput);
        const balanceNumber = parseFloat(availableBalance)
        const totalCurrenBalance = addMoneyInputNUmber + balanceNumber

        document.getElementById('available-balance').innerText = totalCurrenBalance

    }
 
    else {
        alert('this is woring password')
    }

})