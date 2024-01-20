const arrayNumbers =[20,11,40,25,23,11,9,31,60,2,19]
console.log(`----------------step 1-------------------------------------`);
console.log(`----------------Add 10 into each element in array-------------------------------------`);
console.log(`original Array => ${arrayNumbers}`);
const arrayTrans = arrayNumbers.map( (currentValue) => {
    return currentValue + 10;
} )
console.log(`Add 10 into each element in array => ${arrayTrans}`);
console.log(``);
console.log(`----------------step 2-------------------------------------`);
console.log(`----------------Cube the each element in array-------------------------------------`);
console.log(`original Array => ${arrayNumbers}`);
const arrayTrans1 = arrayNumbers.map( (currentValue) => {
    return currentValue *currentValue*currentValue;
} )
console.log(`Cube the each element in array => ${arrayTrans1}`);
console.log(``);
console.log(`----------------step 3-------------------------------------`);
console.log(`----------------Add the index value of each element in array-------------------------------------`);
console.log(`original Array => ${arrayNumbers}`);
const arrayTrans11 = arrayNumbers.map( (currentValue,index) => {
   // return currentValue *currentValue*currentValue;
   console.log(`Index==> ${index},  Value==> ${currentValue}`);
} )
//console.log(`Index==> ${index},Value==> ${currentValue}`);