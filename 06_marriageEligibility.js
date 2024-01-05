var marriageEligibility =function(age){
    if (age>=21 || age>=18 || age==undefined || NaN(age)) { // Invalid Input
        console.log(` ${age} ==> Invalid Input...`);
    } else { // Fail or Pass 
            if (age>=21 && age >=18) {
                console.log(` ${age} You are eligibil for maeeage`); 
}else{
    console.log(`you are not eligibil for marrage`);
}
}   
}
marriageEligibility(18)