import React from "react";
import Button from "../ReusableComponents/Button";
import Card from "../ReusableComponents/Card";
import "../StyleComponents/Homepage.css";
import coinIcon from "../../assets/images/coin.svg";
import consultationIcon from "../../assets/images/consultation-2.svg";
import keyIcon from "../../assets/images/key.svg";
import jumbotronImage1 from "../../assets/images/image1.png";
import jumbotronImage2 from "../../assets/images/image2.png";

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
								<h1 className="">50+</h1>
								<small>Topics</small>
							</div>
							<div className="col-md-1 col-sm-12 text-center">
								<h1 className="">200+</h1>
								<small>INDICATORS</small>
							</div>
							<div className="col-md-2 col-sm-12 text-center">
								<h1 className="">10+</h1>
								<small>DATA SOURCES</small>
							</div>
							<div className="col-md-1 col-sm-12">
								<h1 className="">300+</h1>
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
				<div className="mt-5">
					<div className="container pt-5">
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
							link="/"
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
							link="/"
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
							link="/about"
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
							<div className="col-md-4 col-sm-12 background_text text-white">
								<div className="row">
									<div className="col-md-4 col-sm-12 my-4">
										<h1 className="display-4">50+</h1>
										<span>
											<small>TOPICS</small>
										</span>
									</div>
									<div className="col-md-8 col-sm-12 my-4">
										<h1 className="display-4 mr-3">200+</h1>
										<span>
											<small>INSIGHTS</small>
										</span>
									</div>
								</div>
								<div className="row">
									<div className="col-md-4 col-sm-12">
										<h1 className="display-4">10+</h1>
										<span>
											<small> SOURCES</small>
										</span>
									</div>
									<div className="col-md-8 col-sm-12 mx-auto">
										<h1 className="display-4">300+</h1>
										<span>
											<small>RESOURCES</small>
										</span>
									</div>
								</div>
								<div className="row mt-5">
									<div className="col-md-4 col-sm-12">
										<small>
											<router-link
												to="/"
												className="text-light"
												// style="text-decoration: underline !important"
											>
												VIEW CATALOG
											</router-link>
										</small>
									</div>
									<div className="col-md-7 col-sm-12">
										<router-link to="/login">
											<Button color="#413A76" textcolor="white" width="100%">
												BROWSE DATA
											</Button>
										</router-link>
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
		</div>
	);
};
export default Homepage;
