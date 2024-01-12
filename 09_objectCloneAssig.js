console.log(`----------------step 1-------------`);
console.log(`---------------create object bankSbi------------`);

const bankSbi={
bankName:"SBI",
place:"Paithan",
branch:"sambhajinagar",
address:"hanuman nagar paithan"
}
console.log(bankSbi);
console.log(`---------------------step 2-----------------------`);
console.log(`-------------------create the object bankLocation--------------------`);
const bankLocation={
    street:"Mudhalwadi,Maharashtra",
    city:"paithan",
    pin:431148
}
console.log(bankLocation);
console.log(`---------------------step 3-----------------------`);
const bank = Object.assign({}, bankSbi,bankLocation)
bank.place = "verul";
console.log(`Clone the object bankSbi and bankLocation===>`);
console.log(bank);
console.log(bankSbi,bankLocation);
console.log(`----------------Step 4-----------------`);
const ratrOfInterest={
    homeLoanInterest:8.5,
    personalLoanInterest:6,
    dueInterest:2.3
}
console.log(ratrOfInterest);
console.log(`--------------------------step 5--------------------------`);

 const bankSbi1 = {
        bankName:"SBI",
        place:"Paithan",
        branch:"sambhajinagar",
        address:"hanuman nagar paithan"
        }  
       const bankLocation1 = {
            street:"Mudhalwadi,Maharashtra",
            city:"paithan",
            pin:431148
        }
       const ratrOfInterest1={
            homeLoanInterest:8.5,
            personalLoanInterest:6,
            dueInterest:2.3
        }
    

const mergeObj = Object.assign({}, bankSbi1, bankLocation1,  ratrOfInterest1,);
console.log(bankSbi1)
console.log(bankLocation1);
console.log(ratrOfInterest1);
console.log(mergeObj);
console.log(`---------------------------step 6------------------------`);
console.log(`-------------------Traverse the merged object-----------------------------`);
for (const key in mergeObj) {
    if (Object.hasOwnProperty.call(mergeObj, key)) {
        const element = mergeObj[key];
        console.log(element);
        
    }
}
