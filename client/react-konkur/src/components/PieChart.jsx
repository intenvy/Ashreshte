import React from "react";
import { Line, Pie } from "react-chartjs-2";

export default function PieChart(props) {
	const data = {
		labels: props.labels,
		datasets: [
			{
				data: props.data,
				backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],
			},
		],
	};
	return <Pie options={{ legend: { position: "right" } }} data={data} />;
}
