import React, { useEffect, useState } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
	Fade,
	CircularProgress,
	Divider,
} from "@material-ui/core";
import ListItem from "../components/ListItem";
import Colors from "../utilities/Colors";
import getMajors from "../services/getMajors";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		minHeight: window.innerHeight,
		backgroundColor: Colors.background,
		paddingRight: 16,
		paddingTop: 76 + 32,
	},
}));
export default function MajorList(props) {
	const classes = useStyles();
	const history = useHistory();
	const [majorsData, setMajorsData] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchData() {
		const response = await getMajors();
		if (response.status == 200) {
			const data = response.data;
			setMajorsData(data);
			setLoading(false);
		}
	}

	useEffect(() => {
		props.setIsHeaderTransparent(false);
		fetchData();
	}, []);

	function createContent() {
		if (loading) {
			return (
				<Grid container justify="center">
					<CircularProgress />
				</Grid>
			);
		}
		const content = majorsData.map((major) => {
			return (
				<ListItem
					name={major.info.faName}
					description={major.info.description}
					onClick={() => {
						history.push("major/" + major.info.id);
					}}
				/>
			);
		});
		return content;
	}

	return (
		<Container className={classes.container} disableGutters maxWidth={false}>
			<Typography
				variant="h4"
				style={{
					marginRight: 16,

					color: Colors.primary,
					fontFamily: "myFirstFont",
				}}>
				رشته ها
			</Typography>
			<Divider
				style={{
					backgroundColor: Colors.primary,
					height: 2,
					width: "calc(100%-16)",
					margin: 8,
				}}
			/>
			<div>{createContent()}</div>
		</Container>
	);
}
