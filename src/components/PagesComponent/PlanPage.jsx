import React from "react";
import planImg from "../../assets/images/PlanImg.png";
import Button from "../ReusableComponents/Button";
import { Link } from "react-router-dom";

export default function PlanPage() {
	return (
		<div>
			<div className="container-fluid mt-5">
				<div className="container pt-5 mt-5">
					<h2 className="text-center">CHOOSE A PLAN AND GET STARTED</h2>
					<p className="text-center mb-4">
						We have a range of plans to suit your research needs
					</p>
				</div>
			</div>
			<div className="container">
				<div className="row">
					<div className="col-md-12 col-sm-12 mx-auto">
						<div className="row">
							<div className="col-md-4 col-sm-5">
								<div
									className="card text-center container"
									style={{
										width: "20rem",
										backgroundColor: "#E8EFF7",
										height: "1150px"
									}}>
									<h5 className="mt-5">BASIC</h5>
									<h3 className="display-4">FREE</h3>
									<p>Search public data</p>
									<p className="">
										<Link className="planlink">View Details</Link>
									</p>
									<div className="d-flex justify-content-center">
										<Link to="/authentication" style={{ color: "white" }}>
											<Button textcolor="white" color="#413A76" width="100%">
												BROWSE DATA
											</Button>
										</Link>
									</div>
									<hr />
									<div className="card-body">
										<ul className="text-left list-unstyled">
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Browse all our publicly available data sources for free!
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Customer Support: Email only
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest health data updates from the
												HealthThink Blog
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest digital health updates and industry
												briefs from our Monthly Newsletter
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Mobile access
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-5">
								<div
									className="card text-center text-light container"
									style={{
										width: "20rem",
										backgroundColor: "#6158C9",
										height: "1150px"
									}}>
									<h5 className="mt-5">STANDARD</h5>
									<h3 className="display-4">₦9999</h3>
									<p className="px-7">Make better decisions with custom data</p>
									<p>
										<Link className="planlink">View Details</Link>
									</p>
									<div className="d-flex justify-content-center">
										<Link to="/authentication" style={{ color: "black" }}>
											<Button textcolor="black" color="#E8EFF7" width="100%">
												SUBSCRIBE
											</Button>
										</Link>
									</div>
									<hr />
									<div className="card-body">
										<ul className="text-left list-unstyled">
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Browse all our publicly available data sources for free!
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Customer Support: Phone calls and Emails
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest health data updates from the
												HealthThink Blog
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest digital health updates and industry
												briefs from our Monthly Newsletter
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Mobile access
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Freely access over 1000 of our specialized commercial
												databases
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Make better decisions with our customized data view and
												personal dashboards.
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Deepen data insights with our web- based data analytics,
												visualization and Interpretation tools
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Share your discoveries by exporting your data and
												visualizations.
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Manage your preferred datasets with push notifications
											</li>
										</ul>
									</div>
								</div>
							</div>

							<div className="col-md-4 col-sm-5">
								<div
									className="card text-center"
									style={{
										width: "20rem",
										backgroundColor: "#E8EFF7",
										height: "1150px"
									}}>
									<h5 className="mt-5">BUSINESS</h5>
									<h3 className="display-4">₦14999</h3>
									<p className="px-7">Make better decisions with custom data</p>
									<p>
										<Link className="planlink">View Details</Link>
									</p>
									<div className="d-flex justify-content-center">
										<Link to="/authentication" style={{ color: "white" }}>
											<Button textcolor="white" color="#413A76" width="100%">
												SUBSCRIBE
											</Button>
										</Link>
									</div>
									<hr />
									<div className="card-body">
										<ul className="text-left list-unstyled">
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Browse all our publicly available data sources for free!
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Customer Support: Phone calls and Emails
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest health data updates from the
												HealthThink Blog
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Receive the latest digital health updates and industry
												briefs from our Monthly Newsletter
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Mobile access
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Freely access over 1000 of our specialized commercial
												databases
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Make better decisions with our customized data view and
												personal dashboards.
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Deepen data insights with our web- based data analytics,
												visualization and Interpretation tools
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Share your discoveries by exporting your data and
												visualizations.
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Manage your preferred datasets with push notifications
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Collaborate: Support Multiple users, enable teams, and
												manage user permissions
											</li>
											<li className="my-3 d-flex">
												<i
													className="fa fa-check mr-3"
													style={{ fontSize: "20px", color: "green" }}></i>
												Enjoy discounted access to eHealth4everyone’s range of
												products and services
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5">
					<div
						className="col-md-4 col-sm-12 text-light"
						style={{ backgroundColor: "#6154CC" }}>
						<div className="mt-5 col-md-10 mx-auto">
							<p className="">You can also join our special plan</p>
							<h4 className="my-3 text-light">ONE-TIME DATA ACCESS</h4>
							<p className="">
								Sed ut perspiciatis unde omnis iste natus error sit voluptatem
								accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
								quae ab illo inventore veritatis et quasi architecto
							</p>
							<Button textcolor="black" color="#E8EFF7" width="100%">
								CONTACT US
							</Button>
						</div>
					</div>
					<div className="col-md-7 col-sm-5">
						<img src={planImg} width="100%" alt="plan-img" />
					</div>
				</div>
			</div>
			<div className="container-fluid">
				<section id="testimonial">
					<div className="container mt-5">
						<h1 className="text-center">Testimonials</h1>
					</div>
				</section>
			</div>
		</div>
	);
}
