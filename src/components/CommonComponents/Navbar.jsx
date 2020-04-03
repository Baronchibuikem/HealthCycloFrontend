import React, { Component, Fragment } from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBContainer
} from "mdbreact";
import { Link as NavLink } from "react-router-dom";

import Button from "../ReusableComponents/Button";
import logo from "../../assets/images/logo.png";
// import { connect } from "react-redux";
// import PropTypes from "prop-types";
// import { logout } from "../../store/actions/auth";

class Navbar extends Component {
	state = {
		collapse: false
	};

	//   static propTypes = {
	//     auth: PropTypes.object.isRequired,
	//     logout: PropTypes.func.isRequired
	//   };

	onClick = () => {
		this.setState({
			collapse: !this.state.collapse
		});
	};

	render() {
		// const { isAuthenticated, user } = this.props.auth;

		// This components are shown if a user is authenticated
		const authlinks = (
			<Fragment>
				<MDBNavItem>
					<NavLink to="/">ABOUT</NavLink>
				</MDBNavItem>
				<MDBNavItem>
					<NavLink to="/">INSIGHTS</NavLink>
				</MDBNavItem>

				<MDBNavItem>
					<NavLink to="/">FAQ'S</NavLink>
				</MDBNavItem>
				<MDBNavItem>
					<NavLink to="/">CONTACT</NavLink>
				</MDBNavItem>
				<MDBNavItem>
					<NavLink to="/">PATIENT</NavLink>
				</MDBNavItem>
				<MDBNavItem>
					<NavLink to="/">EVENTS</NavLink>
				</MDBNavItem>

				{/* 				
				<MDBNavItem>
					<NavLink  onClick={this.props.logout}>
						LOGOUT
					</NavLink>
				</MDBNavItem> */}
			</Fragment>
		);

		const guestLinks = (
			<Fragment>
				<MDBNavItem className="mt-2">
					<NavLink to="/about">ABOUT</NavLink>
				</MDBNavItem>
				<MDBNavItem className="mt-2">
					<NavLink to="/">INSIGHTS</NavLink>
				</MDBNavItem>

				<MDBNavItem className="mt-2">
					<NavLink to="/">FAQ'S</NavLink>
				</MDBNavItem>
				<MDBNavItem className="mt-2">
					<NavLink to="/">CONTACT</NavLink>
				</MDBNavItem>
				<MDBNavItem className="d-flex">
					<Button color="#413A76" textcolor="white" width="150px">
						LOGIN
					</Button>

					<Button color="white" textcolor="black" width="55%">
						START FOR FREE
					</Button>
				</MDBNavItem>
			</Fragment>
		);

		return (
			<div>
				<header>
					<MDBNavbar
						dark
						expand="sm"
						fixed="top"
						className="z-depth-5 bg-white">
						<MDBContainer>
							<MDBNavbarToggler onClick={this.onClick} />
							<MDBCollapse isOpen={this.state.collapse} navbar>
								<MDBNavbarNav left>
									<img src={logo} alt="logo" width="40%" />
								</MDBNavbarNav>
								<MDBNavbarNav center>
									{/* {isAuthenticated ? authlinks : guestLinks} */}
									{guestLinks}
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBContainer>
					</MDBNavbar>
				</header>
			</div>
		);
	}
}

// const mapStateToProps = state => ({
//   auth: state.auth
// });
// export default connect(
//   mapStateToProps,
//   { logout }
// )(Navbar);

export default Navbar;
