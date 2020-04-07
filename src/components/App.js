import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import store from "../store";
import BaseRouter from "../routes";
import Navbar from "./CommonComponents/Navbar";
import Footer from "./CommonComponents/Footer";

export default class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Fragment>
					<Router>
						<Navbar />
						<BaseRouter />
						<Footer />
					</Router>
				</Fragment>
			</Provider>
		);
	}
}
