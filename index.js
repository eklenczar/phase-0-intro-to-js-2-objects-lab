const employee = {
    name: "Elizabeth",
    streetAddress: "Singh Dr"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newUpdate = {...employee, [key]:value};
    return newUpdate;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
} 
    

function deleteFromEmployeeByKey(employee, key) {
    const deleteKey = {...employee};
    delete deleteKey[key];
    return deleteKey;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}