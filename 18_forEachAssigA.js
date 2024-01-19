const arrayNumbers =[1,-7,40,502,-77,91,0,108,89,-601];
console.log(`-----------------------------step 1-------------------------------------------------`);
 arrayNumbers.forEach((currentvalue,index)=>{
   // console.log(`Original array :${arrayNumbers}`);
console.log(`Value=>  ${currentvalue} ,   Index=>  ${index}`);
 })
console.log(`--------------------------step 2----------------------------------------`);
 arrayNumbers.forEach((element)=>{
   // console.log(`Positive number in array is => ${element}`);  
    if (element>=0) {
      console.log(`Positive number in array is => ${element}`);  
    }
 })
 console.log(`-------------------------step 3------------------------------`);
 arrayNumbers.forEach((element)=>{
    if (element<0) {
      console.log(`Negative number in array is => ${element}`);  
    }
 })
 console.log(`--------------------------step 4--------------------------------------`);
 arrayNumbers.forEach((element)=>{
    if (element%2==0) {
      console.log(`Even  number in array is => ${element}`);  
    }
 })
 console.log(`-------------------------step 5------------------------------`);
 const sum =arrayNumbers.reduce((arrayNumbers,curentvalue)=>{
    return arrayNumbers + curentvalue;
});
console.log(`sum is=>${sum}`);
 //arrayNumbers.forEach((element)=>{
 //const sum=sum +=element
  
     // console.log(`Negative number in array is => ${sum}`);  
    
// })
 console.log(`--------------------------step 6--------------------------------------`);
 arrayNumbers.forEach((currentValue,index)=>{
    if (index%2==0) {
      console.log(`Even  index in array is =>   ${index},     value=>  ${currentValue}`);  
    }
 })
