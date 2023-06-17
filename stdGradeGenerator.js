// The grade outputs should be graded in reference to the below grading system.
// A > 79,
// B - 60 to 79, 
// C -  59 to 49,
// D - 40 to 49, 
// E - less 40.


// Prompt the user to enter the student marks to be graded.
console.log("Enter student marks");   


// Create a function that will take in the student marks to grade them.
function studentGrader(grade){

    // Create a conditional statement to ascertain that the marks will be graded from 0 - 100.
if (grade >= 0 && grade <= 100) {

    // Use switch cases to execute the conditions and grade accordingly.
    switch (true) {
        case grade >= 79 && grade <= 100:
            console.log('A');
            break;
        case grade >= 60 && grade <= 79:
            console.log('B');
            break;
        case grade >= 49 && grade <= 59:
            console.log('C');
            break;
        case grade >= 40 && grade < 49:
            console.log('D');
            default: 
                console.log('E');
    }

    // The below condition gets executed if the marks input are not between 0-100.
}else {
        console.log('Invalid Marks!')
    }
}
// You call the function with students marks to grade them accordingly.
(studentGrader(96));