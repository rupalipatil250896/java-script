console.log('-------------------------------------step 1-----------------------------------------------------');
const arrayNumbers = [20,31,40,25,23,1,29,9,60,2,11];
const element = arrayNumbers.length;
console.log(`Total element in array is:${element}`);
console.log('-----------------------------------------step 2---------------------------------------------------');
console.log('Original array:');
const arrayNumbers1 = [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers1);
const indexoffirst = arrayNumbers1 [0];
console.log(`First element :${indexoffirst}`);
const indexoflast = arrayNumbers1 [10];
console.log(`Last element :${indexoflast}`);
console.log('----------------------------------------step 3----------------------------------------------------');
console.log('Original array:');
const arrayNumbers2 = [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers2);
const array = arrayNumbers1.splice(8,10);
 console.log(`Last 3 element:${array}`);
 //console.log('----------------------------------------step 4----------------------------------------------------');
//console.log('Original array:');
//const arrayNumbers3 = [20,31,40,25,23,1,29,9,60,2,11];
//for (const array1 of arrayNumbers3) {
  // const result = array1%2;
//}
//console.log( result);
//console.log('----------------------------------------step 5----------------------------------------------------');
//console.log('Original array:');
//const arrayNumbers4 = [20,31,40,25,23,1,29,9,60,2,11];
console.log('----------------------------------------step 8----------------------------------------------------');
console.log('Original array:');
const arrayNumbers8 = [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers8);
let sum = 0;
for (const x in arrayNumbers8) {
    
        console.log(arrayNumbers8[x]);
        sum = sum + arrayNumbers8[x]
    
}
console.log(`sum of all element:${sum}`);
console.log('----------------------------------------step 8----------------------------------------------------');
console.log('Original array:');
const arrayNumbers9= [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers9);
let num = 0;
for (const x1 in arrayNumbers9){
        
       console.log(arrayNumbers9[x1]); 
       if (num % 5==0) {
        console.log(arrayNumbers9[x1]);
       } 
    
}
console.log('----------------------------------------step 10----------------------------------------------------');
console.log('Original array:');
const arrayNumbers10= [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers10);
const A=arrayNumbers10.includes(115)
console.log(`The number 115 is avaibler:${A}`);
console.log('----------------------------------------step 11----------------------------------------------------');
console.log('Original array:');
const arrayNumbers11= [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers11);
const B=arrayNumbers11.includes(23)
console.log(`The number 23 is avaibler:${B}`);
console.log('----------------------------------------step 12----------------------------------------------------');
console.log('Original array:');
const arrayNumbers12= [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers12);
const C=arrayNumbers12.splice(3,2,66,55)
console.log(`insert number:${arrayNumbers12}`);
console.log('----------------------------------------step 13----------------------------------------------------');
console.log('Original array:');
const arrayNumbers13= [20,31,40,25,23,1,29,9,60,2,11];
console.log(arrayNumbers12);
const D=arrayNumbers13.splice(4,10)
console.log(`insert number:${arrayNumbers13}`);