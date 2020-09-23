import React from "react";
import { Grid } from "@material-ui/core";
import Colors from "../utilities/Colors";
import EclipseTitle from "./EclipseTitle";
import SeperatorLine from "./SeperatorLine";

export default function ContentSeparator(props) {
	return (
		<div
			style={{
				display: "flex",
				justifyContent: "center",
				position: "relative",
				marginTop: 64,
				marginBottom: 64,
			}}>
			<SeperatorLine />
			<div style={{ position: "absolute", top: -20 }}>
				<EclipseTitle title={props.title} />
			</div>
		</div>
	);
}
