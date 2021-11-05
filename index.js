// Write your solution in this file!

const employee = {name: "Kevin", streetAddress: "14460 Gravett Road"}

function updateEmployeeWithKeyAndValue(employee, key, value) {
//returns an employee with the original key value pairs and the new key value pair
//it does not modify the original employee, but rather returns a clone with the new data
    const newObject = {...employee}
    newObject[key] = value
    return newObject    
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value   
    return employee    
}

function deleteFromEmployeeByKey(employee, key) {
    const newObject = {...employee}
    delete newObject[key]
    return newObject    
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee    
}