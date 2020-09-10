import React from 'react'
// Functional Components


// function Greet(){
//   return <h1>Hello Chakshu</h1>
// }
export const Greet = (props) => {
console.log(props);
return (
  <div>
    <h1>Hello {props.name} a.k.a {props.heroName}</h1>
    {props.children}
  </div>
)
}
// export default Greet