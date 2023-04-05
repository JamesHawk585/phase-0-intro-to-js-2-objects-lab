const employee = {
  name: "James",
  job: "Coder",
} 


/* employee.name = "John";

console.log(employee.name); */

// Returns a new employee object with the given key and value added
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return Object.assign({}, employee, { [key]: value });
}

// Updates the original employee object with the given key and value, and returns the updated object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Returns a new employee object with the given key removed
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = Object.assign({}, employee);
  delete newEmployee[key];
  return newEmployee;
}

// Removes the given key from the original employee object and returns the modified object
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
  
}

