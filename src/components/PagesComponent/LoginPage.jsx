import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Button from "../ReusableComponents/Button";
import { login } from "../../store/actions/userAuthentication";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class LoginPage extends Component {
	state = {
		email: "",
		password: ""
	};

	static propTypes = {
		login: PropTypes.func.isRequired,
		authenticate: PropTypes.bool
	};

	// This is used to submit the form which has it's values passed as arguments to
	// login action being managed by redux
	submitForms = e => {
		e.preventDefault();
		const { email, password } = this.state;
		this.props.login({ email, password });
	};

	render() {
		if (this.props.authenticate) {
			return <Redirect to="/" />;
		}
		return (
			<div className="my-3">
				<h5 className="my-2">Login to your account</h5>
				<form action="" onSubmit={this.submitForms}>
					<div className="mt-4">
						<label>Email Address</label>
						<input
							type="email"
							className="form-control"
							value={this.state.email}
							onChange={e => this.setState({ email: e.target.value })}
						/>
					</div>
					<div className="mt-4">
						<label>Password</label>
						<input
							type="password"
							className="form-control"
							value={this.state.password}
							onChange={e => this.setState({ password: e.target.value })}
						/>
					</div>
				</form>
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
						Don't have an account? <span className="text-primary">SignUp</span>
					</h6>
				</div>
				<div className="mt-3">
					<button
						className="form-control"
						type="submit"
						style={{
							color: "white",
							width: "30%",
							backgroundColor: "#413A76"
						}}
						onClick={this.submitForms}>
						{!this.props.loading ? "Login" : "...Loading"}
					</button>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	authenticate: state.userAuth.isAuthenticated,
	loading: state.userAuth.isLoading
});

export default connect(mapStateToProps, { login })(LoginPage);
