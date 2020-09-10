import React from 'react'
// Functional Components


// function Greet(){
//   return <h1>Hello Chakshu</h1>
// }
// export const Greet = ({heroName,name}) => {

// return (
//   <div>
//     <h1>Hello {name} a.k.a {heroName}</h1>
//     {/* {props.children} */}
//   </div>
// )
// }
export const Greet = (props) => {
  const {name,heroName} = props
  return (  
    <div>
      <h1>Hello {name} a.k.a {heroName}</h1>
      {/* {props.children} */}
    </div>
  )
  }
// export default Greet