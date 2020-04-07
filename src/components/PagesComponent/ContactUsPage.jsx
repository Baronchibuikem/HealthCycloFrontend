import React, { Component } from "react";
import Button from "../ReusableComponents/Button";

class ContactUsPage extends Component {
	state = {};
	render() {
		return (
			<div className="container min-vh-100 mt-5 pt-5">
				<h3 className="text-center mb-5 pt-5">CONTACT US</h3>
				<div className="row">
					<div className="col-md-6 col-sm-12">
						<form>
							<input
								type="email"
								placeholder="Email"
								required
								className="form-control form-control-sm"
							/>
							<input
								type="text"
								placeholder="Subject"
								required
								className="form-control form-control-sm outline border mt-5"
							/>
							<textarea
								rows="7"
								cols="100"
								className="form-control form-control-sm mt-5"
								placeholder="Write Your Message Here..."></textarea>

							<div className="mt-4">
								<Button color="#413A76" textcolor="white" width="100%">
									SEND
								</Button>
							</div>
						</form>
					</div>
					<div className="col-md-6 col-sm-12">
						<p className="font-weight-bold">
							Our Team is happy to answer your questions. Fill out the form and
							we'll be in touch with you as soon as possible.
						</p>
						<p>
							You can also send us a direct email <b>healththink@e4email.net</b>{" "}
							or call us on <b>+2349021720570</b>
						</p>

						<div>
							<i
								className="fab fa-facebook mr-5"
								style={{ fontSize: "30px", color: "#6158C9" }}></i>
							<i
								className="fab fa-linkedin mr-5"
								style={{ fontSize: "30px", color: "#6158C9" }}></i>
							<i
								className="fab fa-twitter-square"
								style={{ fontSize: "30px", color: "#6158C9" }}></i>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ContactUsPage;
