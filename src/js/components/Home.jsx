import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Semaforo = () => {
     const [color, setColor] = useState("red");
	return (
		<div>
			<div className="trafficTop"></div>
			<div className="container">
				<div onClick={()=> setColor("red")} className={"light red" + (color == "red" ? " glow" : "")}></div>
				<div onClick={()=> setColor("yellow")} className={"light yellow" + (color == "yellow" ? " glow" : "")}></div>
				<div  onClick={()=> setColor("green")}className={"light green" + (color == "green" ? " glow" : "")}></div>

			</div>
			
		</div>
	);
};

export default Semaforo;