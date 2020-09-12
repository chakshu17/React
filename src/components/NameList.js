import React from "react";
import Person from "./Person";

function NameList() {
  const names=['Bruce','Goku','Vegeta','Goku']

	const persons = [
		{
			id: 1,
			name: "Bruce",
			age: 28,
			skill: "React",
		},
		{
			id: 2,
			name: "CLark",
			age: 38,
			skill: "Angular",
		},
		{
			id: 3,
			name: "Goku",
			age: 28,
			skill: "Kamehamehaa",
		},
		{
			id: 4,
			name: "Vegeta",
			age: 28,
			skill: "Galic Gun",
		},
	];
	const personList = persons.map((person) => <Person person={person}></Person>);
  
const nameList = names.map((name,index) => <h2 key={index}>{index}  {name}</h2>)
	return <div>{nameList} </div>;
	// return <div>{personList} </div>;
}

export default NameList;
