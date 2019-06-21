import React from 'react';

const Contact = (props) => {
	let style = props.lightMode ? {color: "black"} : {color: "white"};
	return(
		<div>
			<h1 style={style} className="naslov">NEW ONE</h1>
		</div>
	)
}

export default Contact;