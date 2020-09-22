import React, { useEffect, useState } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
	Fade,
	CircularProgress,
} from "@material-ui/core";
import ListItem from "../components/ListItem";
import Colors from "../utilities/Colors";
import getMajors from "../services/getMajors";
import { useHistory } from "react-router-dom";
import getUniversities from "../services/getUniversities";

const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		paddingRight: 16,
		paddingTop: 76 + 16,
	},
}));
export default function UniversityList(props) {
	const classes = useStyles();
	const history = useHistory();
	const [universitiesData, setUniversitiesData] = useState([]);
	const [loading, setLoading] = useState(true);

	async function fetchData() {
		const response = await getUniversities();
		if (response.status == 200) {
			const data = response.data;
			setUniversitiesData(data);
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
		const content = universitiesData.map((uni) => {
			return (
				<ListItem
					name={uni.info.faName}
					description={uni.info.description}
					onClick={() => {
						history.push("uni/" + uni.info.id);
					}}
				/>
			);
		});
		return content;
	}

	return (
		<Container className={classes.container}>
			<div>{createContent()}</div>
		</Container>
	);
}