import React from "react";


const Project = (props) =>{
	const {name, id,surname} = props
	return(
		<h1>{`name: ${name}, id: ${id}, ${surname}`}</h1>
	);
	
};

export default Project