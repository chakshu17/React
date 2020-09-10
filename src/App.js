import React from "react";
import "./App.css";
// import Greet from "./components/Greet";
import { Greet } from "./components/Greet";
import Welcome from "./components/welcome";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Counter from "./components/Counter";
function App() {
	return (
		<div className="App">
			
			<Greet name="Diana" heroName="Wonder Woman" />
			{/*	<Message /> 
			<Greet></Greet>
			<Counter></Counter>
			<Welcome></Welcome>
			<Hello></Hello> 
			 <Greet name="Bruce" heroName="Batman">
				<p>This is Children components</p>
			</Greet>
			<Greet name="Clark" heroName="Superman">
				<button>Action</button>
			</Greet>
		

			<Welcome name="Bruce" heroName="Batman"/>
			<Welcome name="Clark" heroName="Superman"/>
			<Welcome name="Diana" heroName="Wonder Woman"/> */}
	
		</div>
	);
}

export default App;
