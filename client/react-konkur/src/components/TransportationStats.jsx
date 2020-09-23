import React from "react";
import { Paper, Typography, Grid, Divider } from "@material-ui/core";
import CommonStyles from "../utilities/CommonStyles";
import ShowIcon from "./ShowIcon";
import checkImage from "../images/check.png";
import uncheckImage from "../images/uncheck.png";
import busImage from "../images/bus.png";
import BRTImage from "../images/brt.png";
import bedImage from "../images/bed.png";
import metroImage from "../images/metro.png";
import distanceImage from "../images/distance.png";

export default function TransportationStats(props) {
	const data = props.data;
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	function Stat(props) {
		return (
			<div
				style={{
					...CommonStyles.centerVertical,
					padding: 8,
					margin: 8,
					height: "unset",
				}}>
				<Grid container justify="center">
					<img style={{ width: 50, height: 50 }} src={props.imageSrc} />
				</Grid>

				<Grid container justify="center">
					<Typography
						variant="caption"
						style={{ fontFamily: "myFirstFont", margin: 8 }}>
						{props.name}
					</Typography>
				</Grid>
				<Grid container justify="center">
					<div
						style={{
							display: "flex",
							justifyContent: "center",
							width: "100%",
						}}>
						{props.text ? (
							<Typography
								variant="caption"
								style={{ fontFamily: "myFirstFont" }}>
								{props.text}
							</Typography>
						) : props.value ? (
							<img style={{ width: 24, height: 24 }} src={checkImage} />
						) : (
							<img style={{ width: 24, height: 24 }} src={uncheckImage} />
						)}
					</div>
				</Grid>
			</div>
		);
	}

	return (
		<div
			style={{
				padding: 16,
				margin: 32,
				display: "flex",
				justifyContent: "center",
				flexWrap: "wrap",
				width: "70%",
			}}>
			<div style={{ display: "flex", justifyContent: "center" }}>
				<Stat imageSrc={metroImage} name="مترو" value={data.hasMetro} />
				<Stat imageSrc={BRTImage} name="BRT" value={data.hasBRT} />
				<Stat imageSrc={busImage} name="اتوبوس" value={data.hasBus} />
			</div>
			{dimensions.width > 700 && (
				<div style={{ marginTop: 4, marginBottom: 4 }}>
					<Divider orientation="vertical" />
				</div>
			)}

			<div style={{ display: "flex", justifyContent: "center" }}>
				<Stat imageSrc={bedImage} name="خوابگاه" value={data.hasDormitory} />
				{data.hasDormitory && (
					<Stat
						imageSrc={distanceImage}
						name="فاصله تا خوابگاه"
						text={data.dormToDptDistance.toString() + " m"}
					/>
				)}
			</div>
		</div>
	);
}
