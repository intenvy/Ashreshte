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

const useStyles = makeStyles((theme) => ({
	paper: {
		cursor: "pointer",
		padding: 16,
		display: "flex",
		margin: 16,
	},
	container: {
		paddingRight: 180 + 16,
		paddingTop: 76 + 16,
	},
}));
export default function ListItem(props) {
	const classes = useStyles();
	const history = useHistory();
	return (
		<Paper className={classes.paper} onClick={props.onClick}>
			<div>
				<img
					src={"https://picsum.photos/seed/picsum/80/80"}
					style={{ height: 100 }}
				/>
			</div>
			<div style={{ marginRight: 16 }}>
				<Typography variant="h6">{props.name}</Typography>
				<Typography variant="caption">{props.description}</Typography>
			</div>
		</Paper>
	);
}
