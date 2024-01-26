const arrayRollNumbers =[113,45,56,11,32,45,109,799,56,45];
console.log(`----------------step 1-----------------------`);
console.log(`Given array is==>${arrayRollNumbers}`);
arrayRollNumbers.reverse();
console.log(`Reverse array is==>${arrayRollNumbers}`);
console.log(`-----------------------step 2---------------`);
arrayRollNumbers.sort();
console.log(`After sorting is==>${arrayRollNumbers}`);
console.log(`-----------------------step 3------------------------------`);
const array =[113,45,56,11,32,45,109,799,56,45]
console.log(array);
console.log(`----------------- Array in ascending order ---------`);
array.sort((a, b)=> {
    return a>b ? 1 : -1;
});
console.log(array);
console.log(`-------------------step 4------------------------`);

const elementAtIndex9 = array[9];
console.log(`Gretest element in array  is: ${elementAtIndex9}`);
console.log(`----------------step 5--------------------------`);

const elementAtIndex0 = array[0];
console.log(`Smallest element in array  is: ${elementAtIndex0}`);
console.log(`--------------------step 6----------------------`);
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
console.log(unique([113,45,56,11,32,45,109,799,56,45]));


