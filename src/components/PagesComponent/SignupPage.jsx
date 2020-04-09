import React, { Component } from "react";
import Button from "../ReusableComponents/Button";
import Payment from "./PaymentPage";

class SignupPage extends Component {
	state = {
		show: true,
		fullname: "",
		organization: "",
		designation: "",
		purpose_of_data: "",
		email: "",
		password: "",
		fullNameError: "",
		checkSpecicalChar: "",
		designationError: "",
		purpose_of_data_error: "",
		emailError: "",
		passwordError: "",
		passwordLengthError: "",
		organizationError: ""
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

	onSubmit = e => {
		e.preventDefault();
		// Here we first destructure state variables
		const {
			fullname,
			designation,
			organization,
			purpose_of_data,
			password,
			email
		} = this.state;
		// Here we check if the any of the field in the form is empty
		if (!fullname) {
			this.setState({
				show: true,
				fullNameError: "Fullname must not be empty"
			});
		}
		if (!organization) {
			this.setState({
				show: true,
				organizationError: "Organization must not be empty"
			});
		}
		if (!designation) {
			this.setState({
				show: true,
				designationError: "Designation must not be empty"
			});
		}
		if (!purpose_of_data) {
			this.setState({
				show: true,
				purpose_of_data_error: "Purpose_of_data must not be empty"
			});
		}
		if (!email) {
			this.setState({
				show: true,
				emailError: "Email must not be empty"
			});
		}
		if (!password) {
			this.setState({
				show: true,
				passwordError: "Password must not be empty"
			});
		}
		if (password.length < 8) {
			this.setState({
				show: true,
				passwordLengthError: "Password must have a minimum of 8 characters"
			});
		}

		if (
			fullname &&
			organization &&
			designation &&
			purpose_of_data &&
			email &&
			password.length > 8
		) {
			this.handleShowPaymentForm();
		} else {
			this.setState({
				show: true
			});
		}
	};
	render() {
		const { show } = this.state;

		const signup = (
			<div className="my-3">
				<h5 className="my-2">Create your Account</h5>
				<form onSubmit={this.onSubmit}>
					<div className="mt-4">
						<label>Fullname</label>
						<input
							type="text"
							className="form-control"
							onChange={e => this.setState({ fullname: e.target.value })}
							value={this.state.fullname}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.fullNameError}
						</span>
					</div>
					<div className="mt-4">
						<label>Organization</label>
						<input
							type="text"
							className="form-control"
							onChange={e => this.setState({ organization: e.target.value })}
							value={this.state.organization}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.organizationError}
						</span>
					</div>
					<div className="mt-4">
						<label>Designation</label>
						<input
							type="text"
							className="form-control"
							onChange={e => this.setState({ designation: e.target.value })}
							value={this.state.designation}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.designationError}
						</span>
					</div>
					<div className="mt-4">
						<label>Purpose Of Data</label>
						<input
							type="text"
							className="form-control"
							onChange={e => this.setState({ purpose_of_data: e.target.value })}
							value={this.state.purpose_of_data}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.purpose_of_data_error}
						</span>
					</div>
					<div className="mt-4">
						<label>Email</label>
						<input
							type="email"
							className="form-control"
							onChange={e => this.setState({ email: e.target.value })}
							value={this.state.email}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.emailError}
						</span>
					</div>
					<div className="mt-4">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							onChange={e => this.setState({ password: e.target.value })}
							value={this.state.password}
						/>
						<span className="text-danger font-weight-bold">
							{this.state.passwordError}
						</span>
						<span className="text-danger font-weight-bold">
							{this.state.passwordLengthError}
						</span>
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
							// onClick={this.handleShowPaymentForm}
							onClick={this.onSubmit}
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
		const payment = (
			<Payment showPayment={this.handleShowSignupForm} values={this.state} />
		);

		return <div>{show ? signup : payment}</div>;
	}
}
export default SignupPage;
