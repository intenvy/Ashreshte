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
				<Grid item container xs={6}>
					<iframe
						style={{ width: "100%", height: 200 }}
						src={data.departmentLocationEmbed}></iframe>
				</Grid>
				<Grid item container xs={6}>
					{data.hasDormitory ? (
						<iframe
							style={{ width: "100%", height: 200 }}
							src={data.dormLocationEmbed}></iframe>
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
