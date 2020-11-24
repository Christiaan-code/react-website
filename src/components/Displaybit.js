import React, { useState, useEffect, Component } from "react";
import { Link } from "react-router-dom";
import "./pages/DisplayData.css";

class Displaybit extends Component {

    changeHandler (e) {
        this.setState({Classification: e.target.value})
        console.log(e.target.value)
    }

    state= {
        Classification: this.props.param[1]
    }
	render() {
		return (
				<ul className="list-items">
					<li className="single-item">{this.props.param[0]}</li>
					<li className="single-item">
						<input
							id="i1"
							className="single-input"
							type="text"
                            value= {this.state.Classification}
                            onChange = {this.changeHandler}
						/>
					</li>
					<li id="spaces">
						<label class="container">
							<input type="checkbox" />
							<span class="checkmark"></span>
						</label>
					</li>
				</ul>
		);
	}
}

export default Displaybit;
