import React, { Component } from "react";
import dashImg1 from "../../assets/images/dashImg2.png";
import dashImg2 from "../../assets/images/dashImg3.png";
import dashImg3 from "../../assets/images/dashImg3.png";
import dashImg4 from "../../assets/images/dashImg4.png";
import "../StyleComponents/DashboardPage.css";
import Button from "../ReusableComponents/Button";

class Dashboard extends Component {
	render() {
		return (
			<div className="container mt-5 pt-1">
				<div className="row mt-5 pt-5 mx-auto">
					<div className="col-md-6 col-sm-12">
						<div className="row">
							<div
								className="col-md-6 col-sm-12 text-light"
								style={{ backgroundColor: "#6154CC", height: "250px" }}>
								<div className="col-md-12 text-justify mt-5">
									<h5 className="mb-4 text-light">DID YOU KNOW</h5>
									<span>
										In 2001 it cost $300,000,000 to decode the human genome.
										Today, thanks to Big Data, the cost is $1,000. Soon it could
										be as low as $100
									</span>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 DashImg1"></div>
						</div>
					</div>
					<div className="col-md-3 col-sm-12">
						<div
							className=" bg-light"
							style={{ height: "250px", width: "100%" }}>
							<div className="mx-5 pt-5">
								<h5>INDICATORS</h5>
								<h2 className="mt-2">2.6K</h2>
								<span>Indicators Available to Your Account</span>
							</div>
						</div>
					</div>
					<div className="col-md-3 col-sm-12">
						<div
							className="mt-12 bg-light"
							style={{ height: "250px", width: "100%" }}>
							<div className="pt-5">
								<h5 className="text-center">DATA SOURCES</h5>
								<div className="mx-5">
									<h2 className="mt-2">1.5K</h2>
									<span>Data Sources Available to Your Account</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row mt-5">
					<div className="col-md-6 col-sm-12">
						<div className="bg-light" style={{ height: "400px" }}>
							<div className="mx-5">
								<div className="row">
									<div className="col-md-6 col-sm-6 mt-5">
										<div className="">
											<h5 className="">BROWSE DATA</h5>
											<h2 className="mt-5">110</h2>
											<span>Total Indicators Available</span>
											<h2 className="">10</h2>
											<span>Total Data Sources Available</span>
										</div>
									</div>
									<div className="col-md-6 col-sm-12 mt-5">
										<img
											src={dashImg1}
											height="70%"
											width="100%"
											alt="dash-img1"
										/>
									</div>
								</div>
								<div className="d-flex justify-content-between mt-4">
									<span className="pt-3">Last Udated : 25-Oct-2019</span>

									<Button textcolor="white" width="30%" color="#413A76">
										<small>Explore</small>
									</Button>
								</div>
							</div>
						</div>
					</div>

					<div className="col-md-6 col-sm-12">
						<div className="bg-light" style={{ height: "400px" }}>
							<div className="mx-5 pt-5">
								<div className="row">
									<div className="col-md-6 col-sm-6">
										<div className="">
											<h5 className="">RESOURCES</h5>
											<h2 className="mt-5">63</h2>
											<span>Resources Available</span>
										</div>
									</div>
									<div className="col-md-6 col-sm-12">
										<img
											src={dashImg2}
											height="100%"
											width="100%"
											alt="dash-img2"
										/>
									</div>
								</div>
								<div className="d-flex justify-content-between mt-5 pt-5">
									<span className="pt-3">Last Udated : 25-Oct-2019</span>
									<Button textcolor="white" width="30%" color="#413A76">
										<small>Explore</small>
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="row my-5">
					<div className="col-md-4 col-sm-12 bg-light">
						<div className="d-flex justify-content-start">
							<h5 className="mr-3">DATA ANALYTICS</h5>
							<span>- Unavailable</span>
						</div>

						<img
							src={dashImg3}
							className=""
							height="50%"
							width="100%"
							alt="dash_image"
						/>
						<div className="d-flex justify-content-center py-1">
							<Button textcolor="white" width="30%" color="#413A76">
								<small>Upgrade</small>
							</Button>
						</div>
					</div>
					<div className="col-md-4 mx-auto col-sm-12 bg-light">
						<div className="col-md-9 mx-auto">
							<h5>SUBMIT/REQUEST DATA</h5>
							<small>
								Please click a button below to submit a dataset or request for
								one.
							</small>

							<div className="mt-3">
								<small>To submit data:</small>
								<br />
								<Button textcolor="white" width="50%" color="#413A76">
									<small>Submit Data</small>
								</Button>
							</div>
							<div className="mt-3">
								<small>To request data</small>
								<br />
								<Button textcolor="white" width="50%" color="#413A76">
									<small>Request Data</small>
								</Button>
							</div>
							<small className="text-danger">
								You can request specific data without a subscription
							</small>
						</div>
					</div>
					<div className="col-md-3 col-sm-12 bg-light">
						<h5>HEALTHTHINK BLOG</h5>
						<img
							src={dashImg4}
							className=""
							height="60%"
							width="100%"
							alt="dash_image4"
						/>
						<div className="d-flex justify-content-center py-1">
							<Button textcolor="white" width="50%" color="#413A76">
								<a
									href="https://healththink.org/"
									target="__blank__"
									style={{ color: "white" }}>
									<small className="text-light">VISIT BLOG</small>
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
export default Dashboard;
