import React from "react";
import Colors from "../../utilities/Colors";
class Footer extends React.Component {
	render() {
		return (
			<footer className="page-footer font-small  pt-4" dir="ltr">
				<div style={{ backgroundColor: Colors.primary }}>
					© 2020 Copyright:
					<a href="https://mohsen.com/"> Mohsen.com</a>
				</div>
			</footer>
		);
	}
}

export default Footer;
