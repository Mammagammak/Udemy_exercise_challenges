var output=[];
var count=0;
function fizzBuzz() {

count++;

 if ((count % 3) && (count % 5) === 0) {
   output.push("fizzBuzz");
  } if (((count % 3) === 0) && ((count % 5) !== 0)) {
       output.push("fizz");
   } if (((count % 3) !== 0) && ((count % 5) === 0)) {
       output.push("buzz");
   } if (((count % 3) && (count % 5)) !== 0) {
       output.push(count);
   }

console.log(output);   
}