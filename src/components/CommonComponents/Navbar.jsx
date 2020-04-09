import React, { Component, Fragment } from "react";
import {
	MDBNavbar,
	MDBNavbarNav,
	MDBNavbarToggler,
	MDBCollapse,
	MDBNavItem,
	MDBContainer,
	MDBDropdown,
	MDBDropdownToggle,
	MDBDropdownMenu,
	MDBDropdownItem
} from "mdbreact";
import { Link as NavLink } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../../store/actions/userAuthentication";

import Button from "../ReusableComponents/Button";
import logo from "../../assets/images/logo.svg";

class Navbar extends Component {
	state = {
		collapse: false
	};

	static propTypes = {
		auth: PropTypes.object.isRequired,
		logout: PropTypes.func.isRequired
	};

	onClick = () => {
		this.setState({
			collapse: !this.state.collapse
		});
	};

	render() {
		const { isAuthenticated, user } = this.props.auth;

		// This components are shown if a user is authenticated
		const authlinks = (
			<Fragment>
				<MDBNavItem className="mt-2">
					<NavLink to="/browsedata">BROWSE DATA</NavLink>
				</MDBNavItem>
				<MDBNavItem className="mt-2">
					<NavLink to="/">RESOURCES</NavLink>
				</MDBNavItem>

				<MDBNavItem className="mt-2">
					<NavLink to="">REQUEST/SUBMIT DATA</NavLink>
				</MDBNavItem>
				<MDBNavItem className="mt-2">
					<NavLink to="/">HEALTHTHINK BLOG</NavLink>
				</MDBNavItem>
				<MDBNavItem>
					<MDBDropdown size="md">
						<MDBDropdownToggle caret color="secondary">
							{user ? `${user.fullname}` : ""}
						</MDBDropdownToggle>
						<MDBDropdownMenu color="secondary" basic>
							<MDBDropdownItem>Profile</MDBDropdownItem>
							<MDBDropdownItem>Account Details</MDBDropdownItem>
							<MDBDropdownItem>Download History</MDBDropdownItem>
							<MDBDropdownItem>Settings</MDBDropdownItem>
							<hr />
							<MDBDropdownItem onClick={this.props.logout}>
								Logout
							</MDBDropdownItem>
						</MDBDropdownMenu>
					</MDBDropdown>
				</MDBNavItem>
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
					<NavLink to="/faq">FAQ'S</NavLink>
				</MDBNavItem>
				<MDBNavItem className="mt-2">
					<NavLink to="/contact">CONTACT</NavLink>
				</MDBNavItem>
				<MDBNavItem className="d-flex">
					<NavLink to="/authentication">
						<Button color="#413A76" textcolor="white" width="150px">
							LOGIN
						</Button>
					</NavLink>

					{/* <Button color="white" textcolor="black" width="100%">
						START FOR FREE
					</Button> */}
				</MDBNavItem>
			</Fragment>
		);

		return (
			<div>
				<header>
					<MDBNavbar dark expand="sm" fixed="top" className=" bg-white">
						<MDBContainer>
							<MDBNavbarToggler onClick={this.onClick} className="bg-dark" />
							<MDBCollapse isOpen={this.state.collapse} navbar>
								<MDBNavbarNav left>
									<img src={logo} alt="logo" width="40%" />
								</MDBNavbarNav>
								<MDBNavbarNav center>
									{isAuthenticated ? authlinks : guestLinks}
								</MDBNavbarNav>
							</MDBCollapse>
						</MDBContainer>
					</MDBNavbar>
				</header>
			</div>
		);
	}
}

const mapStateToProps = state => ({
	auth: state.userAuth
});
export default connect(mapStateToProps, { logout })(Navbar);
