import React from 'react'

function Lists() {

    let numbers = [11, 22, 33, 44]
    let fruits = ['Apple', 'Orange', 'Grapes']
    let students = [
        {
            id : 1,
            name : "student 1"
        },
        {
            id : 2,
            name : "student 2"
        }
    ]
   

    // Single line:
    // let result = fruits.map(fruit => <h1>{fruit}</h1>)


    // Multiple lines:
    let result = fruits.map((fruit,index) => {
        return(
            <div key={index}>
                <h1>{fruit}</h1>
                <p>This is my fav fruits</p>
            </div>
        )
    })

    let student_data = students.map(student => <h1 key={student.id}>{student.name}</h1>)

  return (
    <div>
      {numbers}
      {fruits}
      {result}
      {student_data}
    </div>
  )
}

export default Lists
