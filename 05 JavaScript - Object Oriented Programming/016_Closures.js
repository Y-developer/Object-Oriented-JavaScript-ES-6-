function bankAccountDiposit(){
    let currentBalance = 1000;

    let diposit = function (dipositAmount){
        currentBalance += dipositAmount;
        return `Account Balance Rs.${currentBalance}`;
    }

    return diposit;
}

const baDiposit = bankAccountDiposit();
console.log(baDiposit(10));
