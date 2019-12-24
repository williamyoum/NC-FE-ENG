/* ​Write a program that prints the numbers from 1 to N. 

But for multiples of two print “Net” instead of the number 
and for the multiples of three print “capital”.

For numbers which are multiples of both two and three print “Netcapital”. 

**** 
Don't use comparison operators
****
*/


// set N
var LIMIT = Number.parseInt(process.argv[2]);

// declare function that iteraters 1 to N. 
var sayNetCapital = function(LIMIT){
    for(let i = 1; i <= LIMIT; i++){
        
        // when the i mod 2 is equal to 0, 
            // make it true for if condition to output 
        if(!(i%2)){
            // for multiples of 2 and 3, 
                // just use a subcondition of multiple of 3 under 2
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
