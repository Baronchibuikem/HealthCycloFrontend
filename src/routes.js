import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/PagesComponent/Homepage";
import AboutUsPage from "./components/PagesComponent/AboutUsPage";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/about" component={AboutUsPage} />
	</Switch>
);
export default BaseRouter;
