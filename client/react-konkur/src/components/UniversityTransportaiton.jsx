import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Colors from "../utilities/Colors";
import TransportationStats from "./TransportationStats";

export default function UniversityTransportation(props) {
	const data = props.data;

	return (
		<Container>
			<Grid container justify="center" style={{ marginBottom: 64 }}>
				<Typography variant="h6">دسترسی</Typography>
			</Grid>
			<Grid container spacing={5}>
				<Grid item container xs={6} style={{ textAlign: "center" }}>
					<div>
						<iframe
							style={{ width: "100%", height: 200 }}
							src={data.departmentLocationEmbed}></iframe>

						<Typography variant="caption" align="center">
							{props.mapTitle}
						</Typography>
					</div>
				</Grid>
				<Grid item container xs={6} style={{ textAlign: "center" }}>
					{data.hasDormitory ? (
						<div>
							<iframe
								style={{ width: "100%", height: 200 }}
								src={data.dormLocationEmbed}></iframe>
							<Typography variant="caption">خوابگاه</Typography>
						</div>
					) : (
						<div
							style={{
								width: "100%",
								height: 200,
								backgroundColor: Colors.primary,
							}}>
							<Typography style={{ color: "white" }}>خوابگاه ندارد</Typography>
						</div>
					)}
				</Grid>
			</Grid>
			<Grid container justify="center">
				<TransportationStats data={data} />
			</Grid>
		</Container>
	);
}
