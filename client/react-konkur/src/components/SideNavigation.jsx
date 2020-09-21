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

	function findNameByMajorId(id) {
		switch (id) {
			case 2:
				return "مهندسی کامپیوتر";
			case 3:
				return "مهندسی مکانیک";
		}
	}

	let majorList = [];
	for (let i = 0; i < props.chairsData.length; i++) {
		majorList.push({
			name: findNameByMajorId(props.chairsData[i].info.majorId),
			index: i,
		});
	}

	function createMajorList(majorList) {
		const list = majorList.map((major) => (
			<Typography
				variant="subtitle1"
				onClick={() => {
					props.setSelectedChairId(major.index);
					window.scroll({ top: 0, left: 0, behavior: "smooth" });
				}}
				style={{
					cursor: "pointer",
					marginTop: 8,
					marginBottom: 8,

					color: "white",
					textAlign: "center",
				}}>
				{major.name}
			</Typography>
		));
		return list;
	}
	return (
		<div>
			<Drawer
				classes={{ paper: classes.paper }}
				variant="permanent"
				anchor="left">
				<Typography
					variant="subtitle1"
					onClick={() => {
						props.setSelectedChairId(-1);
						window.scroll({ top: 0, left: 0, behavior: "smooth" });
					}}
					style={{
						cursor: "pointer",
						marginTop: 8,
						marginBottom: 8,

						color: "white",
						textAlign: "center",
					}}>
					دانشکاه صنعتی امیرکبیر
				</Typography>
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
