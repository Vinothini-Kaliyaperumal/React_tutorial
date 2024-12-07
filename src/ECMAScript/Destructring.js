// import React from 'react'
// Object Destructring:
function Destructring() {
  return{
    name : 'pizza',
    size : '10',
    topping : 'Chesse'
}
}
  const snack = Destructring()
  const {topping, name, size } = snack
  console.log(topping, name, size)


  // Array Destructring:
function Destructrings() {
  return[
     'pizza',
     '10',
     'Chesse'
]
}
  const numbers = Destructrings()
  const [a, b] = numbers
  console.log(a, b)


const functionComponent = ({age}) => {
  console.log(age)
}

functionComponent({name : "Vino", age : "21"})

export default Destructring
