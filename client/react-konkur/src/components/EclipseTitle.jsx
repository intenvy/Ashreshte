import React from "react";
import Colors from "../utilities/Colors";
import { Typography } from "@material-ui/core";

export default function EclipseTitle(props) {
	const height = props.height ? props.height : 50;
	return (
		<div
			style={{
				height: height,
				paddingRight: 25,
				paddingLeft: 25,
				width: props.width ? props.width : "max-content",
				borderRadius: height / 2,
				backgroundColor: Colors.primary,
				display: "flex",
				justifyContent: "center",
			}}>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					height: "100%",
				}}>
				<Typography
					variant={props.variant ? props.variant : "h6"}
					style={{ color: "white", fontFamily: "myFirstFont" }}>
					{props.title}
				</Typography>
			</div>
		</div>
	);
}
