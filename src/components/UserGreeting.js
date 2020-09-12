import React, { Component } from "react";
// consitional render ui  
class UserGreeting extends Component {
	constructor(props) {
		super(props);

		this.state = {
			isLoogedIn: false,
		};
	}

	render() {
    //4.
   return this.state.isLoogedIn && <div>Welcome Chakshu</div>


    //3. ternary method
		// return this.state.isLoogedIn ? (
		// 	<div>Welcome Chakshu</div>
		// ) : (
		// 	<div>Welcome guest</div>
		// );
		
		//2. let message

		// if(this.state.isLoogedIn){
		//   message= <div>Welcome Chakshu</div>
		// }
		// else {
		//   message=<div>Welcome Guest</div>
		// }
    // return <div>{message}</div>
    

		//1.
		// if(this.state.isLoogedIn){
		//   return(
		//   <div>Welcome Chakshu</div>
		//   )
		// }
		// else{
		//   return(
		//     <div>Welcome guest</div>
		//   )
		// }
		// return (
		//   <div>
		//    <div>     Welcome Chakshu       </div>
		//    <div>     Welcome Guest          </div>
		//   </div>
		// )
	}
}

export default UserGreeting;
