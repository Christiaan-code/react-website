import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.css";

// const emailRegex = RegExp(
//   /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
// );

const formValid = ({ formErrors, ...rest }) => {
	let valid = true;

	Object.values(formErrors).forEach((val) => {
		val.length > 0 && (valid = false);
	});

	Object.values(rest).forEach((val) => {
		val === null && (valid = false);
	});

	return valid;
};

class Register extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: null,
			password: null,
			formErrors: {
				username: "",
				password: "",
			},
		};
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if (formValid(this.state)) {
			console.log(`SUBMITTING`);
			axios
				.post("https://ccclassificationsapp.herokuapp.com/users/register", this.state)
				.then((response) => {
					console.log(response);
					window.location.replace("../login");
				});
		} else {
			window.alert("Form Invalid");
		}
	};

	handleChange = (e) => {
		e.preventDefault();
		const { name, value } = e.target;
		let formErrors = this.state.formErrors;

		switch (name) {
			case "username":
				formErrors.username =
					value.length < 3 ? "minimum 3 characters required" : "";
				break;
			case "password":
				formErrors.password =
					value.length < 6 ? "minimum 6 characters required" : "";
				break;
			default:
				break;
		}

		this.setState({ formErrors, [name]: value });
	};
	render() {
		const { formErrors } = this.state;

		return (
			<div className="wrapper">
				<div className="form-wrapper">
					<h1>Create Account</h1>
					<form onSubmit={this.handleSubmit} noValidate>
						<div className="username">
							<label htmlFor="username">Username</label>
							<input
								type="text"
								className={
									formErrors.username.length > 0
										? "error"
										: null
								}
								placeholder="Enter your username"
								name="username"
								noValidate
								onChange={this.handleChange}
							/>
							{formErrors.username.length > 0 && (
								<span className="errorMessage">
									{formErrors.username}
								</span>
							)}
						</div>
						<div className="password">
							<label htmlFor="password">Password</label>
							<input
								type="password"
								className={
									formErrors.password.length > 0
										? "error"
										: null
								}
								placeholder="Choose a Password"
								name="password"
								noValidate
								onChange={this.handleChange}
							/>
							{formErrors.password.length > 0 && (
								<span className="errorMessage">
									{formErrors.password}
								</span>
							)}
						</div>
						<div className="createAccount">
							<button type="submit">Create Account</button>
							<small>
								<Link
									className="link"
									to="/login"
									textDecoration="none"
									style={{ textDecoration: "none" }}
								>
									Already have an account?
								</Link>
							</small>
						</div>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;
