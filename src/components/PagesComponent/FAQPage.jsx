import React from "react";
import { Link } from "react-router-dom";
import Button from "../ReusableComponents/Button";

const FAQPage = () => {
	return (
		<div className="container min-vh-100" style={{ paddingTop: "100px" }}>
			<div id="accordion">
				<div className="card">
					<div
						className="card-header"
						id="headingOne"
						data-toggle="collapse"
						data-target="#collapseOne"
						aria-expanded="true"
						aria-controls="collapseOne"
						style={{ backgroundColor: "#413a76" }}>
						<h5 className="mb-0 text-light">Profile</h5>
					</div>

					<div
						id="collapseOne"
						className="collapse show"
						aria-labelledby="headingOne"
						data-parent="#accordion">
						<div className="card-body">
							<ul className="list-unstyled">
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div
						className="card-header"
						id="headingTwo"
						data-toggle="collapse"
						data-target="#collapseTwo"
						aria-expanded="true"
						aria-controls="collapseTwo"
						style={{ backgroundColor: "#413a76" }}>
						<h5 className="mb-0 text-light">Who can i request for data</h5>
					</div>
					<div
						id="collapseTwo"
						className="collapse"
						aria-labelledby="headingTwo"
						data-parent="#accordion">
						<div className="card-body">
							<ul className="list-unstyled">
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="card">
					<div
						className="card-header"
						id="headingThree"
						data-toggle="collapse"
						data-target="#collapseThree"
						aria-expanded="true"
						aria-controls="collapseThree"
						style={{ backgroundColor: "#413a76" }}>
						<h5 className="mb-0 text-light">Profile</h5>
					</div>
					<div
						id="collapseThree"
						className="collapse"
						aria-labelledby="headingThree"
						data-parent="#accordion">
						<div className="card-body">
							<ul className="list-unstyled">
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
								<hr />
								<li>Lorem</li>
							</ul>
						</div>
					</div>
				</div>
			</div>

			<div className="text-center mt-5 pt-5">
				<h4>Can't Find What You Need?</h4>
				<h4>Send Us A Message!</h4>
				<div className="d-flex justify-content-center">
					<Link to="/">
						<Button textcolor="white" color="#413A76" width="100%">
							Contact Us
						</Button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default FAQPage;
