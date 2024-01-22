// MADAM
console.log(`--------------------step 1-----------------------------`);
//const isPalindrome = function(word){
    let checkPalindrom =(String)=>{
        return String=== String.split("").reverse().join("");
    }

//}
const result = checkPalindrom("MADAM");
console.log(`MADAM is Palindrome : ${result}`);
const result1 = checkPalindrom("DAD");
console.log(`DAD is Palindrome : ${result1}`);
const result2 = checkPalindrom("HELLO");
console.log(`HELLO is Palindrome : ${result2}`);
// ANAGRAM
console.log(`--------------------------step 2--------------------------------`);
// 'heart' and 'earth' are anagrams.
const str1 = 'silent'; // Sort in ascending order ==>  aehrt
const str2 = 'listen'; // Sort in ascending order ==> aehrt

const resultStr1 = str1.split("").sort().join("");
const resultStr2 = str2.split("").sort().join("");
console.log(`silent and listen is Anagram => ${resultStr1==resultStr2 ? true : false}`);
const str11 = 'such'; // Sort in ascending order ==>  aehrt
const str22 = 'much'; // Sort in ascending order ==> aehrt

const resultStr11 = str11.split("").sort().join("");
const resultStr22 = str22.split("").sort().join("");
console.log(`such and much is Anagram => ${resultStr11==resultStr22 ? true : false}`);
const str111 = 'hello'; // Sort in ascending order ==>  aehrt
const str222 = 'world'; // Sort in ascending order ==> aehrt

const resultStr111 = str111.split("").sort().join("");
const resultStr222 = str222.split("").sort().join("");
console.log(`hello and world is Anagram => ${resultStr111==resultStr222 ? true : false}`);