console.log("============ Step 1=============");
function squareOfWorldLength(str)
{
var str="javascript";
console.log(`given string is:${str}`);
var result = str.length;

console.log(`Length of string is:${result}`,`The square of Lengthis:${str.length * result}`);

}

squareOfWorldLength("javascript");
console.log("==================================================================");
var str="Google Chrome"
console.log(`given string is:${str}`);
var result = str.length;
console.log(`Length of string is:${result}`,`The square of Lengthis:${str.length * result}`);
console.log(" ");

console.log("==========================================================================");
var str="Developer Smart"
console.log(`given string is:${str}`);
result = str.length;
console.log(`Length of string is:${result}`,`The square of Lengthis:${str.length * result}`);
console.log("==============step2==============");
var str = "I am Angular developer";
console.log(`given string is:${str},And the length of string is${str.length}`);
var word = str.split(" ").length;
console.log(`The total number of word in string are ${word}. `);

var divided = str.length / word;
console.log(`The result division is:${divided}`);


var multi = str.length * word;
console.log(`The result multification is:${multi}`);

