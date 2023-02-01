document.getElementById('login-button').addEventListener('click', function () {

    const Emailfield = document.getElementById('Email-field');
    const email = Emailfield.value;

    const Passwordfield = document.getElementById('Password-field');
    const password = Passwordfield.value;

    if (email ==='wubsumon7577@gmail.com' && password === 'secret') {
        window.location.href = 'bank.html'
    } else {
       alert('Invaild Email Or Password! Plz try Again...')
        
    }

    
})