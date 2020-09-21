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
					color="secondary"
					label={
						<Typography style={{ color: selected ? "white" : null }}>
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
			<div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{[array[0], array[1], array[2]]}
				</div>
				<div style={{ display: "flex", justifyContent: "center" }}>
					{[array[3], array[4], array[5]]}
				</div>
			</div>
		);
	}

	return <div>{createChips(options, value)}</div>;
}
