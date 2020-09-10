import React from "react";

const Hello = () => {
	// return (
	//   <div >
	//     <h1>Hello Chakshu</h1>
	//   </div>
	// )
	// return React.createElement(
	// 	"div",
	// 	null,
	// 	React.createElement("h1", null, "Hello Chakshu")
  // );
  return React.createElement(
		"div",
		{id:'hello',className:'dummyClass'},
		React.createElement("h1", null, "Hello Chakshu")
	);
};

export default Hello;
