console.log(`--------------------Arrow Function---------------------------------------------`);
console.log(`---------------------step 1----------------------------------`);
let message = ()=>{
    console.log("Good Morning , Today is Thursday");
}
message()
console.log(`----------------------step 2-----------------------------------------------`);
const mult=(n1,n2,n3=1)=>{
    let Multiplication=n1*n2*n3;
    console.log(`Multiplication is:${Multiplication}`);
}
mult(5,5,2)
mult(10,4)
console.log(`---------------------------step 3-------------------------------------------`);
const add = (a1,a2,a3,a4,a5)=>{
let C = a1+a2+a3+a4+a5;
console.log(`Addition is : ${C}`);
}
add(100,100,200,349,756)
add("I am ", "learning ", "ES6 ", "feature ", "in depth")
console.log();