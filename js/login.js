document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault()

    const yourNumber = document.getElementById('your-number').value;
    const yourPassword = document.getElementById('your-password').value;
    if(yourNumber ==='1' && yourPassword === '1'){
        console.log('WellCome to Login');
        window.location.href='./home.html'
    }
    else{
        alert('woring your number and Password')
    }
})