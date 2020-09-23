import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";
import LineChart from "./LineChart";
import AreaSelection from "./AreaSelection";
import ContentSeparator from "./ContentSeparator";

export default function Job(props) {
	const data = props.data;
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	const mobile = dimensions.width > 700 ? false : true;
	function Stat(props) {
		return (
			<Grid item justifty="center" xs={3}>
				<Grid container justify="center">
					<Typography
						variant={mobile ? "h4" : "h2"}
						style={{ fontFamily: "myFirstFont", fontWeight: "bold" }}>
						{props.number}
					</Typography>
				</Grid>
				<Grid container justify="center">
					<Typography
						variant={mobile ? "body2" : "h6"}
						style={{
							fontFamily: "myFirstFont",
							fontWeight: "bold",
							textAlign: "center",
						}}>
						{props.text}
					</Typography>
				</Grid>
			</Grid>
		);
	}

	return (
		<Container disableGutters maxWidth={false}>
			<ContentSeparator title="وضعیت بازار کار" />
			<Grid container justify="jusitfy">
				<Typography
					variant="p"
					style={{
						fontFamily: "myFirstFont",
						marginRight: dimensions.width / 20,
						marginLeft: dimensions.width / 20,
					}}>
					یکم چرت و پرت و چرت و پرت و پرت و پرت و عن و گه و پرت و چرت
				</Typography>
			</Grid>
			<Grid container justify="center" style={{ marginBottom: 64 }}>
				<Stat number={data.availableOnlineJobs} text={"کار های موجود"} />
				<Stat number={data.salary} text={"حقوق ماهانه"} />
				<Stat number={data.weeklyWorkHours} text={"ساعت کار در هفته"} />
				<Stat number={data.earningPerHour} text={"درآمد در ساعت"} />
			</Grid>
		</Container>
	);
}
