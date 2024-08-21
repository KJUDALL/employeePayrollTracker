// CMD - OPT - J for console shortcut  
// 1. Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');
console.log(addEmployeesBtn);

// 2. Collect employee data
const collectEmployees = function () {
    // 3. TODO: Get user input to create and return an array of employee objects
            /* this makes sure the first set of entered data isn't overwritten. You have to create another variable for this in order to make sure each value is unique and not overwritten. That new variable is "newEmployee" */
    const myEmployees = [];

    do {
        let first = prompt("Employee First Name:")
        let last = prompt("Employee Last Name:")
      let salary = prompt("Employee Salary:")
      if(isNaN(salary)) {
        salary = 0;
      }
        const newEmployee = {
            firstName: first,
            lastName: last,
            salary: parseFloat(salary)
        }
        myEmployees.push(newEmployee);
    } while (confirm("Add Another Employee?"));
  return myEmployees;
    console.log(myEmployees)
};

// 4. Keep adding more employees until user chooses to stop
// 5. create array of employee's info (objects)
// every employee will have a field for first name, last name, and salary
// Default the salary to $0 if not a valid number. Use an is nan function

// Display the average salary
const displayAverageSalary = function (employeesArray) {
  // TODO: Calculate and display the average salary
  let sum = 0 //|| 'null' to account for blanks.. how to?
  for (i = 0; i < employeesArray.length; i++) {
    sum = sum + employeesArray [i].salary
  }
  console.log(`The average employee salary between our ${employeesArray.length} employee(s) is $${(sum / employeesArray.length).toFixed(2)}`)
};

// Select a random employee
const getRandomEmployee = function (employeesArray) {
  // TODO: Select and display a random employee
  const min = 0
  const max = employeesArray.length
  const randomIndex = Math.floor(Math.random() * (max - min) + min);
  console.log(`Congratulations to ${employeesArray[randomIndex].firstName} ${employeesArray[randomIndex].lastName}, our random drawing winner!`)
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

// can't figure out what this sort function is for
    employees.sort(function (a, b) {
    if (a.firstName < b.lastName) {
return -1;
    } else {
return 1;
    }
});

displayEmployees(employees);
};

// // Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);



     // Prompt user to enter data notes
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

    // these 2 loops - while (above) and do while (below) loops - work the same
    
        // let i = 0
        //     do {
        //         console.log(myEmployees[i])
        //     } while (i <= myArray.length);
        //     i++;

