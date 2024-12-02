import React from 'react'

function Destructring() {
  const snack = {
    name : 'pizza',
    size : '10',
    topping : 'Chesse'
  }
  const {name, size, topping} = snack
  console.log(name, size, topping)

}

export default Destructring
