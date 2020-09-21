import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";
import LineChart from "./LineChart";
import AreaSelection from "./AreaSelection";

export default function UniversityEntrance(props) {
	const data = props.data;

	const [selectedArea, setSelectedArea] = useState(2);
	const [selectedData, setSelectedData] = useState(null);

	useEffect(() => {
		let name;
		console.log(selectedArea);
		switch (selectedArea) {
			case 0:
				name = "lowestDistrict1Rank";
				break;
			case 1:
				name = "lowestDistrict2Rank";
				break;
			case 2:
				name = "lowestDistrict3Rank";
				break;
			case 3:
				name = "lowestNationalRank";
				break;
			case 4:
				name = "lowest5PercentRank";
				break;
			case 5:
				name = "lowest25PercentRank";
				break;
		}

		setSelectedData(data[name]);
	}, [selectedArea]);

	return (
		<Container>
			<Grid container justify="center" style={{ marginBottom: 64 }}>
				<Typography variant="h6">کنکور</Typography>
			</Grid>
			<Grid container spacing={5}>
				<Grid item container xs={6}>
					{selectedData != null && (
						<LineChart
							redraw
							data={selectedData.rankings}
							labels={selectedData.years}
						/>
					)}
				</Grid>
				<Grid item container xs={6} style={{ paddingTop: 16 }}>
					<div
						style={{
							height: "100%",
							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
						}}>
						<AreaSelection
							options={["منطقه 1", "منطقه 2", "منطقه 3", "کشوری", "25%", "5%"]}
							value={selectedArea}
							setValue={setSelectedArea}
						/>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
