// creating an empty objet 
const student = {}

// creating an object with value 

const student1 = {
    name : "leuel",
    occupation : "web developer",
    techStack : [
        "Html, css , js , react ,native, php , figma, mongodb"
    ],
}
console.log(student1)

// getting value from objects 

const person = {
    firstName: "prince",
    lastName: "hope",
    age : '24',
    city : "Addis Ababa",
    skills: [
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node',
        'MongoDB',
        'Python',
        'D3.js'
      ],
      getFullName : function () {
        return `${this.firstName} ${this.lastName}`
      }
}
// accessing using . value 
console.log(person.firstName)
console.log(person.city)

// accessing value by using square brackets and the key name 
console.log(person['skills'])

// setting a new value for an object : we can modify the content of an object after it gets created 
person.age = '25'
person.skills.push('Sass')
console.log(person)

// object methods 
// the first object is object.assign to copy an object without modifying the original object 
const copyPerson = Object.assign({},person)
console.log(copyPerson)
// object keys: to get the keys or properties of an object as an array 
const keys = Object.keys(copyPerson)
console.log(keys)

// object.values to get the values of an object as an array 
const values = Object.values(copyPerson)
console.log(values)

// object. entries to get the keys and values as an array 
const entries = Object.entries(copyPerson)
console.log(entries)

// hasOwnProperty : to check if a key or property exist in an object 
console.log(copyPerson.hasOwnProperty('name'))
console.log(copyPerson.hasOwnProperty('firstName'))

