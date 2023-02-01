document.getElementById('login-button').addEventListener('click', function () {

    const Emailfield = document.getElementById('Email-field');
    const email = Emailfield.value;

    const Passwordfield = document.getElementById('Password-field');
    const password = Passwordfield.value;

    if (email ==='wubsumon7577@gmail.com' && password === 'secret') {
        console.log('vaild user')
        
    } else {
        console.log('invaild user')
        
    }

    
})