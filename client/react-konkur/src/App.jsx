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
import MainPage from "./skan/components/MainPage";
const myTheme = createMuiTheme({
	direction: "rtl",
	palette: {
		primary: { main: Colors.primary },
		secondary: { main: Colors.secondary },
	},
});
function App() {
	const [isHeaderTransparent, setIsHeaderTransparent] = useState(true);

	return (
		<React.Fragment>
			<ThemeProvider theme={myTheme}>
				<Router>
					<Header transparent={isHeaderTransparent} />
					<Switch>
						<Route path="/uni/:id">
							<University setIsHeaderTransparent={setIsHeaderTransparent} />
						</Route>
						<Route path="/major">
							<h1>major</h1>
						</Route>
						<Route path="/aboutus">
							<h1>about us</h1>
						</Route>

						<Route path="/chair">
							<Chair />
						</Route>
						<Route path="/">
							<MainPage />
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
