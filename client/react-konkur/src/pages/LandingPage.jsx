import React, { useEffect } from "react";
import { Grid, Typography, Container, Button } from "@material-ui/core";
import ContentSeparator from "../components/ContentSeparator";
import Colors from "../utilities/Colors";
import { useHistory } from "react-router-dom";

export default function LandingPage(props) {
	const history = useHistory();
	const dimensions = JSON.parse(localStorage.getItem("dimensions"));
	const mobile = dimensions.width > 700 ? false : true;

	useEffect(() => {
		props.setIsHeaderTransparent(false);
	}, []);

	return (
		<Container
			disableGutters
			maxWidth={dimensions.width > 700 ? false : "xs"}
			style={{ paddingTop: 76 + (mobile ? 32 : 64) }}>
			<Grid
				container
				justify="center"
				style={{
					paddingLeft: "5%",
					paddingRight: "5%",
				}}>
				<Typography
					variant="h4"
					style={{
						fontFamily: "myFirstFont",
						fontWeight: "bold",
						color: Colors.primary,
						textAlign: "center",
					}}>
					اینجا با اعداد در مورد رشته ها حرف می‌زنیم
				</Typography>
			</Grid>

			<Grid
				container
				justify="center"
				wrap={mobile ? "wrap" : "nowrap"}
				style={{
					paddingLeft: "5%",
					paddingRight: "5%",
					paddingTop: mobile ? 64 : 96,
					paddingBottom: 16,
				}}>
				<img
					src="https://picsum.photos/seed/picsum/140/140"
					style={{ width: mobile ? "100%" : "40%" }}
				/>
				<div
					style={{
						marginRight: mobile ? 0 : "3%",
						marginTop: mobile ? "5%" : 0,
					}}>
					<Typography
						variant="h6"
						style={{
							fontFamily: "myFirstFont",
							fontWeight: "bold",
							color: Colors.primary,
						}}>
						آش رشته چیکار میکنه؟
					</Typography>
					<Typography
						variant="body2"
						style={{ fontFamily: "myFirstFont", textAlign: "justify" }}>
						شصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش یش
						ییییییشسیش سشیشسی شسیش سیشسیشی شیسشیش شسیش سیشسیشی شیسشی
					</Typography>
				</div>
			</Grid>

			<ContentSeparator title="از کجا شروع کنیم؟" />

			<Grid
				container
				justify="center"
				style={{ paddingLeft: "5%", paddingRight: "5%" }}>
				<Typography
					variant="body2"
					style={{
						fontFamily: "myFirstFont",
						textAlign: "justify",
					}}>
					شصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش یش ییییییشسیش
					سشیشسی شسیش سیشسیشی شیسشیشصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس
					سسسسسسسس شیسشش ش یش ییییییشسیش سشیشسی شسیش سیشسیشی شیسشیشصیشصیش صیشص
					یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش یش ییییییشسیش سشیشسی شسیش
					سیشسیشی شیسشیشصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش
					یش ییییییشسیش سشیشسی شسیش سیشسیشی شیسشی
				</Typography>
				<Button
					variant="contained"
					onClick={() => {
						history.push("universities");
					}}>
					دانشگاه ها
				</Button>
				<Button
					variant="contained"
					onClick={() => {
						history.push("majors");
					}}>
					رشته ها
				</Button>
			</Grid>

			<ContentSeparator title="ما کی هستیم؟" />

			<Grid
				container
				justify="center"
				style={{ paddingLeft: "5%", paddingRight: "5%", paddingBottom: "5%" }}>
				<Typography
					variant="p"
					style={{ fontFamily: "myFirstFont", textAlign: "justify" }}>
					شصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش یش ییییییشسیش
					سشیشسی شسیش سیشسیشی شیسشیشصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس
					سسسسسسسس شیسشش ش یش ییییییشسیش سشیشسی شسیش سیشسیشی شیسشیشصیشصیش صیشص
					یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش یش ییییییشسیش سشیشسی شسیش
					سیشسیشی شیسشیشصیشصیش صیشص یشصیش سسسسسسسس سسسسسسسسسسس سسسسسسسس شیسشش ش
					یش ییییییشسیش سشیشسی شسیش سیشسیشی شیسشی
				</Typography>
			</Grid>
		</Container>
	);
}
