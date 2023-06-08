// 1. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
let dog = {
    name : 'Jack',
    legs : 'Four',
    color : 'White',
    age : '6',
    bark : function () {
        return `${this.name} woof woof`
    }
}
console.log(dog.bark())

// 2. Get name, legs, color, age and bark value from the dog object
const value = Object.values(dog)
console.log(value)

// 3. Set new properties the dog object: breed, getDogInfo
dog.breed = 'PitBull'
console.log(dog)
dog.getDogInfo = function() {
    return `${this.dog}`
}
console.log(dog)

// Exercises: Level 2
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    jack: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: true,
      points: 40
    }
  }

// 1 . Find the person who has many skills in the users object.

let mostSkilledPerson = '';
let maxSkills = 0;

for (const user in users) {
  const numSkills = Object.keys(users[user].skills).length;
  if (numSkills > maxSkills) {
    maxSkills = numSkills;
    mostSkilledPerson = user;
  }
}

console.log(mostSkilledPerson);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.

let countLoggedIn = 0
let countPoints = 0
for(let user in users ){
  if(users[user].isLoggedIn){
    countLoggedIn ++
  }
  if(users[user].points){
    countPoints ++
  }
}
console.log(`users logged in : ${countLoggedIn}`)
console.log(`users points counted : ${countPoints}`)

// Find people who are MERN stack developer from the users object

let find = 0
let stack = ['MongoDB', 'Express', 'React', 'Node'];
for(let user in users){
  if (stack.every(skill => users[user].skills.includes(skill))) {
    find++;
}
}
console.log(`Back end stack developer: ${find}`)

// Set your name in the users object without modifying the original users object
let setName = Object.assign({name: "leuel"},users)
console.log(setName)

// Get all keys or properties of users object
let GetKeys = Object.keys(users)
console.log(`All the keys of user object : ${GetKeys}`)

// Get all the values of users object
let GetValues = Object.values(users)
console.log(GetValues)


// exercise level 3 
/** Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description. */
let personAccount = {
  firstName : 'prince',
  lastName : 'Hope',
  incomes : ['$2700', '$200', '400'] ,
  expenses: '$700'
}
console.log(personAccount)

// **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()
const user = [
  {
      _id: 'ab12ex',
      username: 'Alex',
      email: 'alex@alex.com',
      password: '123123',
      createdAt:'08/01/2020 9:00 AM',
      isLoggedIn: false
  },
  {
      _id: 'fg12cy',
      username: 'Asab',
      email: 'asab@asab.com',
      password: '123456',
      createdAt:'08/01/2020 9:30 AM',
      isLoggedIn: true
  },
  {
      _id: 'zwf8md',
      username: 'Brook',
      email: 'brook@brook.com',
      password: '123111',
      createdAt:'08/01/2020 9:45 AM',
      isLoggedIn: true
  },
  {
      _id: 'eefamr',
      username: 'Martha',
      email: 'martha@martha.com',
      password: '123222',
      createdAt:'08/01/2020 9:50 AM',
      isLoggedIn: false
  },
  {
      _id: 'ghderc',
      username: 'leuel',
      email: 'thomas@thomas.com',
      password: 'password',
      createdAt:'08/01/2020 10:00 AM',
      isLoggedIn: false
  }
  ];

  const products = [
{
  _id: 'eedfcf',
  name: 'mobile phone',
  description: 'Huawei Honor',
  price: 200,
  ratings: [
    { userId: 'fg12cy', rate: 5 },
    { userId: 'zwf8md', rate: 4.5 }
  ],
  likes: []
},
{
  _id: 'aegfal',
  name: 'Laptop',
  description: 'MacPro: System Darwin',
  price: 2500,
  ratings: [],
  likes: ['fg12cy']
},
{
  _id: 'hedfcg',
  name: 'TV',
  description: 'Smart TV:Procaster',
  price: 400,
  ratings: [{ userId: 'fg12cy', rate: 5 }],
  likes: ['fg12cy']
}
]

// Imagine you are getting the above users collection from a MongoDB database. a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
/**let users2 = [];
let signUp = () =>{
  let id = Math.random()
  let username = prompt('Enter username')
  let email = prompt('Enter email')
  let password = prompt('Enter password')
  let isLoggedIn = false

  for(let user in users2){
    if(user.username === username){
      console.log('User already exist !! ')
      return 
    }
  }

  let newUser = {id, username, email, password, isLoggedIn}
  users2.push(newUser)
  console.log(newUser)
  console.log('user registered successfully !')
}
signUp() **/
//  Create a function called signIn which allows user to sign in to the application
let users3 = [
  {
    userName : 'leuel',
    password : 'password'
  },
  {
    userName : 'tesfaye',
    password : 'passcode'
  }

];
let firstName = prompt('FirstName')
let password = prompt('Password')

let signIn = (userName, password) =>{
  for(let user of users3) {
    if(user.userName === firstName && user.password === password){
        console.log('You have successfully signed In !!')
        return true
    }
    else {
      console.log('username or password is incorrect')
      return false
    }
  }
  
}
signIn('leuel','password') 
signIn('tesfaye', 'passcode')