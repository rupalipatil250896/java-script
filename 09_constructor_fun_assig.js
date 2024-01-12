console.log(`-------------------------------step 1,2--------------------------------------------`);
function Bank(bankName,location,ifcCode,branchCode){
    this.bankName=bankName;
    this.location=location;
    this.ifcCode=ifcCode;
    this.branchCode=branchCode;
    this.display = function(){
        console.log(`bankName: ${this.bankName}, location: ${this.location}, ifcCode: ${this.ifcCode},branchCode:${this.branchCode}`);
}
}
const yesBank = new Bank("yesBank","Sambhajinagar",123456667,96788544647);
console.table(yesBank);
const sbiBank = new Bank("sbiBank","Pune",123096667,89708544647);
console.table(sbiBank);
const mahBank = new Bank("mahBank","Mumbai",5673456667,4568544647);
console.table(mahBank);
const axisBank = new Bank("axisBank","Dhule",9876456667,123544647);
console.table(axisBank);
console.log(`----------------------------step3,4,5,6----------------------------------`);
Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";
Bank.prototype.BankName = "yesBank";
Bank.prototype.Branchcode = "96788544647";

console.log(`Open time is sbiBank:${sbiBank.openTime}`)
console.log(`Close time is sbiBank:${sbiBank.closeTime}`)
console.log(`Open time is axisBank:${axisBank.openTime}`)
console.log(`Close time is axisBank:${axisBank.closeTime}`)
console.log(`------------------------------step 7--------------------------------------`);
console.log(`Bank name:${yesBank.BankName},Branch Code:${yesBank. Branchcode},Opening time :${yesBank.openTime}`);