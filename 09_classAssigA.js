console.log(`---------------------------------step 1-------------------------------------`);
class Vehical{
    constructor(Name,color,price,wheel,number){
    this.name = Name;
    this.color = color;
    this.price = price;
    this.wheel = wheel;
    this.number = number;
    } 
    getDetails(){
        console.log(`Name:${this.name},Color:${this.color},Price:${this.price},Wheel${this.wheel},Number${this.number}`);
    }
}
const car = new Vehical("MGAstor","Red","9.98 Lack",4,"MH12 JM6679")
console.log(`Vahical information==>${car.name}`);
car.getDetails();
console.log(``);
const Bike = new Vehical("Yamaha","Black","2.98 Lack",2,"MH14 JM6979")
console.log(`Vahical information==>${Bike.name}`);
Bike.getDetails();
console.log(``);
const Bike1 = new Vehical("Honda","Yellow","1.98 Lack",2,"MH10 GM57789")
console.log(`Vahical information==>${Bike1.name}`);
Bike1.getDetails();
console.log(``);
console.log(`Traversing array of Object...`);
const arrayVehical = [ car,Bike,Bike1 ];
for (const element of arrayVehical) {
    element.getDetails();
}
console.log(`-----------------------------------step 2------------------------------------------`);
class College{
    constructor(Name,staff,location,faculty){
    this.name = Name,
    this.staff = staff,
    this.location = location,
    this.faculty = faculty
    
   }
    getdisplay(){
        console.log(`Name:${this.name},staff:${this.staff},location:${this.location},faculty:${this.faculty}`);
    

    }

}

const  college = new College(" DN College","30","Faizpur",3,)
console.log(`College information==>${college.name}`);
college.getdisplay();
console.log(``);
const  college1 = new College(" MJ College","40","Jalgaon",6,)
console.log(`College information==>${college1.name}`);
college1.getdisplay();
console.log(``);
const  college2 = new College(" JT Mahajan College","45","Faizpur",8,)
console.log(`College information==>${college2.name}`);
college2.getdisplay();
console.log(`-------------------------------step 3-------------------------------------`);
const array=[college,college1,college2]
function traverseObject(arg){
for (const key in arg) {
    
        const element = arg[key];
        console.log(`key==>${key},Value==>${element}`);
        
    }
}
traverseObject(college);
console.log(``);
traverseObject(college1);
console.log(``);
traverseObject(college2);
console.log(``);