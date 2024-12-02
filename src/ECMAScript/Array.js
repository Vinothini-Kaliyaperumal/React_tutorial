import React from 'react'

function Array() {
    // forEach method
    const num = [1, 2, 3, 4, 5];
    num.forEach((a, i) => console.log(i + " " + a));

    // map method
    const nums = [1, 2, 3, 4, 5, 6];
    nums.map(a => console.log("NUM " + a))

    // filter
    const numss = [1, 2, 3, 4, 5, 6];
    const n = numss.filter(a =>{
        return(a===5);
    });
    console.log(n);
    

}

export default Array
