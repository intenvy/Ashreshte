import React from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";

export default function UniversityMigration(props) {
	const data = props.data;
	const totalMigration = [
		data.inIran.reduce((a, b) => a + b, 0),
		data.notInIran.reduce((a, b) => a + b),
		0,
	];
	return (
		<Container>
			<Grid container justify="center" style={{ marginBottom: 64 }}>
				<Typography variant="h6">مهاجرت / اپلای</Typography>
			</Grid>
			<Grid container spacing={5}>
				<Grid item container xs={6}>
					<PieChart data={totalMigration} labels={["ایران", "خارج"]} />
				</Grid>
				<Grid item container xs={6}>
					<StackedBarChart data={data} />
				</Grid>
			</Grid>
		</Container>
	);
}
