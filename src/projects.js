import React, { Component } from 'react';
import "./projects.css";
import $ from "jquery";
import image1 from "./images/image1.jpg";
import image2 from "./images/image2.jpg";
import image3 from "./images/image3.jpg";
import image4 from "./images/image4.jpg";
import image5 from "./images/image5.jpg";
import image6 from "./images/image6.jpg";

class Projects extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loading: true
		}
	}
	componentDidMount() {
		$('body').scrollTop(0);
		this.setState({
			loading: false
		});
	}
	componentWillUnmount() {
		this.setState({
			loading: true
		});
	}
	render() {
		let naslovtxt = "Here are some of my projects for you to check out";
		let naslovarr = naslovtxt.split(" ");
		let finalnaslov = naslovarr.map((word, index) => {
			return (<span className="naslov-word" key={word + index}>{word + " "}</span>)
		});
		let style = (this.props.lightMode ? {color: "black"} : {color: "white"});
		if (this.state.loading) {
			return(<h1>loading</h1>);
		} else {
			return(
				<div className="project-container">
					<h1 style={style} className="naslov">{finalnaslov}</h1>
					<div className="grid-wrapper">
						<div style={style} className="grid">
							<div id="kec" className="grid-tile jedan">
								<img alt="" src={image1} />
								<div className="opis"><p>Jedan</p></div>
							</div>
							<div className="grid-tile dva">
								<img alt="" src={image2} />
								<div className="opis"><p>Dva</p></div>
							</div>
							<div className="grid-tile tri">
								<img alt="" src={image3} />
								<div className="opis"><p>Tri</p></div>
							</div>
							<div className="grid-tile cetiri">
								<img alt="" src={image4} />
								<div className="opis"><p>Cetiri</p></div>
							</div>
							<div className="grid-tile pet">
								<img alt="" src={image5} />
								<div className="opis"><p>Pet</p></div>
							</div>
							<div className="grid-tile sest">
								<img alt="" src={image6} />
								<div className="opis"><p>Sest</p></div>
							</div>
						</div>
					</div>
				</div>
			);
		}
	}
}

export default Projects;
