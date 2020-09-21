import React from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Divider,
} from "@material-ui/core";
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

	const majorList = [
		{
			name: "مهندسی کامپیوتر",
		},
		{
			name: "مهندسی صنایع",
		},
		{
			name: "مهندسی مکانیک",
		},
		{
			name: "مهندسی برق",
		},
	];

	function createMajorList(majorList) {
		const list = majorList.map((major) => (
			<Link
				to="/uni/chair"
				style={{
					marginTop: 8,
					marginBottom: 8,
					textDecoration: "none",
					color: "white",
					textAlign: "center",
				}}>
				{major.name}
			</Link>
		));
		return list;
	}
	return (
		<div>
			<Drawer
				classes={{ paper: classes.paper }}
				variant="permanent"
				anchor="left">
				<Link
					to="/uni/chair"
					style={{
						marginTop: 8,
						marginBottom: 8,
						textDecoration: "none",
						color: "white",
						textAlign: "center",
					}}>
					دانشکاه صنعتی امیرکبیر
				</Link>
				<Divider
					style={{
						backgroundColor: Colors.secondary,
						margin: 4,
					}}
				/>
				{createMajorList(majorList)}
			</Drawer>
		</div>
	);
}
