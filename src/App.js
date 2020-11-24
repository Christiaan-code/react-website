import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar.js";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Home from './components/pages/Home';
import Footer from "./components/Footer";
import Register from "./components/pages/Register.js";
import Login from "./components/pages/Login.js";
import Upload from "./components/pages/Upload.js";
import Displaydata from "./components/pages/DisplayData";
// import Contact from './components/pages/Contact'

class App extends Component {
	state = {
		fileData: null,
	};

	saveData = (data) => {
    this.setState({ fileData: data });
    console.log(this.state.fileData);
	};

	render() {
		return (
			<Router>
				<Navbar />
				<Switch>
					<Route path="/" exact component={Login} />
					<Route path="/login" exact component={Login} />
					<Route path="/register" exact component={Register} />
					<Route exact path="/upload">
						<Upload propData={this.saveData} />
					</Route>
					<Route exact path="/display">
						<Displaydata propData={this.state.fileData} />
					</Route>
				</Switch>
				<Footer />
			</Router>
		);
	}
}

export default App;
