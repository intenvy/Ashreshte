import React from "react";
import { Container, Drawer, makeStyles, Typography } from "@material-ui/core";
import Colors from "../utilities/Colors";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: 76,
		backgroundColor: Colors.sideNavigationBackground,
	},
}));

//majors:[{ name: string, id: integer }]
export default function SideNavigation(props) {
	const classes = useStyles();
	return (
		<React.Fragment>
			<Drawer
				classes={{ paper: classes.paper }}
				variant="permanent"
				anchor="left">
				<Link
					to="/uni/chair"
					style={{
						textDecoration: "none",
						color: "white",
						textAlign: "center",
					}}>
					مهندسی کامپیوتر
				</Link>
			</Drawer>
		</React.Fragment>
	);
}
