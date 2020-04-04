import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/PagesComponent/Homepage";
import AboutUsPage from "./components/PagesComponent/AboutUsPage";
import FAQPage from "./components/PagesComponent/FAQPage";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/about" component={AboutUsPage} />
		<Route exact path="/faq" component={FAQPage} />
	</Switch>
);
export default BaseRouter;
