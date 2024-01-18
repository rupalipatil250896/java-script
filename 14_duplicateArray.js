console.log(`-----------------------step 1-------------------------------`);
function unique(arr) {
    const result = [];
  
    for (const i of arr) {
      let noRepeat = true;
  
      for (const j of result) {
        if (i === j) {
          noRepeat = false;
          break;
        }
      }
  
      if (noRepeat) {
        result.push(i);
      }
    }
  
    return result;
}
console.log(unique([11,3,4,11,4,7,3]));
console.log(`------------------------step 2---------------------------------------------`);

function inputString(string){
  let outputString  = "";
  const words = string.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (word.length>1) {
      word = word.charAt(0).toUpperCase()+word.slice(1);
      word = word.slice(0,-1)+word.slice(-1).toUpperCase();
      
    }else{
      word= word.toUpperCase();
    }
    outputString  += word + " ";
  }
  console.log(`Result :${outputString}`);
}
inputString("how are you mate")