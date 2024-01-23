class Employee{
    constructor(emp_id,emp_name,emp_dept,emp_salary,emp_company){
        this.emp_id=emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}
const emp_anil = new Employee(22,"Anil","IT",50000,"TCS");
const emp_radha = new Employee(33,"Radha","HR",74000,"Wipro");
const emp_rishi = new Employee(55,"Rishi","Finance",47000,"TCS");
const emp_sonali = new Employee(66,"Sonali","Finance",45000,"Infy");
const emp_monika = new Employee(77,"Monika","IT",40000,"Wipro");
const emp_viny = new Employee(88,"Vinayak","IT",75000,"TCS");
const emp_mahi = new Employee(99,"Mahesh","HR",85000,"Infy");
const arryEmployee = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi];
console.log(`-------------------------step 1--------------------------------------------`);
const arrayEmps = arryEmployee.filter((element)=>{
    return element.emp_company== `Wipro`;
})
console.log(`Employee from Wipro company =>`);
arrayEmps.forEach(element => {
    console.log(`Employee name=>${element.emp_name},  Employee company=>${element.emp_company}`);

});
console.log(``);
console.log(`-----------------------step 2-------------------------------`);
const arrayEmps1 = arryEmployee.filter((element)=>{
    return element.emp_dept== `IT`|| element.emp_dept==`HR`;
})
console.log(`Employee from IT and HR Department =>`);
arrayEmps1.forEach(element => {
    console.log(`Employee name=>${element.emp_name},  Employee company=>${element.emp_dept}`);

});
console.log(``);
console.log(`-------------------------step 3-----------------------------------------------`);
const arrayEmps11 = arryEmployee.filter((element)=>{
    return element.emp_id>50
})
console.log(`Employee ID's greater than 50 =>`);
arrayEmps11.forEach(element => {
    console.log(`Employee name=>${element.emp_name},  Employee company=>${element.emp_dept}`);

});
console.log(``);
console.log(`---------------------------step 4-----------------------------------------`);
const arrayEmps111 = arryEmployee.filter((element)=>{
    return element.emp_name.startsWith("A")|| element.emp_name.startsWith("V")|| element.emp_name.startsWith("M")
})
console.log(`Employee name start with letter A,V,M`);
arrayEmps111.forEach(element => {
    console.log(`Employee name=>${element.emp_name},  Employee company=>${element.emp_dept}`);

})
console.log(``);
console.log(`-------------------------step 5----------------------------------------`);
const arrayEmps1111 = arryEmployee.filter(person => person.emp_dept);

const average = arrayEmps1111.reduce((total, next) => total + next.emp_salary, 0) / arrayEmps1111.length;
console.log(`The average salary of employee from all department==> ${average}`);
console.log(``);
console.log(`-------------------------step 6---------------------------`);
const arrayEmps11111 = arryEmployee.filter(person => person.emp_dept==`IT`);

const average1 = arrayEmps11111.reduce((total, next) => total + next.emp_salary, 0) / arrayEmps11111.length;
console.log(`The average salary of employee from IT department==> ${average1}`);
console.log(``);