console.log(" ----------------------------------------step1----------------------------------------");
var b1=10;
var b2=-10;
var result = b1>=b2 ?"gretest no is 10:":"gretest no is -10"
console.log("Given no is 10 and -10");
console.log(result);
var b1=800;
var b2=899;
var result = b1>=b2 ?"gretest no is 800:":"gretest no is 899"
console.log("Given no is 800 and 899");
console.log(result);
console.log(` `);
console.log("--------------------------------------------step2---------------------------------------------");
var n1=29;
var result= n1%2;
var resultValue=result==0?"given no is even":"given no is odd";
console.log(" given no is: 29");
console.log(resultValue);
var n1=44;
var result= n1%2;
var resultValue = result == 0 ? "given no is even" : "given no is odd";
console.log(" given no is: 44");
console.log(resultValue);
var n1=0;
var result= n1%2;
var resultValue=result==0?"given no is even":"given no is odd";
console.log(" given no is: 0");
console.log(resultValue);
var n1=101;
var result= n1%2;
var resultValue=result==0?"given no is even":"given no is odd";
console.log(" given no is: 101");
console.log(resultValue);
console.log(` `);
console.log("---------------------------------------step 3---------------------------------------------");
function wordLength(str){
console.log(`given string is:${str}`);
var length = str.length;
console.log("Length of given string is:",length);
var result = length %2 == 0 ? "given string is even" : "given string is odd";
console.log(result);
console.log(` `);
return result
}
wordLength("JavaScript")
wordLength("Developer")
wordLength("Google")


 
 