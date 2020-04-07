import React, { Component } from "react";
import Button from "../ReusableComponents/Button";
import Payment from "./PaymentPage";

class SignupPage extends Component {
	state = {
		show: true
	};

	handleShowPaymentForm = () => {
		this.setState({
			show: false
		});
	};

	handleShowSignupForm = param => {
		this.setState({
			show: param
		});
	};
	render() {
		const { show } = this.state;

		const signup = (
			<div className="my-3">
				<h5 className="my-2">Create your Account</h5>
				<form action="">
					<div className="mt-4">
						<label>Fullname</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Organization</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Designation</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Purpose Of Data</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Email</label>
						<input type="email" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="row mt-3">
						<div className="ml-4">
							<h6>
								Already have an account?{" "}
								<span className="h6 text-primary">Login</span>
							</h6>
						</div>
					</div>

					<div className="mt-3">
						<button
							onClick={this.handleShowPaymentForm}
							className="form-control"
							style={{
								color: "white",
								width: "30%",
								backgroundColor: "#413A76"
							}}>
							Next >>
						</button>
					</div>
				</form>
			</div>
		);
		const payment = <Payment showPayment={this.handleShowSignupForm} />;

		return <div>{show ? signup : payment}</div>;
	}
}
export default SignupPage;
