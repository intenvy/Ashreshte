import React from "react";
import { Line, Bar } from "react-chartjs-2";
import { Typography } from "@material-ui/core";

export default function StackedBarChart(props) {
	const xAxisName = "years";
	const firstParameter = "inIran";
	const secondParameter = "notInIran";
	const rawData = props.data;

	let firstSet = [];
	let secondSet = [];
	for (let i = 0; i < rawData[firstParameter].length; i++) {
		let first = rawData[firstParameter][i];
		let second = rawData[secondParameter][i];
		if (props.showPercentage) {
			let percent = parseInt((first / (first + second)) * 100);
			firstSet.push(percent);
			secondSet.push(100 - percent);
		} else {
			firstSet.push(first);
			secondSet.push(second);
		}
	}

	const data = {
		labels: rawData[xAxisName],
		datasets: [
			{
				barPercentage: 0.4,
				label: "ایران",
				data: firstSet,
				backgroundColor: "#01a2f9",
			},
			{
				barPercentage: 0.4,
				label: "خارج",
				data: secondSet,
				backgroundColor: "#42bad0",
			},
		],
	};
	return (
		<div style={{ textAlign: "center" }}>
			<Typography variant="subtitle1" align="center">
				{props.title}
			</Typography>
			<Bar
				redraw
				height={250}
				options={{
					scales: {
						xAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: props.xAxesName ? props.xAxesName : "سال کنکور",
								},
								stacked: true,
							},
						],
						yAxes: [
							{
								scaleLabel: {
									display: true,
									labelString: props.yAxesName,
								},
								stacked: true,
							},
						],
					},
				}}
				data={data}
			/>
		</div>
	);
}
