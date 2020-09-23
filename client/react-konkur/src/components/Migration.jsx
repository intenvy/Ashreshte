import React, { useState } from "react";
import PieChart from "./PieChart";
import StackedBarChart from "./StackedBarChart";
import { Container, Grid, Typography } from "@material-ui/core";
import ContentSeparator from "./ContentSeparator";
import AreaSelection from "./AreaSelection";

export default function Migration(props) {
	const data = props.data;
	const [type, setType] = useState(0); //0: number , 1: percent
	console.log(type);
	const totalMigration = [
		data.inIran.reduce((a, b) => a + b, 0),
		data.notInIran.reduce((a, b) => a + b),
		0,
	];
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	const mobile = dimensions.width > 700 ? false : true;

	return (
		<Container disableGutters maxWidth={dimensions.width > 700 ? false : "xs"}>
			<ContentSeparator title="وضعیت مهاجرت" />
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
							options={["میزان اپلای", "درصد اپلای"]}
							value={type}
							setValue={setType}
						/>
					</div>
				</Grid>
				<Grid item container justify="center">
					<div style={{ width: mobile ? "90%" : "60%" }}>
						<StackedBarChart
							data={data}
							showPercentage={type == 1 ? true : false}
							title={type == 1 ? "میزان اپلای" : "درصد اپلای"}
							xAxesName="سال کنکور"
							yAxesName={type == 1 ? "میزان افراد" : "درصد افراد"}
						/>
					</div>
				</Grid>
			</Grid>
		</Container>
	);
}
