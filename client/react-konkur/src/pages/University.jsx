import React, { useState, useRef } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
} from "@material-ui/core";
import Colors from "../utilities/Colors";
import { Link } from "react-router-dom";
import SideNavigation from "../components/SideNavigation";
import StackedBarChart from "../components/StackedBarChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import AreaSelection from "../components/AreaSelection";
import ScrollLink from "../components/ScrollLink";
import UniversityName from "../components/UniversityName";
import UniversityTransportation from "../components/UniversityTransportaiton";
import UniversityMigration from "../components/UniversityMigration";
import UniversityEnterance from "../components/UniversityEnterance";
const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		paddingRight: 180 + 16,
		paddingTop: 76 + 16,
	},
}));

export default function University(props) {
	const classes = useStyles();
	const transportationRef = useRef(null);
	const enteranceRef = useRef(null);
	const migrationRef = useRef(null);
	const [selectedArea, setSelectedArea] = useState(0);

	const transportationData = {
		departmentLocationEmbed:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
		dormLocationEmbed:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
		dormToDptDistance: 900,
		hasBRT: true,
		hasMetro: true,
		hasBus: false,
		hasDormitory: true,
	};

	const migrationData = {
		years: [92, 93, 94],
		inIran: [24, 923, 75123],
		notInIran: [144, 13, 25333],
	};

	const enteranceData = {
		lowestNationalRank: { years: [92, 93, 94], rankings: [231, 321, 554] },
		lowestDistrict1Rank: { years: [92, 93, 94], rankings: [22, 32, 55] },
		lowestDistrict2Rank: { years: [92, 93, 94], rankings: [231, 3221, 5534] },
		lowestDistrict3Rank: { years: [92, 93, 94], rankings: [2331, 31, 5524] },
		lowest5PercentRank: { years: [92, 93, 94], rankings: [45, 345, 534] },
		lowest25PercentRank: { years: [92, 93, 94], rankings: [54, 55, 44] },
	};

	return (
		<React.Fragment>
			<SideNavigation />
			<Container className={classes.container}>
				<UniversityName />

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
						<UniversityEnterance data={enteranceData} />
					</Grid>

					<button
						ref={migrationRef}
						style={{ visibility: "hidden", width: 0, height: 0 }}></button>
					<Grid container justify="center">
						<UniversityMigration data={migrationData} />
					</Grid>

					<button
						ref={transportationRef}
						style={{ visibility: "hidden", width: 0, height: 0 }}></button>
					<Grid container justify="center">
						<UniversityTransportation data={transportationData} />
					</Grid>
				</div>
			</Container>
		</React.Fragment>
	);
}
