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

const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		paddingRight: 180 + 16,
		paddingTop: 32,
	},
}));

export default function University(props) {
	const classes = useStyles();
	const { id: universityId } = useParams();
	const transportationRef = useRef(null);
	const enteranceRef = useRef(null);
	const migrationRef = useRef(null);
	const headerRef = useRef(null);
	const [sideNavVisible, setSideNavVisible] = useState(false);
	const [selectedArea, setSelectedArea] = useState(0);
	const [infoData, setInfoData] = useState({});
	const [migrationData, setMigrationData] = useState({});
	const [enteranceData, setEnteranceData] = useState({});
	const [transportationData, setTransportationData] = useState({});
	const [chairsData, setChairsData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedChairId, setSelectedChairId] = useState(-1); //-1 means we are on university page
	// SELECTED CHAIR ID IS NOT ACTUALLY ID, IT'S INDEX!

	// const transportationData = {
	// 	departmentLocationEmbed:
	// 		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// 	dormLocationEmbed:
	// 		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// 	dormToDptDistance: 900,
	// 	hasBRT: true,
	// 	hasMetro: true,
	// 	hasBus: false,
	// 	hasDormitory: true,
	// };

	// const migrationData = {
	// 	years: [92, 93, 94],
	// 	inIran: [24, 923, 75123],
	// 	notInIran: [144, 13, 25333],
	// };

	// const enteranceData = {
	// 	lowestNationalRank: { years: [92, 93, 94], rankings: [231, 321, 554] },
	// 	lowestDistrict1Rank: { years: [92, 93, 94], rankings: [22, 32, 55] },
	// 	lowestDistrict2Rank: { years: [92, 93, 94], rankings: [231, 3221, 5534] },
	// 	lowestDistrict3Rank: { years: [92, 93, 94], rankings: [2331, 31, 5524] },
	// 	lowest5PercentRank: { years: [92, 93, 94], rankings: [45, 345, 534] },
	// 	lowest25PercentRank: { years: [92, 93, 94], rankings: [54, 55, 44] },
	// };

	window.addEventListener("scroll", (e) => {
		if (headerRef.current == null) return;
		if (e.path[1].scrollY > headerRef.current.offsetTop - 150) {
			props.setIsHeaderTransparent(false);
			setSideNavVisible(true);
		} else {
			props.setIsHeaderTransparent(true);
			setSideNavVisible(false);
		}
	});

	async function fetchData(id) {
		const response = await getUniversityById(id);
		if (response.status == 200) {
			const data = response.data;
			console.log(data.migration);
			setChairsData(data.chairs);
			setInfoData(data.info);
			setMigrationData(data.migration);
			setEnteranceData(data.entrance.rankings);
			setTransportationData({
				...data.transportation,
				departmentLocationEmbed:
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
				dormLocationEmbed:
					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
			});
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData(universityId);
	}, []);

	useEffect(() => {
		if (selectedChairId != -1) {
			props.setIsHeaderTransparent(false);
			setSideNavVisible(true);
		} else {
			props.setIsHeaderTransparent(true);
			setSideNavVisible(false);
		}
	}, [selectedChairId]);

	const universityContent = (
		<Container className={classes.container}>
			<Grid container justify="center" style={{ marginBottom: 32 }}>
				<Typography variant="p" wrap>
					{infoData.description}
				</Typography>
			</Grid>

			<Grid container justify="center">
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="کنکور" scrollTo={enteranceRef} />
				</Grid>
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="مهاجرت" scrollTo={migrationRef} />
				</Grid>
				<Grid container justify="center" item xs={4}>
					<ScrollLink name="دسترسی" scrollTo={transportationRef} />
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
					ref={transportationRef}
					style={{ visibility: "hidden", width: 0, height: 0 }}></button>
				<Grid container justify="center">
					<Transportation data={transportationData} mapTitle={"دانشگاه"} />
				</Grid>
			</div>
		</Container>
	);

	function showPageContent(selectedChairId, chairsData) {
		console.log(selectedChairId);
		if (loading) {
			return (
				<Grid container justify="center">
					<CircularProgress />
				</Grid>
			);
		}
		if (selectedChairId == -1) {
			return universityContent;
		}
		//TODO: show chair
		else {
			const chairData = chairsData[selectedChairId];
			console.log(chairData.migration);
			return (
				<Chair
					transportationData={chairData.transportaion} //SPELL IS INCORRECT
					infoData={chairData.info}
					enteranceData={chairData.entrance}
					migrationData={chairData.migration}
				/>
			);
		}
	}

	return (
		<React.Fragment>
			<Fade in={sideNavVisible} timeout={1000}>
				<div>
					<SideNavigation
						selectedChairId={selectedChairId}
						setSelectedChairId={setSelectedChairId}
						chairsData={chairsData}
					/>
				</div>
			</Fade>
			<ProfileHeader data={infoData} />
			<button
				ref={headerRef}
				style={{ visibility: "hidden", width: 0, height: 0 }}></button>
			{showPageContent(selectedChairId, chairsData)}
		</React.Fragment>
	);
}
