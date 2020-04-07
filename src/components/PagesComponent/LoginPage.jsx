import React, { Component } from "react";
import Button from "../ReusableComponents/Button";

class LoginPage extends Component {
	render() {
		return (
			<div className="my-3">
				<h5 className="my-2">Login to your account</h5>
				<form action="">
					<div className="mt-4">
						<label>Email Address</label>
						<input type="text" className="form-control" />
					</div>
					<div className="mt-4">
						<label>Password</label>
						<input type="password" className="form-control" />
					</div>
					<div className="row mt-3">
						<div className="col-md-6 col-sm-6">
							<input type="checkbox" className="mb-2 mr-sm-2 mb-sm-0" />
							<span className="text-dark h6">Stay Logged In</span>
						</div>
						<div className="col-md-6 col-sm-6 text-right text-primary">
							<router-link to="/auth">Forgot password?</router-link>
						</div>
					</div>
					<div className="mt-3">
						<h6>
							Don't have an account?{" "}
							<span className="text-primary">SignUp</span>
						</h6>
					</div>
					<div className="mt-3">
						<Button color="#413A76" textcolor="white" width="50%">
							LOGIN
						</Button>
					</div>
				</form>
			</div>
		);
	}
}

export default LoginPage;
