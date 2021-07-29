const fs = require('fs')
const userString = fs.readFileSync('./db/user.json').toString()
const userArray = JSON.parse(userString)
// console.log(userArray)
// console.log(userString)
//读数据库

const user3 = {
  id: 3,
  name: "fang",
  password: "yyy"
}
userArray.push(user3)
console.log(userArray)
const string = JSON.stringify(userArray)
fs.writeFileSync('./db/user.json', string)