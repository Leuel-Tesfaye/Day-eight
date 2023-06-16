const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
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
      isLoggedIn: false,
      points: 40
    }
  }

// 1. find the person who has many skills in the users object 
let mostSkilledPerson = ''
let maxSkill = 0
for (const user in users){
  const numSkills = Object.keys(users[user].skills).length
      if(numSkills > maxSkill){
        maxSkill = numSkills
        mostSkilledPerson = user
      }
}
 console.log(mostSkilledPerson)

 // 2. Count logged in users, count users having greater than equal to 50 points from the following object.
  let countLogged = 0
  let isLoggedIn= ''
  let countPoint = 0
  for(const user in users ){
    if(users[user].isLoggedIn === true){
      countLogged ++
    }
    if(users[user].points >= 50){
      countPoint ++
    }
  }
  console.log(`users logged in :${countLogged}`)
  console.log(`users who has more than 50 points : ${countPoint}`)

 // 3. Find people who are MERN stack developer from the users object
let find = 0 
let stack = [ 'MongoDB', 'Express', 'React', 'Node']

for (let user in users){
  if (stack.every(skill => users[user].skills.includes(skill))) {
    find++;
  }
}
console.log(`This is developer is a mern stack developer ${find}`) 

// exercise level 3. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.

