/* ​Write a program that prints the numbers from 1 to N. 

But for multiples of two print “Net” instead of the number 
and for the multiples of three print “capital”.

For numbers which are multiples of both two and three print “Netcapital”. */


var LIMIT = Number.parseInt(process.argv[2]);

var sayNetCapital = function(LIMIT){
    for(let i = 1; i <= LIMIT; i++){
        let isMult2 = i%2;
        let mult2String = isMult2.toString;
        let isMult3= i%3;
        let mult3String = isMult3.toString;
        let isMult2and3= i%6;
        let mult6String = isMult2and3.toString;
        let zero = "0";
        if(mult2String.equals(zero)){
            if(mult6String.equals(zero)){
                console.log("Netcapital");
            }
            else{
                console.log("Net");
            }
        }
        else if(mult3String.equals(zero)){
            console.log("capital");
        }
        else{
            console.log(i);
        }
    }
}
sayNetCapital(LIMIT);
