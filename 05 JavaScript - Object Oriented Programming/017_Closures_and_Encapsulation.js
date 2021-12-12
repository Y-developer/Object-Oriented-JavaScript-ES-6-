function bankAccount(){
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
}

const firstAccount = bankAccount();
console.log(`First account initial balance Rs. ${firstAccount.getAccountBalance()}`)
firstAccount.dpo(200);
console.log(`First account balance after deposit Rs. ${firstAccount.getAccountBalance()}`);
firstAccount.withdrow(50);
console.log(`First account balance after withdrow Rs. ${firstAccount.getAccountBalance()}`);

console.log("");

const secoundAccount = bankAccount();
console.log(`Secound account initial balance Rs. ${secoundAccount.getAccountBalance()}`)
secoundAccount.dpo(500);
console.log(`Secound account balance after deposit Rs. ${secoundAccount.getAccountBalance()}`);
secoundAccount.withdrow(200);
console.log(`Secound account balance after withdrow Rs. ${secoundAccount.getAccountBalance()}`);