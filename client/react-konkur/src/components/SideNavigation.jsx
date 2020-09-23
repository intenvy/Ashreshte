import React, { useState } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Divider,
	Dialog,
	Tooltip,
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
					fontFamily: "myFirstFont",
					textAlign: "center",
				}}>
				{major.name}
			</Typography>
		));
		return list;
	}
	return (
		<Tooltip title="انتخاب دانشکده" arrow>
			<div
				style={{
					position: "fixed",
					left: 16,
					bottom: 16,
					zIndex: 1200,
				}}>
				<div
					style={{
						cursor: "pointer",
						padding: 16,
						display: "flex",
						justifyContent: "center",
						backgroundColor: Colors.primary,
						borderRadius: 15,
					}}
					onClick={() => {
						setDialogOpen(true);
					}}>
					{props.selectedChairId == -1 ? (
						<Typography
							variant="body1"
							style={{ fontFamily: "myFirstFont", color: "white" }}>
							{props.universityName}
						</Typography>
					) : (
						<Typography
							variant="body1"
							style={{ fontFamily: "myFirstFont", color: "white" }}>
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
					<Typography
						variant="body1"
						onClick={() => {
							props.setSelectedChairId(-1);
							setDialogOpen(false);
							window.scroll({ top: 0, left: 0, behavior: "smooth" });
						}}
						style={{
							cursor: "pointer",
							marginTop: 8,
							marginBottom: 8,
							fontFamily: "myFirstFont",
							textAlign: "center",
						}}>
						صفحه‌ی دانشگاه
					</Typography>
					<Divider style={{ marginTop: 8, marginBottom: 8 }} />
					{createMajorList(majorList)}
				</Dialog>
			</div>
		</Tooltip>
	);
}
