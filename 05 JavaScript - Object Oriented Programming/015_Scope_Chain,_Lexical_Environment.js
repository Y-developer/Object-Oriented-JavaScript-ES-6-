var p = 10;

function funcA(){
    var q = 20;
    console.log(`inside funcA() ==> p = ${p}, q = ${q}`);


    function funcB(){
        var r = 30;
        let s = 236;
        console.log(`inside funcB() befor if block ==> p = ${p}, q = ${q}, r = ${r}, s = ${s}`);
        
        if (true) {
            var r = 756;
            let s = 3697;
            console.log(`inside if block ==> p = ${p}, q = ${q}, r = ${r}, s = ${s}`);
        }
        console.log(`inside funcB() after if block ==> p = ${p}, q = ${q}, r = ${r}, s = ${s}`);

    }
    funcB()
}

funcA();
