import React from "react";
import Button from "../ReusableComponents/Button";
import Card from "../ReusableComponents/Card";
import { Link } from "react-router-dom";
import "../StyleComponents/Homepage.css";
import coinIcon from "../../assets/images/coin.svg";
import consultationIcon from "../../assets/images/consultation-2.svg";
import keyIcon from "../../assets/images/key.svg";
import jumbotronImage1 from "../../assets/images/image1.png";
import jumbotronImage2 from "../../assets/images/image2.png";
import subscribeImage from "../../assets/images/subscribeImg.png";

const Homepage = () => {
	return (
		<div>
			<div className="container-fluid homepagebgImage1">
				<div className="container" style={{ paddingTop: "200px" }}>
					<div className="text-light">
						<span className="h5">Questions + Data =</span>
						<br />
						<span className="h1">ANSWERS, </span>
						<span className="h1">
							INSIGHTS <br />
							FOR HEALTH.
						</span>
						<br />
						<span className="h1">ACTION!</span>

						<div className="row my-4">
							<div className="col-md-1 col-sm-12">
								<h1 className="text-white">50+</h1>
								<small>Topics</small>
							</div>
							<div className="col-md-1 col-sm-12 text-center">
								<h1 className="text-white">200+</h1>
								<small>INDICATORS</small>
							</div>
							<div className="col-md-2 col-sm-12 text-center">
								<h1 className="text-white">10+</h1>
								<small>DATA SOURCES</small>
							</div>
							<div className="col-md-1 col-sm-12">
								<h1 className="text-white">300+</h1>
								<small>RESOURCES</small>
							</div>
						</div>
						<div>
							<div className="row">
								<div className="col-md-5 col-sm-12">
									<input
										className="form-control"
										placeholder="What are you looking for"
										type="text"
										style={{
											backgroundColor: "#1918186C 0% 0% no-repeat padding-box",
											opacity: "0.6"
										}}
									/>
								</div>
								<div className="col-md-4 col-sm-12">
									<router-link to="/login">
										<Button color="#413A76" textcolor="white" width="60%">
											<small>BROWSE DATA-FOR FREE</small>
										</Button>
									</router-link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid bg-white">
				<div className="my-5">
					<div className="container py-5">
						<h2 className="text-center">
							Download Health Data. Get Resources. Send/Request Data
						</h2>
						<p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore
							nihil cupiditate in dolor labore dolores. Iure odio consectetur
							architecto cum, nostrum facilis dolores facere neque reiciendis,
							sint itaque beatae doloribus. Lorem, ipsum dolor sit amet
							consectetur adipisicing elit. Tempore nihil cupiditate in dolor
							labore dolores. Iure odio consectetur architecto cum, nostrum
							facilis dolores facere neque reiciendis, sint itaque beatae
							doloribus.
						</p>
					</div>
				</div>
			</div>
			<div className="container">
				<div className="row my-5">
					<div className="col-md-4 col-sm-12">
						<Card
							icon={keyIcon}
							buttonTitle="Contact us"
							link="/contact"
							title="One-Time Data Access">
							<p>
								This plan would allow you a one-time, limited access into our
								database.
							</p>
							<br />
						</Card>
					</div>
					<div className="col-md-4 col-sm-12">
						<Card
							icon={consultationIcon}
							buttonTitle="Contact us"
							link="/contact"
							title="On-Demand Consultancy Services">
							<p>
								We are available for consultations on data acquisition,
								dissemination and engagement.
							</p>
						</Card>
					</div>
					<div className="col-md-4 col-sm-12">
						<Card
							icon={coinIcon}
							buttonTitle="View Plans"
							link="/plan"
							title="Subscription Plans">
							<p>
								We are available for consultations on data acquisition,
								dissemination and engagement.
							</p>
						</Card>
					</div>
				</div>
			</div>

			<section>
				<div className="jumbotron secondbackgroundstyle my-5">
					<div className="container">
						<h6 className="text-white">
							HealthThink Database currently contains:
						</h6>
						<div className="row ">
							<div className="col-md-4 col-sm-12 text-white">
								<div className="row">
									<div className="col-md-4 col-sm-12 my-4">
										<h1 className="display-4 text-white">50+</h1>
										<span>
											<small>TOPICS</small>
										</span>
									</div>
									<div className="col-md-8 col-sm-12 my-4">
										<h1 className="display-4 mr-3 text-white">200+</h1>
										<span>
											<small>INSIGHTS</small>
										</span>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 col-sm-12">
										<h1 className="display-4 text-white">10+</h1>
										<span>
											<small> SOURCES</small>
										</span>
									</div>
									<div className="col-md-8 col-sm-12 mx-auto">
										<h1 className="display-4 text-white">300+</h1>
										<span>
											<small>RESOURCES</small>
										</span>
									</div>
								</div>
								<div className="row mt-5">
									<div className="col-md-4 col-sm-12">
										<small>
											<Link
												to="/"
												className="text-light"
												style={{ textDecoration: "underline !important" }}>
												VIEW CATALOG
											</Link>
										</small>
									</div>
									<div className="col-md-7 col-sm-12">
										<Link to="/browsedata">
											<Button color="#413A76" textcolor="white" width="100%">
												BROWSE DATA
											</Button>
										</Link>
									</div>
								</div>
							</div>
							<div className="col-md-4 col-sm-12">
								<img
									src={jumbotronImage1}
									className="image-thumbnail"
									width="100%"
									alt="pix"
								/>
							</div>
							<div className="col-md-4 col-sm-12">
								<img
									src={jumbotronImage2}
									className="image-thumbnail"
									width="100%"
									alt="pix"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			<div className="container mt-5 ">
				<h3>Put Data to Good Use with Us</h3>
				<p>
					<em>
						You can request/send data and get insights on any program area of
						choice
					</em>
				</p>
				<div className="row mt-5">
					<div className="col-md-6 col-sm-12 bg-light">
						<div className="pt-5 mt-5 col-md-8 mx-auto ">
							<h4 className="my-6">Request Data</h4>
							<p>
								If there is a particular dataset you would love to view, send a
								request and we’ll make it happen.
							</p>
							<v-btn large color="#413A76" className="text-light my-6">
								<Link to="/requestdata">
									<Button color="#413A76" textcolor="white" width="50%">
										REQUEST DATA
									</Button>
								</Link>
							</v-btn>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 requestDataImg"></div>
				</div>

				<div className="row my-5">
					<div className="col-md-6 col-sm-12 submitDataImg"></div>
					<div className="col-md-6 col-sm-12 bg-light">
						<div className="pt-5 mt-5 col-md-8 mx-auto">
							<h4 className="my-6">Send Data</h4>
							<p>
								If you have a dataset you would like to share with a larger
								audience, you can submit data here
							</p>
							<Link to="/submitdata">
								<Button color="#413A76" textcolor="white" width="50%">
									SEND DATA
								</Button>
							</Link>
						</div>
					</div>
				</div>

				<div className="row mb-3">
					<div className="col-md-6 col-sm-12 bg-light">
						<div className="pt-5 mt-5 col-md-8 mx-auto">
							<h4 className="my-6">Insights</h4>
							<p>Fully explore the length and breadth of available data</p>
							<Link to="/insight">
								<Button color="#413A76" textcolor="white" width="50%">
									VIEW INSIGHTS
								</Button>
							</Link>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 insightDataImg "></div>
				</div>
			</div>

			<div
				className=" my-5 text-light"
				style={{ backgroundColor: "#413A76", height: "150px" }}>
				<div className="container">
					<div className="row py-5">
						<div className="col-md-6 col-sm-12">
							<span className="h1">
								Did You Know<span className="display-3">?</span>
							</span>
						</div>
						<div className="col-md-6 col-sm-12">
							<span>
								Widespread application of Big Data in healthcare could account
								for $300 billion to $450 billion in reduced health-care spending
								- McKinsey & Company
							</span>
						</div>
					</div>
				</div>
			</div>
			<div className="container-fluid my-5">
				{/* This space is reserved for a slider testimonial */}
			</div>

			<section id="subscribe_to_newletter my-5">
				<div class="container">
					<div class="row">
						<div class="col-md-5 col-sm-12">
							<img
								src={subscribeImage}
								alt="img"
								class="img-responsive"
								height="100%"
								width="100%"
							/>
						</div>
						<div class="col-md-7">
							<div class="ml-4">
								<h3>Want to know more?</h3>
								<h3>Subscribe to our newsletter</h3>
							</div>
							<div class="row mx-auto">
								<div class="col-md-8">
									<input
										class="form-control"
										placeholder="Enter your email address"
										type="text"
										style={{
											backgroundColor: "#1918186C 0% 0% no-repeat padding-box",
											opacity: "0.6;"
										}}
									/>
								</div>
								<div class="col-md-4 col-sm-12">
									<Button color="#413A76" textcolor="white" width="100%">
										BROWSE DATA
									</Button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};
export default Homepage;
