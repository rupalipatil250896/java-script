
 function swap(n1, n2){
    console.log("Before Swap", "n1->", n1, " n2->", n2,);
    var temp = n1;
    n1 = n2;
    n2=temp;

    console.log("After Swap", "n1->", n1, " n2->", n2 ,);
}
swap("sweety","cutie");

function swap1(n1, n2,n3){
    console.log("Before Swap", "n1->", n1, " n2->", n2,"n3->",n3);
    var temp = n1;
    n1 = n2;
    n2=n3;
    n3 = temp;
    console.log("After Swap", "n1->", n1, " n2->", n2 ,"n3->",n3)
}
swap1(100, 200,300);

var age = 32;
var result = typeof age;
console.log("Age =",age);
console.log("Type of age: ",result);
var city = "Pune";
var result = typeof city;
console.log("City =",city);
console.log("Type of city: ",result);
var isMarried = true;
var result = typeof isMarried;
console.log("IsMarried =",isMarried);
console.log("Type of IsMarried: ",result);




