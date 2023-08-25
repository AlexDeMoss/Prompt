import createPrompt from 'prompt-sync';
let prompt = createPrompt();

let employee = {}

let Corp = prompt("Corp: ");
if (!Corp) {
    console.error('Invalid Corp');
    process.exit(1);
}

employee.Corp = Corp;

let Position = prompt("Position: ");
if(!Position) {
    console.error(`Invalid position`);
    process.exit(1);
}

employee.lastName = Position;

let startDateYear = prompt("Employee Start Year (1990 - 2023): ");
startDateYear = Number(startDateYear);
// Check if it is a valid integer
if(!Number.isInteger(startDateYear)) {
    console.error('Enter a valid start date year');
    process.exit(1);
}
// Check if the number is in the range
if(startDateYear < 1990 || startDateYear > 2023) {
    console.error('Enter a valid start date year within the correct range');
    process.exit(1);
}

 let startDateMonth = prompt("employee Start Date Month (1-12): ");
 startDateMonth = Number(startDateMonth);
 // Check if it is a valid integer
 if (!Number.isInteger(startDateMonth)) {
    console.error('Enter a valid start date month');
    process.exit(1);
 }
 //check if the number is in the range
 if(startDateMonth < 1 || startDateMonth > 12) {
    console.error('Enter a start date month within the correct range');
    process.exit(1);
 }

 let startDateDay = prompt("Employee Start Date Day (1 - 31): ");
 startDateDay = Number (startDateDay);
 //check if it is a valid integer
if(!Number.isInteger(startDateDay)){
    consoleerror('Enter a valid start date day');
    process.exit(1);
}
//check if the number is in range
if(startDateDay < 1 || startDateDay > 31){
    console.error('Enter a start date day within the correct range');
    process.exit(1);
}

// Date elements are correct, lets create the date
employee.startDateDay = new Date(startDateYear, startDateMonth - 1, startDateDay);

let isActive = prompt("Is employee active (yes or no): ");

//Check if incorrect value was entered
if (isActive !== "yes" && isActive !== "no") {
    console.error('Enter a yes or no for employee active stats');
    process.exit(1);
}

employee.isActive = (isActive === "yes");

// Output Employee JSON

const json = JSON.stringify(employee, null, 2);
console.log(`Employee: ${json}`);
