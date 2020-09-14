import React, { PureComponent } from 'react'
import MemoComp from './MemoComp'
import PureComp from './PureComp'
import RegComp from './RegComp'
//if class ParentComp extends PureComponent  
//{ no rerender of pparent component as stae is same for both the cases.}
// if class ParentComp extends Component  
//{ component rerender as its regualr nand not a pure component}

// pure component check whether the state is changed or not , IF changed then it rerenders , 
// IF not then it does not re render.
// it only works with class base components
class ParentComp extends PureComponent {
   constructor(props) {
     super(props)
   
     this.state = {
        name:'Chakshu'
     }
   }
   componentDidMount(){
     setInterval(()=>{
       this.setState({
         name:'Chakshu'
       })
     } ,2000)
   }
  render() {
    console.log("parent");
    return (
      <div>
        parent Component
        <MemoComp name={this.state.name} />
        {/* <RegComp name={this.state.name}/>
        <PureComp name={this.state.name}/> */}
      </div>
    )
  }
}

export default ParentComp
