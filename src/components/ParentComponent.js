import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class PArentComponent extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       parentName:'Parent'
    }
    this.greetParent= this.greetParent.bind(this)
  }
  greetParent(childName){
    alert(`Hello ${this.state.parentName} from ${childName}`)
  }
  render() {
    return (
      <div>
        <ChildComponent greetHanlder={this.greetParent}/>
      </div>
    )
  }
}

export default PArentComponent
