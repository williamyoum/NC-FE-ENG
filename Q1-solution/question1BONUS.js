/* ​Write a program that prints the numbers from 1 to N. 

But for multiples of two print “Net” instead of the number 
and for the multiples of three print “capital”.

For numbers which are multiples of both two and three print “Netcapital”. */


// var LIMIT = Number.parseInt(process.argv[2]);
var LIMIT = 10;

var sayNetCapital = function(LIMIT){

    for(let i = 1; i <= LIMIT; i++){
        // let mult2= i%2;
        // mult2.toString;
        // let mult3= i%3;
        // mult3.toString;
        // let mult2and3= i%6;
        // mult2and3.toString;
        // let zero = 0;

        if(mult2.equals(zero)){
            if(mult2and3.equals(zero)){
                console.log("Netcapital");
            }
            else{
                console.log("Net");
            }
        }
        else if(mult3.equals(zero)){
            console.log("capital");
        }
        else{
            console.log(i);
        }
    }
}
sayNetCapital(LIMIT);
