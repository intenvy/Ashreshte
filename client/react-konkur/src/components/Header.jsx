import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Colors from "../utilities/Colors";
import { makeStyles, Tabs, Tab, Typography } from "@material-ui/core";
import Searchbar from "./Searchbar";
import commonStyles from "../utilities/CommonStyles";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function Header(props) {
	const history = useHistory();
	const [tabValue, setTabValue] = useState(-1);
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));

	const useStyles = makeStyles((theme) => ({
		container: {
			zIndex: 1200,
			position: "fixed",
			paddingRight: dimensions.width / 20,
			paddingLeft: dimensions.width / 20,
			height: 76,
			//backgroundColor: Colors.primary,
			//opacity: "50%",
			transition: "all 1s ease",
			WebkitTransition: "all 1s ease",
			MozTransition: "all 1s ease",
			width: "100%",
		},
		image: {
			width: 70,
			height: 68,
			cursor: "pointer",
		},
		tabContainer: {
			height: "100%",
		},
		tabs: {
			marginRight: dimensions.width / 20,
		},
		tab: { color: "white", minWidth: 0, width: dimensions / 10 },
		centerVertical: { ...commonStyles.centerVertical, width: "100%" },
	}));
	const classes = useStyles();

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
							src={logo}></img>

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
								label={
									<Typography
										variant="h6"
										style={{ fontFamily: "myFirstFont" }}>
										دانشگاه ها
									</Typography>
								}
								value={0}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={
									<Typography
										variant="h6"
										style={{ fontFamily: "myFirstFont" }}>
										رشته ها
									</Typography>
								}
								value={1}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={
									<Typography
										variant="h6"
										style={{ fontFamily: "myFirstFont" }}>
										درباره ما
									</Typography>
								}
								value={2}
							/>
							<Tab
								className={classes.tab}
								disableRipple
								label={
									<Typography
										variant="h6"
										style={{ fontFamily: "myFirstFont" }}>
										حمایت
									</Typography>
								}
								value={3}
							/>
						</Tabs>
					</div>
					{dimensions.width > 700 && (
						<div>
							<Searchbar />
						</div>
					)}
				</Grid>
			</div>
		</Grid>
	);
}
