import React from "react";
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
const myTheme = createMuiTheme({
	direction: "rtl",
	palette: {
		primary: { main: Colors.primary },
		secondary: { main: Colors.secondary },
	},
});
function App() {
	return (
		<React.Fragment>
			<ThemeProvider theme={myTheme}>
				<Header />
				<Router>
					<Switch>
						<Route path="/start">
							<h1>Start</h1>
						</Route>
						<Route path="/uni/:name">
							<h1>Uni</h1>
						</Route>
						<Route path="/">
							<h1>Start</h1>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
