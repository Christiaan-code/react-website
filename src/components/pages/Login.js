import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Register.css";
const axios = require("axios");

class Login extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
			password: "",
			verified: false,
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				"http://localhost:4000/users/login",
				this.state
			)
			.then((response) => {
				//    this.props.authHandler(response.data)
                if (response)
                this.setState({ verified: true });

			})
			.catch((error) => {
				window.alert("Username or password incorrect");
			});
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};

	render() {
		if (this.state.verified === true) return <Redirect to="/upload" />;
		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>Log In</h1>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="username">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								placeholder="Enter your username"
								name="username"
								value={this.state.username}
								onChange={this.handleChange}
								noValidate
							/>
						</div>
						<div className="password">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								placeholder="Choose a Password"
								name="password"
								value={this.state.password}
								onChange={this.handleChange}
								noValidate
							/>
						</div>
						<div className="createAccount">
							<button type="submit">Log In</button>
							<small>
								<Link
									className="link"
									to="/register"
									textDecoration="none"
									style={{ textDecoration: "none" }}
								>
									Don't have an account?
								</Link>
							</small>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Login;
