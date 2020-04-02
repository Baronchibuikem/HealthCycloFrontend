import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/PagesComponent/Homepage";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
	</Switch>
);
export default BaseRouter;
