import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";
import LineChart from "./LineChart";
import AreaSelection from "./AreaSelection";

export default function Job(props) {
	const data = props.data;

	return (
		<Container>
			<Grid container justify="center" style={{ marginBottom: 64 }}>
				<Typography variant="h6">بازار کار</Typography>
			</Grid>

			<Typography variant="body1">
				{"کار های موجود: " + data.availableOnlineJobs}
			</Typography>
			<Typography variant="body1">
				{"درآمد در ساعت: " + data.earningPerHour}
			</Typography>
			<Typography variant="body1">{"حقوق ماهانه: " + data.salary}</Typography>
			<Typography variant="body1">
				{"ساعت کار در هفته: " + data.weeklyWorkHours}
			</Typography>
		</Container>
	);
}
