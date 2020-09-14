import React, { Component } from "react";
import LifecyleB from "./LifecycleB";

class LifecyleA extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Chakshu",
		};
		console.log("LifecycleA Component");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleA getDerivedStateFromProps");
		return null;
  }
  componentDidMount(){
    console.log('LifecycleA coponentDidMount');
  }

  shouldComponentUpdate(){
    console.log('LifecycleA shoudlComponentUpdate');
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleA getUPdate...');
    return null;
  }
  componentDidUpdate(){
    console.log('LifecycleA compoDidiupdate');
  }
  changeState= ()=>{
    this.setState({
      name:'Demon King'
    })
  }
  render() {
    console.log('LifecycleA Render');
		return <div> 
      <div > Lifecycle A <br/>

        <button onClick={this.changeState}>Change</button>
      </div>
      <LifecyleB/>
    </div>;
	}
}

export default LifecyleA;
