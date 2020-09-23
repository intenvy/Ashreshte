import React from "react";
import Header from "./Header";
import MobileHeader from "./MobileHeader";

export default function GeneralHeader(props) {
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	if (dimensions.width > 700) {
		return <Header transparent={props.transparent} />;
	} else {
		return <MobileHeader transparent={props.transparent} />;
	}
}
