function reverseString(string){
    console.log(`The given string is : ${string}`);
  let result = " ";
  for (let  index =string.length-1; index >= 0;  index--) {
    if (string.charAt(index)!=" ") {
        result = result + string.charAt(index);
        
    };
    console.log(`The reverse string is : ${result}`);
    console.log(" ");
  }
}
reverseString("Hard Works Always Pay Back")