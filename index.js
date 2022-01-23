function updateEmployeeWithKeyAndValue(obj, key, value) {
    return Object.assign ({}, obj, [key], value);
}

const employee = {name:'',
streetAddress: '12 Broadway'
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
    employee [key] = value;
    return employee;
}

function deleteFromEmployeeByKey(obj, key, value) {
    return Object.assign({}, obj, { [key]: value });
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return obj
}