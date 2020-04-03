import React, { Component, Fragment } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import BaseRouter from "../routes";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";

export default class App extends Component {
	render() {
		return (
			<Fragment>
				<Router>
					<Navbar />
					<BaseRouter />
					<Footer />
				</Router>
			</Fragment>
		);
	}
}
