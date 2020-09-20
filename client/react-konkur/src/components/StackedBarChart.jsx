import React from "react";
import { Line, Bar } from "react-chartjs-2";

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
		let percent = parseInt((first / (first + second)) * 100);
		firstSet.push(percent);
		secondSet.push(100 - percent);
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
		<Bar
			options={{
				scales: {
					xAxes: [
						{
							stacked: true,
						},
					],
					yAxes: [
						{
							stacked: true,
						},
					],
				},
			}}
			data={data}
		/>
	);
}
