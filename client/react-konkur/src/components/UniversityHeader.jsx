import React from "react";
import { Avatar, Typography } from "@material-ui/core";

export default function UniversityHeader(props) {
	const data = props.data;
	return (
		<div style={{ position: "relative", paddingBottom: 75 }}>
			<img
				style={{ width: "100%", boxShadow: "0px 3px 5px 0px black" }}
				src="https://picsum.photos/seed/picsum/160/40"
			/>

			<div
				style={{
					position: "absolute",
					bottom: 32,
					left: 32,
					backgroundColor: "white",
					borderRadius: "50%",
					padding: 4,
					boxShadow: "0px 3px 20px 0px black",
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
					bottom: 100,
					right: 8,
				}}>
				<Typography variant="h6" style={{ color: "white" }}>
					{data.faName}
				</Typography>
				<Typography variant="h6" style={{ color: "white" }}>
					{data.englishName}
				</Typography>
			</div>
		</div>
	);
}
