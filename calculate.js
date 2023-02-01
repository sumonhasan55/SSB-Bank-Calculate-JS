document.getElementById('deposite-btn').addEventListener('click',function(){
   

    const inputDepositefld = document.getElementById('input-deosite');
    const inputDepositeAmount = inputDepositefld.value;
    

    const totalDepositefld =document.getElementById('total-deposite');
    const totalDepositeAmount = totalDepositefld.innerText;
    totalDepositefld.innerText = parseInt(inputDepositeAmount + totalDepositefld.innerText) ;

});