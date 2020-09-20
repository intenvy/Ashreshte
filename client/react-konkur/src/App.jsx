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
import Chair from "./pages/Chair";
import University from "./pages/University";
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
				<Router>
					<Header />
					<Switch>
						<Route path="/uni">
							<University />
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
							<h1>landing Page</h1>
						</Route>
					</Switch>
				</Router>
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
