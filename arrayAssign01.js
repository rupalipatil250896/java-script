const fruits_seasonal=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`===== step 1 =====================================================================`);
console.log(`Original array:${fruits_seasonal}`);
const firstelement = fruits_seasonal[0];
console.log(`First element of array is: ${firstelement}`);
const lastelement = fruits_seasonal[4];
console.log(`Last element of array is: ${lastelement}`)
console.log(`===== step 2 ===========================================`);
console.log(`===== Add papaya before the element "Banana" =============================`);
const fruits_seasonal1=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal1}`);
fruits_seasonal1.unshift("Papaya");
console.log(fruits_seasonal1);
console.log(`===== step 3 =============================================`);
console.log(`===== Remove "Mango"  =======================================`);
const fruits_seasonal2=["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal2}`);
fruits_seasonal2.splice(3,1)
console.log( fruits_seasonal2);
console.log(`===== step 4 =============================================`);
console.log(`===== Add "Pineapple" at the last position =================================`);
const fruits_seasonal3 =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal3}`);
fruits_seasonal3.push("Pineapple")
console.log( fruits_seasonal3);
console.log(`===== step 5=============================================`);
console.log(`===== Add Dragon fruit =======================================`);
const fruits_seasonal333 =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal333}`);
fruits_seasonal333.splice(4,0,"Dragon fruit")
console.log(fruits_seasonal333);
console.log(`===== step 6 ===============================================`);
console.log(`====="Replace Orange with Kiwi"===========================================`);
const fruits_seasonal11 =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal11}`);
fruits_seasonal11.splice(1,1,"Kiwi")
console.log( fruits_seasonal11);
console.log(`===== step 7 ===========================================`);
console.log(`===== Log the element from index 1 to 4=======================================`);
const fruits_seasonal22 =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal22}`);
const element= fruits_seasonal22.slice(1,4)
console.log( element)
console.log(`===== step 8======================================`);
console.log(`===== Log the last 3 elements=====================================`);
const fruits_seasonal33 =["Banana","Orange","Apple","Mango","Water Melon"];
console.log(`Original array:${fruits_seasonal33}`);
fruits_seasonal33.splice(0,2)
console.log(fruits_seasonal33);
console.log("=====================================================");


