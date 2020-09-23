import React from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
	Fade,
	Paper,
} from "@material-ui/core";
import { useHistory } from "react-router-dom";
import Colors from "../utilities/Colors";

const useStyles = makeStyles((theme) => ({
	paper: {
		cursor: "pointer",
		padding: 8,
		paddingRight: 32,
		paddingLeft: 32,
		margin: 8,
		backgroundColor: Colors.primary,
		borderRadius: 4,
		width: "max-content",
	},
	container: {
		paddingRight: 0,
		paddingTop: 76 + 16,
	},
}));
export default function ListItem(props) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<div className={classes.paper} onClick={props.onClick}>
			<Typography
				variant="body1"
				style={{ fontFamily: "myFirstFont", color: "white" }}>
				{props.name}
			</Typography>
		</div>
	);
}
