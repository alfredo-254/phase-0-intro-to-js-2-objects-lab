const employee = {
  name: 'John Doe',
  streetAddress: '45 Luton',
};

// Function to update employee with a key and value without mutation
function updateEmployeeWithKeyAndValue(employee, key, value) {
  return {
    ...employee,
    [key]: value,
  };
}

// Function to destructively update employee with a key and value (mutates the original object)
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
  employee[key] = value;
  return employee;
}

// Function to delete a property from the employee without mutation
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

// Function to destructively delete a property from the employee (mutates the original object)
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
