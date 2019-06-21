import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Projects from "./projects";
import $ from "jquery";
import Contact from "./contact";
import css3 from "./images/css3.png";
import sass from "./images/sass.png"
import react from "./images/react.png";
import redux from "./images/redux.png";
import bootstrap from "./images/bootstrap.png";
import html5 from "./images/html5.png";
import JS from "./images/JS.png";
import less from "./images/less.png";
import jquery from "./images/jquery.png";
import node from "./images/node.png";
import webpack from "./images/webpack.png";
import php from "./images/php.png";
import npm from "./images/npm.png";
import git from "./images/git.png";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lightMode: false
    }
    this.handleClick = this.handleClick.bind(this);
  }
  componentWillMount() {
    this.setState({
      lightMode: localStorage.getItem("lightMode") === "true" ? true : false
    });
  }
  handleClick(e) {
    this.setState({
      lightMode: !this.state.lightMode
    }, () => {localStorage.setItem("lightMode", this.state.lightMode)});
  }
  render() {
    this.state.lightMode === true ? $("body").css("background", "rgb(210, 210, 230)") : $("body").css("background", "rgb(45, 45, 55)");
    let style = (this.props.lightMode ? {color: "black"} : {color: "white"});
    return(
      <Router>
        <div style={style} className="body-wrapper">
          <Header />
          <div onClick={this.handleClick} className="traka">
            <h5>{this.state.lightMode === false ? "LIGHT MODE" : "DARK MODE"}</h5>
          </div>
          <div className="main-content">
            <Route exact path="/" render={() => <NameTag lightMode={this.state.lightMode} handleClick={this.handleClick} />} />
            <Route path="/projects" render={() => <Projects lightMode={this.state.lightMode} handleClick={this.handleClick} />} />
            <Route path="/contact" render={() => <Contact lightMode={this.state.lightMode} />} />
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

class Header extends Component {
  render() {
    return(
      <header className="header">
        <div className="nav-items">
          <Link to="/"><div className="link"><h2>HOME</h2></div></Link>
          <Link to="/projects"><div className="link"><h2>PROJECTS</h2></div></Link>
          <Link to="/contact"><div className="link"><h2>CONTACT ME</h2></div></Link>
        </div>
      </header>
    );
  }
}

const Footer = () => {
  return(
    <div className="footer">
      <h5>© Andrej Blesić 2018</h5>
    </div>
  );
}

class NameTag extends Component {
  render() {
    let style=this.props.lightMode ? {color: "black"} : {color: "white"}
    return (
      <div id="firstpage1">
        <div id="name-tag">
          <h1 className="tag-text-top">Hello there, my name is </h1><br/>
          <h1 className="andrej">Andrej</h1><br/>
          <h1 className="tag-text-bottom">and I will be your guide</h1>
        </div>
        <h2 style={style} id="scrollmore">Scroll down for more <span aria-label="Pointing Down" role="img">👇</span></h2>
        <Landing lightMode={this.props.lightMode} style={style}/>
      </div>
    );
  }
}

class Landing extends Component {
  render() {
    return(
      <div style={{background: (this.props.lightMode ? "rgb(240, 240, 240)" : "rgb(40, 40, 45)")}} id="firstpage2">
        <h1 className="intro">Are you looking for a front-end developer with the following skills?</h1>
          <JSDiv style={this.props.style} />
          <hr />
          <CSSDiv style={this.props.style} />
          <hr/>
          <ReactDiv style={this.props.style} />
          <hr />
          <BackEndDiv style={this.props.style} />
        <h1 className="outro">Then I am your man!</h1>
      </div>
    );
  }
}

class JSDiv extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.slidein);
  }
  slidein() {
    let difference = window.pageYOffset + Math.floor(window.innerHeight/1.5) - $("#JS-image").offset().top;
    if (difference > 0) {
      $("#html5logo").css("animation-name", "logoslide");
      $("#css3logo").css("animation-name", "logoslide");
      $("#JSlogo").css("animation-name", "logoslide");
      $("#JS-text").css("animation-name", "textslide");
      document.removeEventListener("scroll", this.slidein);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.slidein);
  }
  render() {
    return(
      <div style={this.props.style} id="JS-div">
        <div id="JS-image">
          <img id="html5logo" className="JS-logo" alt="HTML5 logo" src={html5} />
          <img id="css3logo" className="JS-logo" alt="CSS3 logo" src={css3} />
          <img id="JSlogo" className="JS-logo" alt="JS logo" src={JS} />
        </div>
        <div id="JS-text">
          <h2 className="skillnaslov">&lt;Core Technologies /&gt;</h2>
          <p className="description-tag">&lt;description&gt;</p>
          <p className="description">As the core technologies of the web, <strong><span id="htmlspan">HTML</span></strong>, <strong>CSS</strong> and <strong>JavaScript</strong> make everything you see on the Internet possible.</p>
          <p className="description">Luckily for you, I am very proficient with these technologies and have a thorough understanding of how they work. This includes the very latest methodes and techiques that come with <strong>HTML5</strong>, <strong>CSS3</strong> and of course all the newest <strong>JavaScript</strong> features introduced in <strong>ES6</strong>.</p>
          <p className="description">(If you don't know what these are, don't worry, the important part is that I do)</p>
          <p className="description-tag">&lt;/description&gt;</p>
        </div>
      </div>
    );
  }
}

