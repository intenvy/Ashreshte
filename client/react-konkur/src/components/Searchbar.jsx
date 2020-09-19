import React, { useState } from "react";
import {
	Grid,
	makeStyles,
	TextField,
	Input,
	Slide,
	Collapse,
	Paper,
	InputBase,
	IconButton,
} from "@material-ui/core";
import ShowIcon from "./ShowIcon";

import commonStyles from "../utilities/CommonStyles";
import Colors from "../utilities/Colors";
const useStyles = makeStyles((theme) => ({
	centerVertical: { ...commonStyles.centerVertical },
	inputInput: {
		transition: theme.transitions.create("width"),
		width: "100%",

		width: "130px",
		"&:focus": {
			width: "250px",
		},
	},
}));

export default function Searchbar(props) {
	const classes = useStyles();
	//const [searching, setSearching] = useState(false);
	return (
		<div className={classes.centerVertical}>
			<div
				style={{
					display: "flex",
					backgroundColor: "white",
					padding: 4,
					borderRadius: 8,
				}}>
				<InputBase
					//style={{ width: 100 }}
					placeholder="دانشگاه رشته..."
					disableUnderline
					classes={{
						input: classes.inputInput,
					}}
				/>

				<div style={{ padding: 3 }}>
					<ShowIcon
						name="search"
						style={{ color: Colors.secondary, margin: 4 }}
					/>
				</div>
			</div>
		</div>
	);
}
