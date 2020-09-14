import React from "react";
import "./App.css";
// import Greet from "./components/Greet";
// import { Greet } from "./components/Greet";
// import Welcome from "./components/welcome";
// import Hello from "./components/Hello";
// import Message from "./components/Message";
// import Counter from "./components/Counter";
// import FunctionClick from "./components/FunctionClick";
// import ClassClick from "./components/ClassClick";
// import EventBind from "./components/EventBind";
// import ParentComponent from "./components/ParentComponent";
// import UserGreeting from "./components/UserGreeting";
// import NameList from "./components/NameList";
// import Stylesheets from "./components/Stylesheets";
// import Inline from "./components/Inline";
import './appStyle.css';
// import FragmentDemo from "./Fragments/FragmentDemo";
import Table from "./Fragments/Table";
// import LifecyleA from "./LifeCycle/LifecyleA";
// import styles from './appStyles.module.css'
// import Form from "./Form module/Form";
function App() {
	return (
		<div className="App">
		<Table/>
			{/*
			Fragments
				<FragmentDemo/>


			Lifecycle
			<LifecyleA/>

			Form module
			<Form/>
			CSS
			<Stylesheets primary={true}/>
			2. Inline css:   <Inline/> 
			3. css module:    
		
			import './appStyle.css';
			<h1 className='error'>Error</h1>


			<h1 className={styles.success}>Success</h1>
			import styles from './appStyles.module.css'


			List rendering:
				<NameList/>	
						
			Conditional rendering:
					<UserGreeting/>

				<ParentComponent/>
					<EventBind/>
			<FunctionClick />
			<ClassClick/>
			<Greet name="Diana" heroName="Wonder Woman" />
			<Welcome name="Bruce" heroName="Batman"/><Message /> 
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
