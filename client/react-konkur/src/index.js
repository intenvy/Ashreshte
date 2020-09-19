import React from "react";
import ReactDOM from "react-dom";
// import "./index.css";
// import "bootstrap/dist/css/bootstrap.css";
// import 'mdbreact/dist/css/mdb.css';
//import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Router, Switch, Route, Link } from "react-router-dom";

// import "bootstrap/dist/js/bootstrap.js";
// import './bootstrap/css/bootstrap.min.css';
// import './bootstrap/js/bootstrap.min.js';

import App from "./App.jsx";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);
