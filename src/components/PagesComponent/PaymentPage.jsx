import React, { Component } from "react";
import Button from "../ReusableComponents/Button";
import masterCard from "../../assets/images/masterCard.jpg";
import visaCard from "../../assets/images/visa.jpeg";

class PaymentPage extends Component {
	showSignup = () => {
		this.props.showPayment(true);
	};
	render() {
		return (
			<div className="">
				<h3 className="font-weight-bold">You're Almost There</h3>
				<div className="d-flex justify-content-between">
					<span>CHOOSE A SUBSCRIPTION PLAN</span>
					<span>
						<router-link exact to="">
							learn More about our plan
						</router-link>
					</span>
				</div>

				<div className="row mt-4 d-flex justify-content-center">
					<div
						className="col-md-3 col-sm-12 shadow text-center"
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Basic</h6>
							{/* <h4>{{ free }}</h4> */}
						</div>
					</div>
					<div
						className="col-md-3 col-sm-12 mx-5 text-center"
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Standard</h6>
							{/* <h4>{{ standard }}</h4> */}
						</div>
					</div>
					<div
						className="col-md-3 col-sm-12 text-center"
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Business</h6>
							{/* <h4>{{ business }}</h4> */}
						</div>
					</div>
				</div>

				<div className="mt-4">
					<h4>Secure Payment Information</h4>
					<form>
						<div className="my-2">
							<label>NAME ON CARD</label>
							<input type="text" name="" className="form-control" />
						</div>
						<div className="">
							<label>CARD NUMBERS</label>
							<input
								type="number"
								name=""
								className="form-control"
								placeholder="0000 0000 0000 0000"
							/>
						</div>
						<div className="d-flex justify-content-between mt-4">
							<div className="">
								<label>EXPIRY DATE(MM/YY)</label>
								<input type="month" name="" className="form-control" />
							</div>
							<div>
								<label>CVV</label>
								<input
									type="number"
									name=""
									className="form-control"
									placeholder="000"
								/>
							</div>
						</div>
					</form>
					<div className="mt-4">
						<h6>SELECT CARD TYPE</h6>
						<div className="d-flex">
							<img
								src={visaCard}
								className="img-responsive mx-5"
								width="20%"
								alt="visa-logo"
							/>
							<img
								src={masterCard}
								className="img-responsive"
								width="20%"
								alt="mastercard-logo"
							/>
						</div>
						<div className="d-flex justify-content-between my-5 font-weight-bold">
							<h5 className="">Total Billed</h5>
							{/* <h5 className="">{{ price }}</h5> */}
						</div>
						<p>
							By purchasing, I agree to the Terms and Conditions and Privacy
							Policy. Your subscription will automaticatically renew every year,
							but you can cancel at anytime
						</p>
					</div>
					<div className="d-flex justify-content-between">
						<button
							className="form-control"
							style={{
								color: "white",
								width: "30%",
								backgroundColor: "#413A76"
							}}
							onClick={this.showSignup}>
							Previous
						</button>

						<Button textcolor="white" color="#413A76" width="30%">
							SUBMIT
						</Button>
					</div>
				</div>
			</div>
		);
	}
}

export default PaymentPage;
