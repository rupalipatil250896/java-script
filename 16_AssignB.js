







 console.log(`=================== 16_AssignB.js===================`);
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

console.log(`============================ Step 1 ============================`);
 for (const emp of arryEmployee) {
     if (emp.emp_company == "TCS") {
         console.log(`employee name:${emp.emp_name},employee company:${emp.emp_company}`);
     } 
  }
  console.log(``);
  console.log(`============================ Step 2  ===============================================`);
  for (const emp of arryEmployee) {
     if (emp.emp_dept=="Finance") {  
         console.log(`employee name:${emp.emp_name},employee department:${emp.emp_dept}`);
     } 
  }
  console.log(``);
  console.log(`============================ Step 3  ==================================================`);
  for (const emp of arryEmployee) {
     if (emp.emp_name.startsWith('R')) {
         console.log(`employee id:${emp.emp_id},empoyee name:${emp.emp_name},department:${emp.emp_dept},salary:${emp.emp_salary},company:${emp.emp_company} `);
     } 
  }
  console.log(``);
  console.log(`============================ Step 4  ========================================`);
  for (const emp of arryEmployee) {
     if (emp.emp_salary > 50000 ) {
         console.log(`employee name:${emp.emp_name},company:${emp.emp_company},salary:${emp.emp_salary}`);
     } 
  }
  console.log(``);
  console.log(`============================ Step 5  =========================================`)
  for (const emp of arryEmployee) {
    if (emp.emp_salary >= 50000 && emp.emp_dept=="IT"){
        console.log(`employee id:${emp.emp_id},employee name:${emp.emp_name},department:${emp.emp_dept},salary:${emp.emp_salary},company:${emp.emp_company}`);    
    } 
 }
 console.log(``);
 console.log(`============================ Step 6  ===============================================`);
 for (const emp of arryEmployee) {
      if (emp.emp_company=="Infy"){
       console.log(`employee id:${emp.emp_id},employee name:${emp.emp_name},department:${emp.emp_dept},salary:${emp.emp_salary},company:${emp.emp_company}`);       
    }
    }

