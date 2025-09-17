// Arrays - A data structure used to store values/ elements in a single variable

const students_list = ["Taran", "Miguel", "Angela", "Peter", "James", 52, true]

console.log(students_list);

// Object - a collection of properties and values

const student = {
    first_name: "Brian",
    last_name: "Melita",
    grade: 98,
    pass: true
}
console.log(student);

// Adding elements to an array
// .push() -- Adds elements to the end of an Array
// .unshift() -- Adds elements to the start of an Array

students_list.push("Samuel");
console.log(students_list)

students_list.unshift("Fridah");
console.log(students_list)

let nameOfStudent = "Miguel"



// Removing elements from an array
// .pop() -- Remove the last element of an array
// .shift() -- Remove the First element of an array

students_list.pop()
console.log(students_list)

students_list.shift()
console.log(students_list)


// Loops used to repeatedly execute a certain block of code until a certain condition has been met

// Syntax of loop(JS)
// for (initialzation; condition; Increment/Decrement) {
//     // block
// }

// for (let i = 5; i >= -50; i--) {
//     console.log("Iteration Number :" + i)
// }

for (i = 0; i < students_list.length; i++) {
    console.log(students_list[i])
}