// import React from 'react'

// Spread Operator:
function SpreadOperator() {
  let numbers = [11, 12, 13]
  const numbers1 = [14, 15, 16]
  numbers = [...numbers,...numbers1]
  console.log(numbers)
  console.log(...numbers)


  let obj = {
    name : "Appu",
    age : '1'
  }
  obj = {...obj, id : "4", name : "Sandy"}
  console.log(obj)


//   Template String:
let userName = "Vasantha"
let userAge = "45"

console.log('Hi' + ' '+ userName + ' ' + 'your age is' +' ' +  userAge)
console.log(`Hi ${userName} your age is ${userAge}`)
}

export default SpreadOperator
