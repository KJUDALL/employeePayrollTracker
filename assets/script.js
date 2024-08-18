// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
    console.log(addEmployeesBtn);
// Collect employee data
const collectEmployees = function () {
    // TODO: Get user input to create and return an array of employee objects

    // Prompt user to enter data
    // let firstName = prompt("Enter First Name:")
    // let lastName = prompt("Enter Last Name:")
    // let salary = prompt("Enter Salary:")

    // console.log(`first ${firstName}, last ${lastName}, salary ${salary}`)

    //console log doesn't need a ; to close it
    // while is a loop format like a for loop or for of loop
    // let i = 0;
    // while (i < myArray.length) {
    //     console.log(myArray[i]);
    //     i++;
    // }

    // these 2 while and do while loops work the same
    
    // let i = 0
    //     do {
    //         console.log(myArray[i])
    //     } while (i <= myArray.length);
    //     i++;

    // make sure the first entered data isn't overwritten. create another variable for tis
    const myEmployees = [];

    let first;
    let last;
    let salary;
    do {
        let first = prompt("Enter First Name:")
        let last = prompt("Enter Last Name:")
        let salary = prompt("Enter Salary:")
        const newEmployee = {
            firstName: first, 
            lastName: last,
            salary: salary
        } 
        myEmployees.push(newEmployee);
    } while (confirm("Add Another Employee?"));

    console.log(myEmployees)

    // Keep adding more employees until user chooses to stop

    // create array of employee's info (objects)

    // every employee will have a field for name, last name, and salary

    // Default the salary to $0 if not a valid number. Use an is nan function
};

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
};

/*
====================
STARTER CODE  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function (employeesArray) {
  // Get the employee table
const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement('tr');

    const firstNameCell = document.createElement('td');
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement('td');
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement('td');
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
}
};

const trackEmployeeData = function () {
const employees = collectEmployees();

console.table(employees);

displayAverageSalary(employees);

console.log('==============================');

getRandomEmployee(employees);

employees.sort(function (a, b) {
    if (a.lastName < b.lastName) {
return -1;
    } else {
return 1;
    }
});

displayEmployees(employees);
};

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
