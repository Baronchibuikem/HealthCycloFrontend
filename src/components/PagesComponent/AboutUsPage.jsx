import React from "react";
import "../StyleComponents/AboutUsPage.css";
import AboutImage from "../../assets/images/AboutImg4.png";
import AboutImage2 from "../../assets/images/AboutImg11.png";
import AboutImage3 from "../../assets/images/AboutImg5.png";
import AboutImage4 from "../../assets/images/AboutImg7.png";
// import styled from "styled-components";

const AboutUsPage = () => {
	return (
		<div>
			<div className="container-fluid AboutImg2">
				<div className="container" style={{ paddingTop: "150px" }}>
					<h4 className="text-light mt-8 pt-8">About HealthThink</h4>
				</div>
			</div>
			<div className="container mb-12">
				<div className="row mt-5 shadow bg-white">
					<div className="col-md-6 col-sm-12">
						<div className="pt-12 mt-5 col-md-8 mx-auto ">
							<p>
								HealthThink provides information, analytics solutions and
								digital tools in the areas of strategic research management, R&D
								performance, clinical decision support, and professional
								education.
							</p>
						</div>
					</div>
					<div className="col-md-6 col-sm-12 AboutImg1"></div>
				</div>

				<div className="row mt-5 bg-white shadow">
					<div className="col-md-5 col-sm-12 AboutImg3"></div>
					<div className="col-md-6 col-sm-12">
						<div className="ml-5">
							<h1>Our Mission</h1>
							<p>
								Advance the state-of-the-art of health data analytics,
								visualization, and civic engagement through collaboration and
								innovation.
							</p>
							<h1>Our Vision</h1>
							<p>
								We envision a world where everyone counts and is engaged; where
								healthcare projects are data-driven and have impact measured;
								where healthcare research is strongly supported and coordinated
								and where governments are open and accountable.
							</p>
						</div>
					</div>
				</div>

				<div className="my-5">
					<h1>Solutions</h1>
					<div className="row">
						<div className="col-md-3 col-sm-12">
							<img src={AboutImage} width="20%" alt="about-img" />
							<h6>On-demand health data & analytics</h6>
						</div>
						<div className="col-md-3 col-sm-12">
							<img src={AboutImage2} width="20%" alt="about-img" />
							<h6>
								Cleaned and structured, health data tailored to your needs
							</h6>
						</div>
						<div className="col-md-3 col-sm-12">
							<img src={AboutImage3} width="20%" alt="about-img" />
							<h6>Free health information for general knowledge</h6>
						</div>
						<div className="col-md-3 col-sm-12">
							<img src={AboutImage4} width="20%" alt="about-img" />
							<h6>Detailed health information down to the local level</h6>
						</div>
						<div className="row mt-5 bg-white shadow">
							<div className="col-md-6 col-sm-12">
								<div className="pt-5 mt-5 col-md-8 mx-auto">
									<h4>Our Data</h4>
									<p>
										Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
										diam nonumy eirmod tempor invidunt ut labore et dolore magna
										aliquyam erat, sed diam voluptua. At vero eos et accusam et
										justo duo dolores et ea rebum. Stet clita kasd gubergren, no
									</p>
									<v-btn large color="#413A76" className="text-light">
										LEARN MORE
									</v-btn>
								</div>
							</div>
							<div className="col-md-6 col-sm-12 AboutImg9"></div>
						</div>

						<div className="row mt-5 bg-white mt-12 shadow">
							<div className="col-md-6 col-sm-12 AboutImg10"></div>
							<div className="col-md-6 col-sm-12">
								<div className="pt-5 mt-5 col-md-8 mx-auto">
									<h4>HealthThink Analytics</h4>
									<p>
										Sometimes, data is all you need. Other times, you need the
										benefit of data that has been aggregated, synthesized and
										formatted to provide greater insight. Our information
										database powers some of the health industry’s leading
										research and analytic tools
									</p>
									<v-btn large color="#413A76" className="text-light">
										LEARN MORE
									</v-btn>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsPage;
