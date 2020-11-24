import React, { Component } from "react";
import "./Upload.css";
import axios from "axios";
import { Redirect } from "react-router-dom";

class Upload extends Component {
	constructor(props) {
		super(props);
	}
	state = {
		// Initially, no file is selected
		selectedFile: null,
		verified: false,
	};

	// On file select (from the pop up)
	onFileChange = (event) => {
		// Update the state
		this.setState({ selectedFile: event.target.files[0] });
	};

	// onFileUpload1 = () = => {
	// 	if (this.state.selectedFile) {

	// 	}
	// }


	// On file upload (click the upload button)
	onFileUpload = () => {
		// Create an object of formData
		if (this.state.selectedFile) {
			const formData = new FormData();

			// Update the formData object
			// formData.append(
			// 	"myFile",
			// 	this.state.selectedFile,
			// 	this.state.selectedFile.name
			// );

			// Details of the uploaded file

			// Request made to the backend api
			// Send formData object
			
			axios
				.post("https://ccclassificationsapp.herokuapp.com/classify" /*,formData*/)
				.then((response) => {
					this.setState({ classifiedData: response.data });
					this.setState({ verified: true });
					
					this.props.propData(this.state.classifiedData);	
					window.alert("Upload Successful");
				})
				.catch((error) => {
					window.alert("Upload unsuccessful");
					// error.response.data;
				});
				
				
		} else {
			window.alert("Please select a file first");
		}

		
	};

	// File content to be displayed after
	// file upload is complete
	fileData = () => {
		if (this.state.selectedFile) {
			return (
				<div className="desc">
					<h2 id="desc">File Details:</h2>
					<p className="desc-p">
						File Name: {this.state.selectedFile.name}
					</p>
					<p className="desc-p">
						File Type: {this.state.selectedFile.type}
					</p>
					<p className="desc-p">
						Last Modified:{" "}
						{this.state.selectedFile.lastModifiedDate.toDateString()}
					</p>
				</div>
			);
		} else {
			return (
				<div className="desc">
					<br />
					<h4 id="desc">Choose before Pressing the Upload button</h4>
				</div>
			);
		}
	};

	render() {
		if (this.state.verified === true) return <Redirect to="/display" />;
		return (
			<div>
				<h1 className="heading">Upload a File</h1>
				<div className="wrapper2">
					<input
						type="file"
						id="fileElem"
						class="visually-hidden"
						onChange={this.onFileChange}
					/>
					<label id="inputs" for="fileElem">
						Select some files
					</label>
					{/* <input
						id="upload1"
						type="file"
						onChange={this.onFileChange}
					/> */}
					{/* <div className="upload-div">	
                        <button
							className="upload-btn-small"
							onClick={this.onFileUpload}
						>
							Choose a file
						</button>	
					</div> */}
					<div className="upload-div">
						<button
							className="upload-btn"
							onClick={this.onFileUpload}
						>
							Upload
						</button>
					</div>
					{this.fileData()}
				</div>
			</div>
		);
	}
}

export default Upload;
