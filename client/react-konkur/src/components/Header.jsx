import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Colors from "../utilities/Colors";
import { makeStyles, Tabs, Tab, Typography } from "@material-ui/core";
import Searchbar from "./Searchbar";
import commonStyles from "../utilities/CommonStyles";
import { Link, useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
	container: {
		zIndex: 2000,
		position: "fixed",
		paddingRight: 70,
		paddingLeft: 70,
		height: 76,
		//backgroundColor: Colors.primary,
		//opacity: "50%",
		transition: "all 1s ease",
		WebkitTransition: "all 1s ease",
		MozTransition: "all 1s ease",
		width: "100%",
	},
	image: {
		width: 100,
		height: 68,
	},
	tabContainer: {
		height: "100%",
	},
	tabs: {
		marginRight: 32,
	},
	tab: { color: "white", minWidth: 0, width: 100 },
	centerVertical: { ...commonStyles.centerVertical, width: "100%" },
}));

export default function Header(props) {
	const classes = useStyles();
	const history = useHistory();
	const [tabValue, setTabValue] = useState(-1);

	useEffect(() => {
		switch (tabValue) {
			case 0:
				history.push("/universities");
				break;
			case 1:
				history.push("/majors");
				break;
			case 2:
				history.push("/aboutus");
				break;
			case 3:
				history.push("/support");
				break;
		}
		// if (tabValue == -1) {
		// 	setTabValue(0);
		// }
	}, [tabValue]);

	return (
		<Grid
			className={classes.container}
			container
			style={{
				backgroundColor: props.transparent
					? Colors.primary + "00"
					: Colors.primary,
			}}>
			<div className={classes.centerVertical}>
				<Grid container justify="space-between">
					<div style={{ display: "flex" }}>
						<img
							onClick={() => history.push("/")}
							className={classes.image}
							src="https://img.techpowerup.org/200919/download-superman-logo-png-hd179.png"></img>

						<Tabs
							className={classes.tabs}
							classes={{ flexContainer: classes.tabContainer }}
							textColor="secondary"
							value={tabValue}
							onChange={(e, newValue) => {
								setTabValue(newValue);
							}}>
							<Tab
								className={classes.tab}
								disableRipple
								style={{ height: "100%" }}
								label={<Typography variant="h6">دانشگاه ها</Typography>}
								value={0}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={<Typography variant="h6">رشته ها</Typography>}
								value={1}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={<Typography variant="h6">درباره ما</Typography>}
								value={2}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={<Typography variant="h6">حمایت</Typography>}
								value={3}
							/>
						</Tabs>
					</div>
					<div>
						<Searchbar />
					</div>
				</Grid>
			</div>
		</Grid>
	);
}
