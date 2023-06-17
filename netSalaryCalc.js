// Ask the user to input his basic salary 
console.log("Enter your gross salary");

// Ask the user to input his benefits.
console.log("Enter your benefits")

// Create a function called paye, pass the gross income as a parameter to determine how much that should be paid.

function paye (grossSalary){
    if (grossSalary < 24,000){
        console.log(grossSalary * 10/100);
    }
    else if (grossSalary >= 24,000 && grossSalary <= 32,333){
        console.log(grossSalary * 25/100);
    }
    else {
        console.log(grossSalary * 30/100);
    }

}
paye(grossSalary);


// Create a function called NHIFrates, pass the gross salary as a parameter to determine how much  NHIF Fee should be paid in ref to the salary.

function ratesNHIF(grossSalary){
    if (grossSalary >= 0 && grossSalary <= 5999){
        console.log('NHIF : 150');
    } 
    else if (grossSalary >= 6000 && grossSalary <= 7999){
        console.log('NHIF : 300');
    }
    else if (grossSalary >= 8000 && grossSalary <= 11999){
        console.log('NHIF : 400');
    }
    else if (grossSalary >= 12000 && grossSalary <= 14999){
        console.log('NHIF : 500');
    }
    else if (grossSalary >= 15000 && grossSalary <= 19999){
        console.log('NHIF : 600');
    }
    else if (grossSalary >= 20000 && grossSalary <= 24999){
        console.log('NHIF : 750');
    }
    else if (grossSalary >= 25000 && grossSalary <= 29999){
        console.log('NHIF : 850');
    }
    else if (grossSalary >= 30000 && grossSalary <= 34999){
        console.log('NHIF : 900');
    }
    else if (grossSalary >= 35000 && grossSalary <= 39999){
        console.log('NHIF : 950');
    }
    else if (grossSalary >= 40000 && grossSalary <= 44999){
        console.log('NHIF : 1000');
    }
    else if (grossSalary >= 45000 && grossSalary <= 49999){
        console.log('NHIF : 1100');
    }
    else if (grossSalary >= 50000 && grossSalary <= 59999){
        console.log('NHIF : 1200');
    }
    else if (grossSalary >= 60000 && grossSalary <= 69999){
        console.log('NHIF : 1300');
    }
    else if (grossSalary >= 70000 && grossSalary <= 79999){
        console.log('NHIF : 1400');
    }
    else if (grossSalary >= 80000 && grossSalary <= 89999){
        console.log('NHIF : 1500');
    }
    else if (grossSalary >= 90000 && grossSalary <= 99999){
        console.log('NHIF : 1600');
    }
    else {
        console.log('NHIF : 1700')
    }
}
ratesNHIF(glossSalary);


