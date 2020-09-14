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
	render() {
    console.log('LifecycleA Render');
		return <div>Lifecycle A
      <LifecyleB/>
    </div>;
	}
}

export default LifecyleA;
