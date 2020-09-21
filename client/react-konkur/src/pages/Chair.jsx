import React, { useState, useRef } from "react";
import {
	Container,
	Drawer,
	makeStyles,
	Typography,
	Grid,
	Fade,
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
import Transportation from "../components/Transportaiton";
import Migration from "../components/Migration";
import Enterance from "../components/Enterance";
import UniversityHeader from "../components/UniversityHeader";
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

export default function Chair(props) {
	const classes = useStyles();
	const transportationRef = useRef(null);
	const enteranceRef = useRef(null);
	const migrationRef = useRef(null);
	const headerRef = useRef(null);
	const [sideNavVisible, setSideNavVisible] = useState(false);
	const [selectedArea, setSelectedArea] = useState(0);
	// const [infoData, setInfoData] = useState(props.infoData);
	// const [migrationData, setMigrationData] = useState(props.migrationData);
	// const [enteranceData, setEnteranceData] = useState(
	// 	props.enteranceData.rankings
	// );
	// const [transportationData, setTransportationData] = useState({
	// 	...props.transportationData,
	// 	departmentLocationEmbed:
	// 		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// 	dormLocationEmbed:
	// 		"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// });
	const [loading, setLoading] = useState(true);

	const infoData = props.infoData;
	const migrationData = props.migrationData;
	const enteranceData = props.enteranceData.rankings;
	const transportationData = {
		...props.transportationData,
		departmentLocationEmbed:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
		dormLocationEmbed:
			"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	};
	// async function fetchData(type, id) {
	// 	if (type == "university") {
	// 		const response = await getUniversityById(id);
	// 		if (response.status == 200) {
	// 			const data = response.data;
	// 			console.log(data.migration);
	// 			setMigrationData(data.migration);
	// 			setEnteranceData(data.entrance.rankings);
	// 			setTransportationData({
	// 				...data.transportation,
	// 				departmentLocationEmbed:
	// 					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// 				dormLocationEmbed:
	// 					"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d79020.58453827773!2d6.129935536436395!3d51.76241738753748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c770c565689d0b%3A0x427f28131547450!2s47551%20Bedburg-Hau%2C%20Germany!5e0!3m2!1sen!2snl!4v1600608822485!5m2!1sen!2snl",
	// 			});
	// 			setLoading(false);
	// 		}
	// 	}
	// }

	return (
		<React.Fragment>
			{/* <UniversityHeader /> */}

			<button
				ref={headerRef}
				style={{ visibility: "hidden", width: 0, height: 0 }}></button>
			<Container className={classes.container}>
				<h1>{infoData.majorId}</h1>
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
						<Transportation data={transportationData} mapTitle={"دانشکده"} />
					</Grid>
				</div>
			</Container>
		</React.Fragment>
	);
}
