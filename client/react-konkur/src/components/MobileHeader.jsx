import React, { useState, useEffect, useRef } from "react";
import Grid from "@material-ui/core/Grid";
import Colors from "../utilities/Colors";
import {
	makeStyles,
	Tabs,
	Tab,
	Typography,
	IconButton,
	Menu,
	MenuItem,
} from "@material-ui/core";
import Searchbar from "./Searchbar";
import commonStyles from "../utilities/CommonStyles";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { MenuOpen } from "@material-ui/icons";

export default function MobileHeader(props) {
	const history = useHistory();
	const [tabValue, setTabValue] = useState(-1);
	const [menuOpen, setMenuOpen] = useState(false);
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	const [anchorEl, setAnchorEl] = useState(null);
	const menuRef = useRef(null);
	function closeMenu() {
		setMenuOpen(false);
	}

	const useStyles = makeStyles((theme) => ({
		container: {
			zIndex: 1200,
			position: "fixed",
			paddingRight: dimensions.width / 30,
			paddingLeft: dimensions.width / 30,
			height: 56,
			//backgroundColor: Colors.primary,
			//opacity: "50%",
			transition: "all 1s ease",
			WebkitTransition: "all 1s ease",
			MozTransition: "all 1s ease",
			width: "100%",
		},
		image: {
			width: 50,
			height: 48,
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
					</div>

					{/* <div>
						<Searchbar />
					</div> */}
					<IconButton
						style={{ color: "white" }}
						onClick={(e) => {
							setMenuOpen(true);
							setAnchorEl(e.currentTarget);
						}}
						ref={menuRef}>
						<MenuOpen />
					</IconButton>
				</Grid>
				<Menu
					anchorEl={anchorEl}
					anchorOrigin={{ vertical: "top", horizontal: "left" }}
					keepMounted
					transformOrigin={{ vertical: "top", horizontal: "left" }}
					open={menuOpen}
					onClose={closeMenu}
					variant="menu">
					<MenuItem
						onClick={() => {
							closeMenu();
							setTabValue(0);
						}}>
						<Typography variant="body2" style={{ fontFamily: "myFirstFont" }}>
							دانشگاه ها
						</Typography>
					</MenuItem>
					<MenuItem
						onClick={() => {
							closeMenu();
							setTabValue(1);
						}}>
						<Typography variant="body2" style={{ fontFamily: "myFirstFont" }}>
							رشته ها
						</Typography>
					</MenuItem>
					<MenuItem
						onClick={() => {
							closeMenu();
							setTabValue(2);
						}}>
						<Typography variant="body2" style={{ fontFamily: "myFirstFont" }}>
							درباره ما
						</Typography>
					</MenuItem>
					<MenuItem
						onClick={() => {
							closeMenu();
							setTabValue(3);
						}}>
						<Typography variant="body2" style={{ fontFamily: "myFirstFont" }}>
							حمایت
						</Typography>
					</MenuItem>
				</Menu>
			</div>
		</Grid>
	);
}
