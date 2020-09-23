import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
// import BranchPage from "./components/BranchPage";
// import UniPage from "./components/UniPage";
// import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import HeaderComp from "./components/HeaderComp";
// import Startpage from "./components/StartPage";
import Header from "./components/Header";
import {
	makeStyles,
	createMuiTheme,
	ThemeProvider,
} from "@material-ui/core/styles";
import Colors from "./utilities/Colors";
import Chair from "./pages/Chair";
import University from "./pages/University";
import Major from "./pages/Major";
import MainPage from "./pages/MainPage";
import MajorList from "./pages/MajorList";
import UniversityList from "./pages/UniversityList";
import Footer from "./skan/components/Footer";
import useWindowDimensions from "./functions/useWindowDimensions";
import GeneralHeader from "./components/GeneralHeader";
import LandingPage from "./pages/LandingPage";
const myTheme = createMuiTheme({
	direction: "rtl",
	palette: {
		primary: { main: Colors.primary },
		secondary: { main: Colors.secondary },
	},
});
function App() {
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

	if (localStorage.getItem("dimensions") == null) {
		localStorage.setItem(
			"dimensions",
			JSON.stringify({
				width: 0,
				height: 0,
			})
		);
	}
	localStorage.setItem(
		"dimensions",
		JSON.stringify({
			width: useWindowDimensions().width,
			height: useWindowDimensions().height,
		})
	);

	return (
		<React.Fragment>
			<ThemeProvider theme={myTheme}>
				<Router>
					<GeneralHeader transparent={isHeaderTransparent} />

					<Switch>
						<Route path="/uni/:id">
							<University setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>
						<Route path="/major/:id">
							<Major setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>

						<Route path="/majors">
							<MajorList setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>

						<Route path="/universities">
							<UniversityList setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>

						<Route path="/aboutus">
							<h1>about us</h1>
						</Route>

						<Route path="/chair">
							<Chair />
						</Route>
						<Route path="/">
							<LandingPage setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>
					</Switch>
					<Footer />
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
