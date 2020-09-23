import React, { useState, useEffect } from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";
import LineChart from "./LineChart";
import AreaSelection from "./AreaSelection";
import ContentSeparator from "./ContentSeparator";

export default function Entrance(props) {
	const data = props.data;

	const [selectedArea, setSelectedArea] = useState(2);
	const [selectedData, setSelectedData] = useState(null);
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	const mobile = dimensions.width > 700 ? false : true;

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
		<Container disableGutters maxWidth={dimensions.width > 700 ? false : "xs"}>
			<ContentSeparator title="وضعیت کنکور" />

			<Grid container>
				<Grid item container style={{ paddingTop: 16 }}>
					<div
						style={{
							width: "100%",
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
				<Grid item container justify="center">
					<div style={{ width: mobile ? "90%" : "60%" }}>
						{selectedData != null && (
							<LineChart
								redraw
								data={selectedData.rankings}
								labels={selectedData.years}
							/>
						)}
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
