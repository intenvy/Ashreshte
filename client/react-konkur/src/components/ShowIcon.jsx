import React from "react";

import * as a from "@material-ui/icons";

export default function ShowIcon(props) {
	let icon;
	let rotation = 0;
	switch (props.name) {
		case "search":
			icon = <a.Search />;
			break;
	}
	//return icon;
	if (icon == null) {
		icon = <a.QuestionAnswer />;
	}
	let newProps = { ...props };
	delete newProps.name;

	return React.cloneElement(icon, newProps);

	//	return mdiIcon;
}
