import React from "react";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";
import CommonStyles from "../utilities/CommonStyles";
import ShowIcon from "./ShowIcon";
export default function TransportationStats(props) {
	const data = props.data;
	function Stat(props) {
		return (
			<div
				style={{
					...CommonStyles.centerVertical,
					padding: 8,
					margin: 8,
					height: "unset",
				}}>
				<Typography variant="body1">{props.name}</Typography>
				<div
					style={{ display: "flex", justifyContent: "center", width: "100%" }}>
					{props.text ? (
						<Typography variant="caption">{props.text}</Typography>
					) : props.value ? (
						<ShowIcon name="check" style={{ color: "green" }} />
					) : (
						<ShowIcon name="close" style={{ color: "red" }} />
					)}
				</div>
			</div>
		);
	}

	return (
		<Paper
			style={{
				padding: 16,
				margin: 32,
				display: "flex",
				justifyContent: "center",
				width: "70%",
				background: "#f1F1f1",
			}}>
			<div
				style={{ display: "flex", justifyContent: "center", height: "100%" }}>
				<Stat name="مترو" value={data.hasMetro} />
				<Stat name="BRT" value={data.hasBRT} />
				<Stat name="اتوبوس" value={data.hasBus} />
			</div>
			<div style={{ marginTop: 4, marginBottom: 4 }}>
				<Divider orientation="vertical" />
			</div>
			<div
				style={{ display: "flex", justifyContent: "center", height: "100%" }}>
				<Stat name="خوابگاه" value={data.hasDormitory} />
				{data.hasDormitory && (
					<Stat
						name="فاصله تا خوابگاه"
						text={data.dormToDptDistance.toString() + " m"}
					/>
				)}
			</div>
		</Paper>
	);
}
