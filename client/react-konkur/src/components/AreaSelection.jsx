import React from "react";
import { Chip, Typography } from "@material-ui/core";

export default function AreaSelection(props) {
	const { options, value } = props;

	function createChips(options, value) {
		let array = [];
		for (let i = 0; i < options.length; i++) {
			const selected = value == i;
			array.push(
				<Chip
					style={{ margin: 4 }}
					color="primary"
					label={
						<Typography
							style={{
								color: selected ? "white" : null,
								fontFamily: "myFirstFont",
							}}>
							{options[i]}
						</Typography>
					}
					variant={selected ? "default" : "outlined"}
					onClick={() => {
						props.setValue(i);
					}}
				/>
			);
		}
		return (
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					width: "100%",
					paddingTop: 16,
					paddingBottom: 16,
				}}>
				<div
					style={{
						display: "flex",
						justifyContent: "center",
						flexWrap: "wrap",
					}}>
					{array}
				</div>
			</div>
		);
	}

	return <div>{createChips(options, value)}</div>;
}
