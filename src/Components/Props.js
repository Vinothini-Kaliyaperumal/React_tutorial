// CLASS BASED PROPS METHOD

// import React from 'react';
// import ReactDom from 'react-dom';

// class Learnreactpropsparant extends React.Component
// {
//    render()
//    {
//         return <h1>Learn {this.props.topic} {this.props.concept} in {this.props.language}</h1>
//     }
// }

// // class Learnreactpropschild extends React.Component
// // {
// //    render()
// //    {
// //     const v={topic:"react", language:"english", concept:"props"}
// //     return <Learnreactpropsparant var={v}/>
// //     }
// // }
// Learnreactpropsparant.defaultProps={concept:"props",language:"tamil"}
// ReactDom.render(<Learnreactpropsparant concept="Tutorial" />, document.getElementById('root'));

// export default Learnreactpropsparant;






// FUNCTION BASED PROPS METHOD

import React from 'react'
// Props Method:
// function User(props) {
//   return (
//     <div>
//       <h1>{props.name}</h1>
//       <h1>{props.age}</h1>
//       <h1>{props.phoneNo}</h1>
//       <h1>{props.email}</h1>
//     </div>
//   )
// }

// Js Destructuring method: Props ah eptium use pannalam
function User({name, age, No, email}) {
  return (
    <div>
      <h1>{name}</h1>
      <h1>{age}</h1>
      <h1>{No}</h1>
      <h1>{email}</h1>
    </div>
  )
}


function Props() {
    const userData ={
        name:"Vino",
        age:"21",
        No:"7654321234",
        email:"kvino@gmail.com",
    }; 

  return (
    <div>
      <User 
      // name = {userData.name}
      // age = {userData.age}
      // phoneNo = {userData.No}
      // email = {userData.email}

      // another method:
      {...userData}
      />
    </div>
  )
}

export default Props;


