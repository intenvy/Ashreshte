import React from "react";
import { Typography, Paper } from "@material-ui/core";
import Colors from "../utilities/Colors";

export default function ScrollLink(props) {
	const scrollDest = props.scrollTo;

	return (
		<Paper
			onClick={() => {
				window.scrollTo(0, scrollDest.current.offsetTop - 80);
			}}
			style={{
				cursor: "pointer",
				padding: 16,
				paddingLeft: 32,
				paddingRight: 32,
				backgroundColor: "orange",
				width: 70,
				display: "flex",
				justifyContent: "center",
			}}>
			<Typography variant="h6">{props.name}</Typography>
		</Paper>
	);
}
