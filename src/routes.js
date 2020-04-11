import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./components/PagesComponent/Homepage";
import AboutUsPage from "./components/PagesComponent/AboutUsPage";
import FAQPage from "./components/PagesComponent/FAQPage";
import ContactUsPage from "./components/PagesComponent/ContactUsPage";
import UserAuthComponent from "./components/LayoutComponents/UserAuthComponent";
import Dashboard from "./components/PagesComponent/Dashboard";
import PrivateRoute from "./components/UtilityComponents/SecuredRoutes";
import BrowseDataPage from "./components/PagesComponent/BrowseDataPage";
import RequestDataPage from "./components/PagesComponent/RequestDataPage";
import PlanPage from "./components/PagesComponent/PlanPage";

const BaseRouter = () => (
	<Switch>
		<Route exact path="/" component={Homepage} />
		<Route exact path="/about" component={AboutUsPage} />
		<Route exact path="/faq" component={FAQPage} />
		<Route exact path="/contact" component={ContactUsPage} />
		<Route exact path="/authentication" component={UserAuthComponent} />
		<Route exact path="/requestdata" component={RequestDataPage} />
		<Route exact path="/plan" component={PlanPage} />
		<PrivateRoute exact path="/dashboard" component={Dashboard} />
		<PrivateRoute exact path="/browsedata" component={BrowseDataPage} />
	</Switch>
);
export default BaseRouter;
