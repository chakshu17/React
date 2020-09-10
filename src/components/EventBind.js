import React, { Component } from "react";
// Event handler
export class EventBind extends Component {
	constructor(props) {
		super(props);

		this.state = {
			message: "Hello",
		};
		//3. this.clickHandler=this.clickHandler.bind(this)
	}
	// clickHandler(){
	//    this.setState({
	//      message:'Goodbye'
	//    })

	// }
	clickHandler = () => {
		this.setState({
			message: "Goodebye!",
		});
	};
	render() {
		return (
			<div>
				<div>{this.state.message}</div>
				{/*3. <button onClick={this.clickHandler}>Click</button> */}
				{/*2. <button onClick={()=>this.clickHandler()}>Click</button> */}
				{/* 1. <button onClick={this.clickHandler.bind(this)}>Click</button> */}
				<button onClick={this.clickHandler}>Click</button>
			</div>
		);
	}
}

export default EventBind;
