function vowelsCount(str){
    let string = str;
    console.log(`The given string is ${string}`);
    let totalvowels = 0;
    for (let index = 0; index < string.length; index++) {
        let char = string.charAt(index).toLowerCase();
        if (char == "a"||char == "e"||char == "i"|| char == "o"||char == "u") {
            totalvowels = totalvowels+1;
            
        }
        
    }
    console.log(`In the given string total vowels avaible are:${totalvowels}`);
}
vowelsCount("I am Very good IT Developer ")
console.log(`----------------------------step 2---------------------------`);
function cubeCalculate(){
    let total = 0;
    for (let index = 1; index <=5; index++) {
        total = total + index * index * index;
        
    }[]
    console.log(`The total sum of cube of number from 1 to 5 : ${total} `);
}
cubeCalculate();
console.log(`-------------------------------------step 3--------------------------------------`);
function oddPositionedChar(str){
    console.log(`The given string is : ${str}`);
   result = " ";
    for (let index = 0; index < str.length; index++) {
       // let char = str.charAt(index);
        if (index%2==1 || index != " ") {
            result = result + str.charAt(index)
         //  console.log(char);
        }
        console.log(result);
        
    }

}
oddPositionedChar("Hard Works Always Pay Back")
//oddPositionedChar("Soon I Will Angualr Developer")
