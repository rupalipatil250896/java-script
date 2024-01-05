var tcs=function(gradScore,hscScore,sscScore,candidateName){
if (gradScore>=70,hscScore>=80,sscScore>=90) {
    console.log(`Congrates ${candidateName} you are eligible for TCS interview `);
} else {
    console.log(`Unfortunately you are not eligible for interview`);
}
}
tcs(80,86,90,"Rupali")
tcs(70,65,55,"Punam")   
tcs(60,79,88,"Nayana")