class CSSDiv extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.slidein);
  }
  slidein() {
    let difference = window.pageYOffset + Math.floor(window.innerHeight/1.5) - $("#css-image").offset().top;
    if (difference > 0) {
      $("#sasslogo").css("animation-name", "logoslide");
      $("#lesslogo").css("animation-name", "logoslide");
      $("#bootstraplogo").css("animation-name", "logoslide");
      $("#css-text").css("animation-name", "textslide");
      document.removeEventListener("scroll", this.slidein);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.slidein);
  }
  render() {
    return(
      <div style={this.props.style} id="css-div">
        <div id="css-image">
          <img id="sasslogo" className="css-logo" alt="Sass logo" src={sass} />
          <img id="lesslogo" className="css-logo" alt="Less logo" src={less} />
          <img id="bootstraplogo" className="css-logo" alt="Bootstrap logo" src={bootstrap} />
        </div>
        <div id="css-text">
          <h2 className="skillnaslov">&lt;Design Tools /&gt;</h2>
          <p className="description-tag">&lt;description&gt;</p>
          <p className="description">Are you in need of beautiful, user friendly UI/UX designs and fast, responsive web applications that work equally well on screens of all shapes and sizes?</p>
          <p className="description">Then fear not, because I have a strong background in all things CSS, including preprocessors such as <strong>Sass</strong> and <strong>Less</strong> that make life a lot easier, plus Twitter's excellent front-end framework, <strong>Bootstrap</strong>.</p>
          <p className="description-tag">&lt;/description&gt;</p>
        </div>
      </div>
    );
  }
}

class ReactDiv extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.slidein);
  }
  slidein() {
    let difference = window.pageYOffset + Math.floor(window.innerHeight/1.5) - $("#react-image").offset().top;
    if (difference > 0) {
      $("#reactlogo").css("animation-name", "logoslide");
      $("#reduxlogo").css("animation-name", "logoslide");
      $("#jquerylogo").css("animation-name", "logoslide");
      $("#react-text").css("animation-name", "textslide");
      document.removeEventListener("scroll", this.slidein);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.slidein);
  }
  render() {
    return(
      <div style={this.props.style} id="react-div">
        <div id="react-image">
          <img id="reactlogo" className="react-logo" alt="React logo" src={react} />
          <img id="reduxlogo" className="react-logo" alt="Redux logo" src={redux} />
          <img id="jquerylogo" className="react-logo" alt="jQuery logo" src={jquery} />
        </div>
        <div id="react-text">
          <h2 className="skillnaslov">&lt;Frameworks & Libraries /&gt;</h2>
          <p className="description-tag">&lt;description&gt;</p>
          <p className="description">Last, but certainly not least, I am experienced with the powerful and fast JavaScript framework <strong>React.js</strong> and the accompanying state management system, <strong>Redux</strong>.</p>
          <p className="description">The small yet versatile <strong>jQuery</strong> library is also in my skillset, and helps me build whatever you need quickly and efficiently.</p>
          <p className="description">If you are in need of someone who can build and maintain large state-driven web applications and has a great eye for detail, then you have definitely come to the right place</p>
          <p className="description-tag">&lt;/description&gt;</p>
        </div>
      </div>
    );
  }
}

class BackEndDiv extends Component {
  componentDidMount() {
    document.addEventListener("scroll", this.slidein);
  }
  slidein() {
    let difference = window.pageYOffset + Math.floor(window.innerHeight/1.5) - $("#other-image").offset().top;
    if (difference > 0) {
      $("#nodelogo").css("animation-name", "logoslide");
      $("#webpacklogo").css("animation-name", "logoslide");
      $("#phplogo").css("animation-name", "logoslide");
      $("#npmlogo").css("animation-name", "logoslide");
      $("#gitlogo").css("animation-name", "logoslide");
      $("#other-text").css("animation-name", "textslide");
      document.removeEventListener("scroll", this.slidein);
    }
  }
  componentWillUnmount() {
    document.removeEventListener("scroll", this.slidein);
  }
  render() {
    return(
      <div style={this.props.style} id="other-div">
        <div id="other-image">
          <img id="nodelogo" className="other-logo" src={node} alt="Node.js logo" />
          <img id="phplogo" className="other-logo" src={php} alt="Webpack logo" />
          <img id="webpacklogo" className="other-logo" src={webpack} alt="PHP logo" />
          <img id="npmlogo" className="other-logo" src={npm} alt="NPM logo" />
          <img id="gitlogo" className="other-logo" src={git} alt="Git logo" />
        </div>
        <div id="other-text">
          <h2 className="skillnaslov">&lt;Back-end & more /&gt;</h2>
          <p className="description-tag">&lt;description&gt;</p>
          <p className="description">On top of all of the above, I will also be able to run and maintain web applications in your preferred back-end environment. Be it <strong>Node.js</strong> or <strong>PHP</strong>, I've got you covered.</p>
          <p className="description">In the modern world of web development, it's important to have the skills to build modular applications, make use of the many practical packages available and be familiar with the concept of version control.</p>
          <p className="description">For those purposes, I will be able to put software like the module bundler <strong>Webpack</strong>, the <strong>npm</strong> package manager and the version control system <strong>Git</strong> + <strong>GitHub</strong> to excellent use.</p>
          <p className="description-tag">&lt;/description&gt;</p>
        </div>
      </div>
    );
  }
}

export default Main;
