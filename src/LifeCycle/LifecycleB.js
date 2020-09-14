import React, { Component } from "react";

class LifecyleB extends Component {
	constructor(props) {
		super(props);

		this.state = {
			name: "Chakshu",
		};
		console.log("LifecycleB Component");
	}

	static getDerivedStateFromProps(props, state) {
		console.log("LifecycleB getDerivedStateFromProps");
		return null;
  }
  componentDidMount(){
    console.log('LifecycleB coponentDidMount');
  }
  shouldComponentUpdate(){
    console.log('LifecycleB shoudlComponentUpdate');
    return true
  }
  
  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log('LifecycleB getUPdate...');
    return null;
  }
  componentDidUpdate(){
    console.log('LifecycleB compoDidiupdate');
  }
	render() {
    console.log('LifecycleB Render');
		return <div>Lifecycle B</div>;
	}
}

export default LifecyleB;
