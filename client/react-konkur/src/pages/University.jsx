import React, { useState } from "react";
import { Container, Drawer, makeStyles, Typography } from "@material-ui/core";
import Colors from "../utilities/Colors";
import { Link } from "react-router-dom";
import SideNavigation from "../components/SideNavigation";
import StackedBarChart from "../components/StackedBarChart";
import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";
import AreaSelection from "../components/AreaSelection";
const useStyles = makeStyles((theme) => ({
	paper: {
		width: 180,
		top: "unset",
		backgroundColor: Colors.sideNavigationBackground,
	},
	container: {
		paddingRight: 180,
		paddingTop: 76,
	},
}));

export default function University(props) {
	const classes = useStyles();
	const [selectedArea, setSelectedArea] = useState(0);

	const totalMigration = [5300, 12300];

	return (
		<React.Fragment>
			<SideNavigation />
			<Container className={classes.container}>
				<div style={{ width: "50%", height: "50%" }}>
					<StackedBarChart
						data={{
							years: [92, 93, 94],
							inIran: [24, 923, 75123],
							notInIran: [144, 13, 25333],
						}}
					/>
					<PieChart data={totalMigration} labels={["ایران", "خارج"]} />
					<LineChart data={totalMigration} labels={["ایران", "خارج"]} />
					<AreaSelection
						options={["کشور", "منطقه 1", "منطقه 2", "منطقه 3", "25%", "5%"]}
						value={selectedArea}
						setValue={setSelectedArea}
					/>
				</div>
			</Container>
		</React.Fragment>
	);
}
