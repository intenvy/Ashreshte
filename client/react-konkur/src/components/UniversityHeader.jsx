import React from "react";
import { Avatar } from "@material-ui/core";

export default function UniversityHeader(props) {
	return (
		<div style={{ position: "relative", paddingBottom: 75 }}>
			<img
				style={{ width: "100%" }}
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
				}}>
				<Avatar
					style={{ width: 150, height: 150 }}
					src="https://picsum.photos/seed/picsum/140/70"
				/>
			</div>
		</div>
	);
}
