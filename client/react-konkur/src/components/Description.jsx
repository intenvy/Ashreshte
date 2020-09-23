import React from "react";
import { Grid, Typography } from "@material-ui/core";
import Colors from "../utilities/Colors";
export default function (props) {
	return (
		<Grid
			container
			justify="flex-start"
			wrap="nowrap"
			style={{ marginBottom: 32 }}>
			<div
				style={{
					minHeight: 20,
					marginLeft: 16,
					marginRight: 16,
					width: 8,
					borderRadius: 4,
					backgroundColor: Colors.primary,
				}}></div>
			<Typography variant="p" wrap>
				{props.text}
			</Typography>
		</Grid>
	);
}
