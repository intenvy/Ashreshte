import React from "react";
import { Avatar, Typography } from "@material-ui/core";
import EclipseTitle from "./EclipseTitle";
import SeperatorLine from "./SeperatorLine";
import Colors from "../utilities/Colors";
import SUTImage from "../images/SUT.jpg";

export default function ProfileHeader(props) {
	const data = props.data;
	return (
		<div style={{ position: "relative" }}>
			<img style={{ width: "100%" }} src={SUTImage} />

			<div
				style={{
					position: "absolute",
					bottom: -45,
					left: 32,
					backgroundColor: Colors.primary,
					borderRadius: "50%",
					padding: 8,
					zIndex: 1,
				}}>
				<Avatar
					style={{
						width: 150,
						height: 150,
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
					right: 48,
					width: "calc(100%-48px)",
				}}>
				<EclipseTitle
					title={data.faName + " - " + data.englishName}
					height={45}
					variant="body1"
				/>
			</div>
		</div>
	);
}
