let bankAccount = (function (){
    var accontBalance = 1000;
    
    function deposit(depositAmount){
        accontBalance += depositAmount;
    };

    function withdrow(withdrowAmount){
        accontBalance -= withdrowAmount;
    };

    function getAccountBalance(){
        return accontBalance;
    }

    return {dpo : deposit, withdrow, getAccountBalance};
})();

console.log(`Account initial balance Rs. ${bankAccount.getAccountBalance()}`)
bankAccount.dpo(200);
console.log(`Account balance after deposit Rs. ${bankAccount.getAccountBalance()}`);
bankAccount.withdrow(50);
console.log(`Account balance after withdrow Rs. ${bankAccount.getAccountBalance()}`);