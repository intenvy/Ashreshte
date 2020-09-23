import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import EclipseTitle from "./EclipseTitle";
import SeperatorLine from "./SeperatorLine";
import Colors from "../utilities/Colors";
import SUTImage from "../images/SUT.jpg";
import useWindowDimensions from "../functions/useWindowDimensions";

export default function ProfileHeader(props) {
	const data = props.data;
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	return (
		<div style={{ position: "relative" }}>
			<img style={{ width: "100%" }} src={SUTImage} />

			<div
				style={{
					position: "absolute",
					bottom: (-dimensions.width * 0.15) / 3,
					left: dimensions.width * 0.05,
					backgroundColor: Colors.primary,
					borderRadius: "50%",
					padding: dimensions.width * 0.005,
					zIndex: 1,
					width: dimensions.width * 0.15,
					height: dimensions.width * 0.15,
				}}>
				<Avatar
					style={{
						width: "100%",
						height: "100%",
					}}
					src="https://picsum.photos/seed/picsum/140/70"
				/>
			</div>

			<div
				style={{
					position: "absolute",
					bottom: 4,
					right: 0,
					width: "100%",
				}}>
				<SeperatorLine />
			</div>
			<div
				style={{
					position: "absolute",
					bottom: -15,
					right: dimensions.width * 0.05,
					width: dimensions.width * 0.95,
				}}>
				<EclipseTitle
					title={
						dimensions.width > 700
							? data.faName + " - " + data.englishName
							: data.faName
					}
					height={45}
					variant="body1"
				/>
			</div>
		</div>
	);
}
