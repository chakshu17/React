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
	render() {
    console.log('LifecycleB Render');
		return <div>Lifecycle B</div>;
	}
}

export default LifecyleB;
