// Scope

// Global Scope, Function Scope(Local), & Block Scope

// Global Scope => Accessible from anywhere

// Global Scope variables
var a = 5
let b = 15
const name = "Peter"

// function inspect_scope() {
//     console.log(`Global Scope Type ${a}`)
//     console.log(`Global Scope Type ${b}`)
//     console.log(`Global Scope Type ${name}`)
// }
// inspect_scope();

{
    // console.log(`Global Scope Type ${a}`)
    // console.log(`Global Scope Type ${b}`)
    // console.log(`Global Scope Type ${name}`)
}

// Function Scope(Local) => Variables declared inside a function
function my_func() {
    var last_name = "Muna"
    let car = "Audi"
    const age = 35

    // console.log(last_name);
    // console.log(car);
    // console.log(age);
}

my_func()

// Block Scope

{
    let student_one = "Brian"
    const student_two = "Ashlin"
    var students_number = 49

    
}

console.log(`Block Scope ${students_number}`)
