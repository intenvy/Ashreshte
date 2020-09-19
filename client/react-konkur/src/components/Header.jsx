import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Colors from "../utilities/Colors";
import { makeStyles, Tabs, Tab, Typography } from "@material-ui/core";
import Searchbar from "./Searchbar";
import commonStyles from "../utilities/CommonStyles";
const useStyles = makeStyles((theme) => ({
	container: {
		paddingRight: 70,
		paddingLeft: 70,
		height: 76,
		backgroundColor: Colors.primary,
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
	const [tabValue, setTabValue] = useState(0);
	return (
		<Grid className={classes.container} container>
			<div className={classes.centerVertical}>
				<Grid container justify="space-between">
					<div style={{ display: "flex" }}>
						<img
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
								style={{ height: "100%" }}
								label={<Typography variant="h6">دانشگاه ها</Typography>}
								value={0}
							/>
							<Tab
								className={classes.tab}
								label={<Typography variant="h6">رشته ها</Typography>}
								value={1}
							/>
							<Tab
								className={classes.tab}
								label={<Typography variant="h6">درباره ما</Typography>}
								value={2}
							/>
							<Tab
								className={classes.tab}
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
