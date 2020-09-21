import React, { useState, useRef, useEffect } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
	Fade,
	CircularProgress,
} from "@material-ui/core";
import Colors from "../utilities/Colors";
import { Link, useParams } from "react-router-dom";
import SideNavigation from "../components/SideNavigation";
import StackedBarChart from "../components/StackedBarChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import AreaSelection from "../components/AreaSelection";
import ScrollLink from "../components/ScrollLink";
import UniversityName from "../components/UniversityName";
import Transportation from "../components/Transportaiton";
import Migration from "../components/Migration";
import Enterance from "../components/Enterance";
import ProfileHeader from "../components/ProfileHeader";
import getUniversityById from "../services/getUniversityById";
import Chair from "./Chair";
import getMajorById from "../services/getMajorById";
import Job from "../components/Job";

const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		paddingRight: 16,
		paddingTop: 32,
	},
}));

export default function University(props) {
	const classes = useStyles();
	const { id: majorId } = useParams();
	const jobRef = useRef(null);
	const enteranceRef = useRef(null);
	const migrationRef = useRef(null);
	const headerRef = useRef(null);
	const [infoData, setInfoData] = useState({});
	const [migrationData, setMigrationData] = useState({});
	const [enteranceData, setEnteranceData] = useState({});
	const [jobData, setJobData] = useState({});

	const [loading, setLoading] = useState(true);

	window.addEventListener("scroll", (e) => {
		if (headerRef.current == null) return;
		if (e.path[1].scrollY > headerRef.current.offsetTop - 150) {
			props.setIsHeaderTransparent(false);
		} else {
			props.setIsHeaderTransparent(true);
		}
	});

	async function fetchData(id) {
		const response = await getMajorById(id);
		if (response.status == 200) {
			const data = response.data;
			console.log(data.migration);

			setInfoData(data.info);
			setMigrationData(data.migration);
			setEnteranceData(data.entrance.rankings);
			setJobData(data.jobs);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(majorId);
		props.setIsHeaderTransparent(true);
	}, []);

	const majorContent = (
		<Container className={classes.container}>
			<Grid container justify="center">
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="کنکور" scrollTo={enteranceRef} />
				</Grid>
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="مهاجرت" scrollTo={migrationRef} />
				</Grid>
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="دسترسی" scrollTo={jobRef} />
				</Grid>
			</Grid>

			<div style={{ width: "100%", height: "50%" }}>
				<button
					ref={enteranceRef}
					style={{ visibility: "hidden", width: 0, height: 0 }}></button>
				<Grid container justify="center">
					<Enterance data={enteranceData} />
				</Grid>

				<button
					ref={migrationRef}
					style={{ visibility: "hidden", width: 0, height: 0 }}></button>
				<Grid container justify="center">
					<Migration data={migrationData} />
				</Grid>

				<button
					ref={jobRef}
					style={{ visibility: "hidden", width: 0, height: 0 }}></button>
				<Grid container justify="center">
					<Job data={jobData} />
				</Grid>
			</div>
		</Container>
	);

	function showPageContent() {
		if (loading) {
			return (
				<Grid container justify="center">
					<CircularProgress />
				</Grid>
			);
		}
		return majorContent;
	}

	return (
		<React.Fragment>
			<ProfileHeader data={infoData} />
			<button
				ref={headerRef}
				style={{ visibility: "hidden", width: 0, height: 0 }}></button>
			{showPageContent()}
		</React.Fragment>
	);
}
