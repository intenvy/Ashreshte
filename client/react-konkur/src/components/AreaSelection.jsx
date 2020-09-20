import React from "react";
import { Chip, Typography } from "@material-ui/core";

export default function AreaSelection(props) {
	const { options, value } = props;

	function createChips(options, value) {
		let array = [];
		for (let i = 0; i < options.length; i++) {
			array.push(
				<Chip
					color="secondary"
					label={<Typography color="white">{options[i]}</Typography>}
					variant={value == i ? "default" : "outlined"}
					onClick={() => {
						props.setValue(i);
					}}
				/>
			);
		}
		return array;
	}

	return <div>{createChips(options, value)}</div>;
}
