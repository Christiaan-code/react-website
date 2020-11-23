import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Displaybit from "../Displaybit";
import "./DisplayData.css";

class Displaydata extends Component {
	constructor(props) {
		super(props);

		this.state = {
			datapoint: null,
			classification: null,
			verified: false,
		};
	}

	// changeIt = (e) => {
	// 	const num = e.target;
	// 	var input;

	// 	switch (num) {
	// 		case "1":
	// 			var input = document.getElementsById("i1");
	// 			input.disabled = !input.disabled;
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// };

	showMessage = () => {
        window.alert("Classifications updated");
        this.setState({ verified: true });
	};

	render() {
        if (this.state.verified === true) return  <Redirect to="/upload" />;
		return (
			<>
				<div className="displaywrapper">
					<div className="items">
						<u1 className="list-items">
							<li className="single-item-heading">Attribite</li>
							<li className="single-item-heading">
								<input
									className="single-input"
									type="text"
									disabled=""
									value="Classification"
									disabled
								/>
							</li>
							<li id="edit">Edit</li>
						</u1>
						{/* {for (i = 0; i < 8; i++) {this.displayStuff()}}; */}
						<u1 className="list-items">
							<li className="single-item">White</li>
							<li className="single-item">
								<input
									id="i1"
									className="single-input"
									type="text"
									value="Race"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">Male</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
									value="Gender"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">Christian</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
									value="Religion"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">9903235278088</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
									value="ID Number"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">0846164444</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">Single</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
									value="Marital Status"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>

						<u1 className="list-items">
							<li className="single-item">
								christiaandpreez@gmail.com
							</li>
							<li className="single-item">
								<input
									className="single-input"
									type="text"
									value="Email"
								/>
							</li>
							<li id="spaces">
								<label class="container">
									<input type="checkbox" />
									<span class="checkmark"></span>
								</label>
							</li>
						</u1>
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
