console.log(`-------------------step 1,2,3----------------------`);

let professor = {
    Name : "Dinesh",
    Age : 30,
    Degree : "MSc",
    Collage : "D.N.Collage,Faizpur",
    Address : "Paithan" ,
     certificate:['Hacker Rank Participation','Certificatr in Adv Programming','Certificate in IFFcourse'],
    
}
let Degree={
    Enegineering:'CSC',
    PHD:'Adv Computing',
    DLitt:"Writing",
    MPhill : "research project",
   
}
console.log(professor);
console.log(Degree);
console.log(professor.certificate);
console.log(`--------------------------------------step 4--------------------------------------`);
totalExperience={
   Experience : "14 years"
}
console.log(`Add new property totalexperience`);
console.log(totalExperience);
console.log(`-----------------------------------step 5-----------------------------------`);
console.log(`Modify age value`);
professor.Age = 32
console.log(professor);
console.log(`-----------------------step 6-------------------------------`);
console.log(`Add Oracle Certificate at index 2`);
professor.certificate.splice(2,0,"Oracle Certificate");
console.log(professor.certificate);
console.log(`----------------------------------step 7---------------------------------------`);
console.log(`Last element of array`);
let lastElement=professor.certificate[3];
console.log(lastElement);
console.log(`------------------------------step 8----------------------------------------`);
console.log(`Traverse the array using for of loop`);
for (const key in professor.certificate) {
    if (Object.hasOwnProperty.call(professor.certificate, key)) {
        const element = professor.certificate[key];
        console.log(`Key ==> ${key}, Value ==> ${element}`);
    }
}





