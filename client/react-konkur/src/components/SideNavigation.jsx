import React, { useState } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Divider,
	Dialog,
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
	const [dialogOpen, setDialogOpen] = useState(false);
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
					setDialogOpen(false);
					window.scroll({ top: 0, left: 0, behavior: "smooth" });
				}}
				style={{
					cursor: "pointer",
					marginTop: 8,
					marginBottom: 8,

					textAlign: "center",
				}}>
				{major.name}
			</Typography>
		));
		return list;
	}
	return (
		<div style={{ position: "fixed", left: 16, bottom: 16 }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					backgroundColor: Colors.primary,
				}}
				onClick={() => {
					setDialogOpen(true);
				}}>
				{props.selectedChairId == -1 ? (
					"اسم دانشگاه"
				) : (
					<Typography>
						{findNameByMajorId(
							props.chairsData[props.selectedChairId].info.majorId
						)}
					</Typography>
				)}
			</div>

			<Dialog
				open={dialogOpen}
				onClose={() => {
					setDialogOpen(false);
				}}
				PaperProps={{ style: { padding: 32 } }}>
				{createMajorList(majorList)}
			</Dialog>
		</div>
	);
}
