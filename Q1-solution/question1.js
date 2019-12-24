/* ​Write a program that prints the numbers from 1 to N. 

But for multiples of two print “Net” instead of the number 
and for the multiples of three print “capital”.

For numbers which are multiples of both two and three print “Netcapital”. 
*/


// set N
var LIMIT = Number.parseInt(process.argv[2]);

// declare function that iteraters 1 to N. 
var sayNetCapital = function(LIMIT){
    // iterate from 1 to the set LIMIT "N"
    for(let i = 1; i <= LIMIT; i++){
        // for multiples of 2 only, spell "Net"
        if(i % 2 == 0){
            // for multiples of 2 AND 3, spell Netcapital
            if(i % 3 == 0){
                console.log("Netcapital");
            }
            else{
                console.log("Net");
            }
        // for multiples of 3 only, spell "capital"
        }
        else if(i % 3 == 0){
            console.log("capital");
        }
        // for everything but multiples of 2, 3, and 6, just print the iteration
        else{
            console.log(i);
        }
    }
}
// call the function that prints this pattern, passing set N as a parameter.
sayNetCapital(LIMIT);
