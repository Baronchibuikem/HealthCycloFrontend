import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/PagesComponent/Homepage";
import AboutUsPage from "./components/PagesComponent/AboutUsPage";
import FAQPage from "./components/PagesComponent/FAQPage";
import ContactUsPage from "./components/PagesComponent/ContactUsPage";
import UserAuthComponent from "./components/LayoutComponents/UserAuthComponent";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/about" component={AboutUsPage} />
		<Route exact path="/faq" component={FAQPage} />
		<Route exact path="/contact" component={ContactUsPage} />
		<Route exact path="/authentication" component={UserAuthComponent} />
	</Switch>
);
export default BaseRouter;
