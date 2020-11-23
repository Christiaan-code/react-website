import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pages/DisplayData.css";

function Displaybit() {

    // state = {
    //     id: "",
    // }

	return (
		<>
			<u1 className="list-items">
				<li className="single-item">Hi</li>
				<li className="single-item"><input className="single-input" type="text" disabled="" value="Unknown" disabled/></li>
                {/* <li><input className="boxi" type="checkbox"/></li> */}
                <li id="spaces"><label class="container"><input type="checkbox"/><span class="checkmark"></span></label></li> 
			</u1>
		</>
	);
}

export default Displaybit;
