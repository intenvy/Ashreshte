import React from "react";
import { Typography } from "@material-ui/core";

export default function UniversityName(props) {
	const farsiName = "دانشگاه صنعتی امیرکبیر";
	const englishName = "Amirkabir University Of Technology";
	const abbrv = "AUT";
	return (
		<div style={{ display: "flex" }}>
			<Typography variant="h4">{farsiName + " - " + englishName}</Typography>
			<Typography variant="caption" style={{ marginTop: 16 }}>
				({abbrv})
			</Typography>
		</div>
	);
}
