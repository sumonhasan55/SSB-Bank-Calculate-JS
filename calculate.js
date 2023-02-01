
//for deposite calculate
document.getElementById('deposite-btn').addEventListener('click',function(){
   

    const inputDepositefld = document.getElementById('input-deosite');
    const inputDepositeAmountString = inputDepositefld.value;
    const inputDepositeAmount = parseFloat(inputDepositeAmountString)
    

    const totalDepositefld =document.getElementById('total-deposite');
    const totalDepositeAmountString = totalDepositefld.innerText;
    const totalDepositeAmount = parseFloat(totalDepositeAmountString)

    totalDepositefld.innerText = inputDepositeAmount + totalDepositeAmount ;

    const totalDeposite = parseFloat(totalDepositefld.innerText)


    const blanceTotalElement = document.getElementById('currient-blance');
    const previousblanceTotalString = blanceTotalElement.innerText;
    const previousblanceTotalAmount = parseFloat(previousblanceTotalString);

    const currientBlanceTotal = previousblanceTotalAmount + totalDeposite;

    blanceTotalElement.innerText= currientBlanceTotal;


    inputDepositefld.value ='';

});

//for withdrow calculate

document.getElementById('withdrow-btn').addEventListener('click', function(){
    const withdrowElement = document.getElementById('input-withdrow');
    const withdrowString = withdrowElement.value;
    const withdrowAmount = parseFloat(withdrowString);
    
    const previousWithdrow = document.getElementById('total-withdrow');
    const previousWithdrowString = previousWithdrow.innerText;
    const previousWithdrowAmount = parseFloat(previousWithdrowString);
    const currientWithdrow = withdrowAmount + previousWithdrowAmount;
    previousWithdrow.innerText=currientWithdrow;


    const previousBlanceElement = document.getElementById('currient-blance');
    const previousBlanceString = previousBlanceElement.innerText;
    const previousBlanceAmount = parseFloat(previousBlanceString);

    const AvailavelBlance = previousBlanceAmount - currientWithdrow;
    previousBlanceElement.innerText = AvailavelBlance;


    withdrowElement.value= '';
})