// Lightning Exercise 1: Create an object that represents a bill from your doctor's office.
//  It should have the following 
//  properties: officeName, streetAddress, doctorName, patientName, visitDate, 
//  amountBilled, dueDate. You provide example values for each one.

const bill = {
    officeName: "Bills Dr.",
    streetAddress: "301 Plus Park",
    patientName: "Brenda",
    visitDate: "09/16/2019",
    amountBilled: "$100",
    dueDate: "09/18/2019"
}

//output with square bracket notation

const dateVisited = bill["visitDate"];
const owed = bill["amountBilled"];
const patient = bill["patientName"];

console.log(dateVisited);

// object.values

for (const value of Object.values(bill)){
    console.log(value); // only shows the values
}
for (const key of Object.keys(bill)){
    console.log(key); // only shows the keys 
}

for (const entry of Object.entries(bill)){
    console.log(entry[0], ":", entry[1]);  // combination of the key value pairs
}

