import React from "react";
import "./App.css";
import PortalDemo from "./Portals/PortalDemo";


function App() {
	return (
		<div className="App">
			<PortalDemo />

			{/*
			portals:portals
			refs: Refs


			Pure Components
			folder name: purecomponent 
			Fragments
				<FragmentDemo/>
				<Table/>

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
