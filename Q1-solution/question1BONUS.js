/* ​Write a program that prints the numbers from 1 to N. 

But for multiples of two print “Net” instead of the number 
and for the multiples of three print “capital”.

For numbers which are multiples of both two and three print “Netcapital”. */


var LIMIT = Number.parseInt(process.argv[2]);

var sayNetCapital = function(LIMIT){
    for(let i = 1; i <= LIMIT; i++){
        if(!(i%2)){
            if(!(i%3)){
                console.log("Netcapital");
            }
            else{
                console.log("Net");
            }
        }
        else if(!(i%3)){
            console.log("capital");
        }
        else{
            console.log(i);
        }
    }
}
sayNetCapital(LIMIT);
