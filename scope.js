// window global object 
a = 'javascript'
b ='Tutorial'
function letsLearnJs() {
    console.log(a,b)
    if(true){
        console.log(a , b)
    }
}
console.log(a,b)

function letsLearnScope() {
    // you can use let or const, but gravity is constant I prefer to use const
    const gravity = 9.81
    console.log(gravity)
}


//scope.js
let a1 = 'JavaScript' // is a global scope it will be found anywhere in this file
let b1 = 10 // is a global scope it will be found anywhere in this file
// Function scope
function letsLearnScope() {
  console.log(a1, b1) // JavaScript 10, accessible
  let value = false
// block scope
  if (true) {
    // we can access from the function and outside the function but 
    // variables declared inside the if will not be accessed outside the if block
    let a = 'Python'
    let b = 20
    let c = 30
    value = !value
    console.log(a, b, c, value) // Python 20 30 true
  }
  // we can not access c because c's scope is only the if block
  console.log(a1, b1, value) // JavaScript 10 true
}
letsLearnScope()
console.log(a1, b1) // JavaScript 10, accessible