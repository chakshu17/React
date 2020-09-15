import React from "react";
import "./App.css";
import ComponentC from './Context/ComponentC'
import { UserProvider } from "./Context/userContext";
function App() {
	return (
		<div className="App">
		<UserProvider value="Chakshu">
			<ComponentC/>
		</UserProvider>
		</div>
	);
}

export default App;

// Render Props

	// Children method
	//			<Counter>
	//		{(count, incrementCount) => (
	//		<ClickCounterTwo count={count} incrementCount={incrementCount} />
	//		)}
	//			</Counter>
	//
	//		<Counter>
	//	{(count, incrementCount) => (
	//	<HowerCounterTwo count={count} incrementCount={incrementCount} />
	//	)}
	//	</Counter>
	//  <Counter
	// render={(count, incrementCount) => (
	// 	<ClickCounterTwo count={count} incrementCount={incrementCount} />
	// )}
	// />

	// render method
	// <Counter
	// render={(count, incrementCount) => (
	// 	<HowerCounterTwo count={count} incrementCount={incrementCount} />
	// )}
	// />
	//  <ClickCounterTwo />
	// <HowerCounterTwo />
	// <User render={(isloggedIn) => (isloggedIn ? "Chakshu" : "Guest")} />

// Higher Order Component
//		<ClickCounter/>
//    <HoverCounter/>

// Error handling

// <ErrorBoundary>
// 	<Hero heroName="Batman" />
// </ErrorBoundary>
// <ErrorBoundary>
// 	<Hero heroName="Joker" />
// </ErrorBoundary>

// portals:portals
// refs: Refs

// Pure Components
// folder name: purecomponent
// Fragments
// 	<FragmentDemo/>
// 	<Table/>

// Lifecycle
// <LifecyleA/>

// Form module
// <Form/>
// CSS
// <Stylesheets primary={true}/>
// 2. Inline css:   <Inline/>
// 3. css module:

// import './appStyle.css';
// <h1 className='error'>Error</h1>

// <h1 className={styles.success}>Success</h1>
// import styles from './appStyles.module.css'

// List rendering:
// 	<NameList/>

// Conditional rendering:
// 		<UserGreeting/>

// 	<ParentComponent/>
// 		<EventBind/>
// <FunctionClick />
// <ClassClick/>
// <Greet name="Diana" heroName="Wonder Woman" />
// <Welcome name="Bruce" heroName="Batman"/><Message />
// <Greet></Greet>
// <Counter></Counter>
// <Welcome></Welcome>
// <Hello></Hello>
//  <Greet name="Bruce" heroName="Batman">
// 	<p>This is Children components</p>
// </Greet>
// <Greet name="Clark" heroName="Superman">
// 	<button>Action</button>
// </Greet>

// <Welcome name="Bruce" heroName="Batman"/>
// <Welcome name="Clark" heroName="Superman"/>
// <Welcome name="Diana" heroName="Wonder Woman"/>
