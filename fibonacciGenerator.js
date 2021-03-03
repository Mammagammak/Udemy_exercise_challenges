function fibonacciGenerator (n) {
    output = [];
    var y = n;
     while (0< y <= 2)  {  
        y--;
       output.push(n-1);
     }
     for (var i = 2; i < n; i++) {
         output.push(output[i-2] + output[i-1]);
     }
     return output;
 }


 function fibonacciGenerator (n) {
     output = [];
     if (n <= 2) {
         for (var i = 0; i < n; i++) {
         output.push(i);
         }
     }
     return console.log(output);
     else {
         for (var i = 0; i < 2; i++) {
             output.push(i);
         }
             for (var x =2; x < n; x++) {
                 output.push(output[i-2] + output[i-1]);
         }
     }
     return console.log(output);
 }


Udemy exercise code
function fibonacciGenerator (n) {
//Do NOT change any of the code above 👆
    
    //Write your code here:
    output = [];
    if (n === 1) {
        output = [0];
    }
    if (n === 2) {
        output = [0,1];
    }
    if (n >= 3) {
        output = [0,1];

        for ( var i = 3; i <= n; i++ ) {
            output.push(output[i-2] + output[i-3]);
        }
    }
    return output[n-1];
}