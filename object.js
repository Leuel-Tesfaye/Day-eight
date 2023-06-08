// objects : everything can be an object and objects do have properties and properties do have values : 
let student = { // student is an object 
    firstName :'prince', // first name and last name are the properties of the object : student 
    lastName : 'Hope'  , // hope and prince are the values ofr the properties 
    skills :[
        'Html',
        'Css',
        'Javascript',
        'React'
    ]
}
console.log(student)

/**Getting values from an object
We can access values of object using two methods:

 1. using . followed by key name if the key-name is a one word
 2. using square bracket and a quote */

 let PersonalInfo = { 
    firstName :'prince', 
    lastName : 'Hope'  , 
    skills :[
        'Html',
        'Css',
        'Javascript',
        'React'
    ],
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}
// The first method to access values of object is 
console.log(PersonalInfo.skills)
console.log(PersonalInfo.getFullName())

// The second method to access values of an object is: 
console.log(PersonalInfo['lastName'])

// Setting new key for an object
// an object is a mutable data structure and we can modify the content of an object after it's created 

let person = { 
    firstName :'prince', 
    lastName : 'Hope'  ,
    skills :[
        'Html',
        'Css',
        'Javascript',
        'React'
    ],
    getFullName : function () {
        return `${this.firstName} ${this.lastName}`
    }
}
person.nationality = 'Ethiopian'
person.skills.push('Sass')
person.skills.push('Git Knowledge')
person.isMarried = false
console.log(person)

// object methods 
// Object.assign: To copy an object without modifying the original object

let portfolio = {
    firstName :'prince', 
    lastName : 'Hope'  ,
   skills :[ 'Html, Css , Javascript'],
   address :{
        city: 'Dessie',
        subCity : 'Menafesha',
   },
   getPersonInfo : function () {
    return  `My name is ${this.firstName} ${this.lastName} And I have the skills ${this.skills} `
   }
}
//Object methods: Object.assign, Object.keys, Object.values, Object.entries
//hasOwnProperty

let copyPerson = Object.assign({},portfolio)
console.log(copyPerson)

// Object.keys: To get the keys or properties of an object as an array
const keys = Object.keys(portfolio)
console.log(keys)

// Object.values:To get values of an object as an array
const values = Object.values(portfolio)
console.log(values)
const skillsValue = Object.values(portfolio.skills)
console.log(skillsValue)

// Object.entries:To get the keys and values in an array
const entry = Object.entries(person)
console.log(entry)
// hasOwnProperty: To check if a specific key or property exist in an object
console.log(PersonalInfo.hasOwnProperty('name'))
console.log(PersonalInfo.hasOwnProperty('skills'))

