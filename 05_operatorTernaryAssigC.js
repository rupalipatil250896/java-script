console.log("*****************************************step 1**********************************************");
var maleMarriageEligibility = function(gender,age,boyname){
    var result = gender=="Male" && age>=21
    ? `hey ${boyname} you are eligible for marriage`
    : "Unfortunately - You are not eligible,please try next time";
    console.log(result);
    
}
maleMarriageEligibility("Male",25,"Billgates");
maleMarriageEligibility("Male",17,"Stew Jobs");
console.log(``);
console.log("********************************************step 2**************************************************************");
var femaleMarriageEligibility = function(gender,age,girlname){
    var result = gender=="Female" && age>=18
    ? `hey ${girlname} you are eligible for marriage`
    : "Unfortunately - You are not eligible,please try next time";
    console.log(result);  

}
femaleMarriageEligibility("Female",16,"Jenifer");
femaleMarriageEligibility("Female",27,"Malinda Gates");








