var marriageEligibility =function(age,gender){
if (gender==Male && age>=21 || gender==Female && age>=18) {
   console.log(`gender,age=${age,gender} You are eligibil for marrage`); 

}else{
    console.log(`Sorry...you are not eligibil for marrage`);
}
}
marriageEligibility(21, male)