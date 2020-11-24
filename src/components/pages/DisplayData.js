import React, { Component } from "react";
import { Redirect } from "react-router-dom";
// import Displaybit from "../Displaybit";
import "./DisplayData.css";

class Displaydata extends Component {
	constructor(props) {
		super(props);

		this.state.fileData = props.propData;
	}

	state = {
		datapoint: null,
		classification: null,
		verified: false,
		fileData: null,
		updated: true,
	};

	changeHandler() {
		// this.setState({ fileData: this.props.propData})
	}

	showMessage = () => {
		window.alert("Classifications updated");
		this.setState({ verified: true });

		// this.forceUpdate();
	};

	render() {
		if (this.state.verified === true) return <Redirect to="/upload" />;
		return (
			<>
				<div className="displaywrapper">
					<div className="items">
						<ul className="list-items">
							<li className="single-item-heading">Attribite</li>
							<li className="single-item-heading">
								<input
									className="single-input"
									type="text"
									disabled=""
                                    onChange={this.changeHandler}
                                    value="Classification"
									readOnly
								/>
							</li>
							<li id="edit">Edit</li>
						</ul>
						{/* {this.props.propData.map((item, i) => {
							{
								console.log(i);
							}
                            onChange={this.changeHandler}return <Displaybit data
                            Value={item} key={i} />;
						})} */}
						<ul className="list-items">
							<li className="single-item">White</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="Race"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>

						<ul className="list-items">
							<li className="single-item">Male</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="Gender"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>

						<ul className="list-items">
							<li className="single-item">Christian</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="Religion"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>
						<ul className="list-items">
							<li className="single-item">9903235278088</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="ID Number"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>

						<ul className="list-items">
							<li className="single-item">Single</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="Marital Status"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>

						<ul className="list-items">
							<li className="single-item">0846164444</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>
						<ul className="list-items">
							<li className="single-item">
								christiaandpreez@gmail.com
							</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
                                    onChange={this.changeHandler}
                                    value="Email Address"
								/>
							</li>
							<li className="spaces">
								<label className="container">
									<input type="checkbox" />
									<span className="checkmark"></span>
								</label>
							</li>
						</ul>
					</div>
					<div className="upload-div">
						<button
							className="upload-btn"
							onClick={this.showMessage}
						>
							Update
						</button>
					</div>
				</div>
			</>
		);
	}
}

export default Displaydata;
