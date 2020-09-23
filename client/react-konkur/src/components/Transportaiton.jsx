import React, { useState } from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import Colors from "../utilities/Colors";
import TransportationStats from "./TransportationStats";
import ContentSeparator from "./ContentSeparator";
import AreaSelection from "./AreaSelection";

export default function Transportation(props) {
	const data = props.data;
	const [type, setType] = useState(0); //0: uni, 1: dorm
	return (
		<Container disableGutters maxWidth={false}>
			<ContentSeparator title="وضعیت دسترسی" />
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
							options={[props.mapTitle, "خوابگاه"]}
							value={type}
							setValue={setType}
						/>
					</div>
				</Grid>
				<Grid item container justify="center">
					<div>
						<iframe
							style={{ width: "100%", height: 250 }}
							src={
								type == 0
									? data.departmentLocationEmbed
									: data.dormLocationEmbed
							}></iframe>
					</div>
				</Grid>
				<Grid container justify="center" style={{ paddingBottom: 64 }}>
					<TransportationStats data={data} />
				</Grid>
			</Grid>
		</Container>
	);
}
