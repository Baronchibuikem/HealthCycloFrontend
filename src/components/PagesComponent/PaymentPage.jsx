import React, { Component } from "react";
// import Button from "../ReusableComponents/Button";
import masterCard from "../../assets/images/masterCard.jpg";
import visaCard from "../../assets/images/visa.jpeg";
import { register } from "../../store/actions/userAuthentication";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class PaymentPage extends Component {
	state = {
		free: "free",
		standard: "$99.99",
		business: "$149.99",
		price: ""
	};

	static propTypes = {
		register: PropTypes.func.isRequired,
		authenticate: PropTypes.bool
	};
	showSignup = () => {
		this.props.showPayment(true);
	};

	submitForms = e => {
		e.preventDefault();
		const {
			fullname,
			designation,
			organization,
			purpose_of_data,
			password,
			email
		} = this.props.values;
		const newUser = {
			fullname,
			designation,
			organization,
			purpose_of_data,
			password,
			email
		};
		this.props.register(newUser);
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
					<button
						className="col-md-3 col-sm-12 shadow text-center"
						onClick={e => {
							this.setState({ price: this.state.free });
						}}
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Basic</h6>
							<h4 className="text-light">{this.state.free}</h4>
						</div>
					</button>
					<button
						className="col-md-3 col-sm-12 mx-5 text-center"
						onClick={e => {
							this.setState({ price: this.state.standard });
						}}
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Standard</h6>
							<h4 className="text-light">{this.state.standard}</h4>
						</div>
					</button>
					<button
						className="col-md-3 col-sm-12 text-center"
						onClick={e => {
							this.setState({ price: this.state.business });
						}}
						style={{
							backgroundColor: "#413A76",
							cursor: "pointer",
							color: "white"
						}}>
						<div className="py-5">
							<h6 className="text-light">Business</h6>
							<h4 className="text-light">{this.state.business}</h4>
						</div>
					</button>
				</div>

				<div className="mt-4">
					<h4>Secure Payment Information</h4>
					<form onSubmit={this.submitForms}>
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
							<h3 className="">{this.state.price}</h3>
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

						<button
							className="form-control"
							type="submit"
							style={{
								color: "white",
								width: "30%",
								backgroundColor: "#413A76"
							}}
							onClick={this.submitForms}>
							Submit
						</button>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authenticate: state.userAuth.isAuthenticated
});

export default connect(mapStateToProps, { register })(PaymentPage);
