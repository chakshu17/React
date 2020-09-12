import React from 'react'

function ChildComponent(props) {
  return (
    <div>
      {/* <button onClick={props.greetHanlder}>Greet Parent</button> */}
      <button onClick={()=> props.greetHanlder('Child')}>Greet Parent</button>
    </div>
  )
}

export default ChildComponent
