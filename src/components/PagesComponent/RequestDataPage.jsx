import React, { Component } from "react";
import "../App.css";
import route from "../../ApiClient";

class RequestData extends Component {
	state = {
		prefix: "",
		first_name: "",
		last_name: "",
		designation: "",
		affilation: "",
		address: "",
		street_address: "",
		city: "",
		state: "",
		zip_code: "",
		country: "",
		email: "",
		phone_number: "",
		purpose: "",
		start_date: "",
		end_date: "",
		description: ""
	};

	submit = e => {
		e.preventDefault();
		const {
			prefix,
			first_name,
			last_name,
			designation,
			affilation,
			address,
			street_address,
			city,
			state,
			zip_code,
			country,
			email,
			phone_number,
			purpose,
			start_date,
			end_date,
			description
		} = this.state;
		const newRequest = {
			prefix,
			first_name,
			last_name,
			designation,
			affilation,
			address,
			street_address,
			city,
			state,
			zip_code,
			country,
			email,
			phone_number,
			purpose,
			start_date,
			end_date,
			description
		};
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		route
			.post("/api/v1/data/request-data/", newRequest, config)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		return (
			<div>
				<div className="container-fluid RequestDataImg">
					<div className="container align-items-end mt-5 pt-5">
						<h4 className="text-light mt-5 pt-5">Request Data</h4>
					</div>
				</div>
				<div className="container my-5">
					<h3>
						Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
						nonumy eirmod
					</h3>
					<p>
						Sed ut perspiciatis unde omnis iste natus error sit voluptatem
						accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
						quae ab illo inventore veritatis et quasi architecto beatae vitae
						dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
						aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
						eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
						qui
					</p>
					<div className="card border">
						<div className="p-5">
							<p>
								Please fill in the online form below supplying as much detail as
								possible regarding the data you require
							</p>
							<p>Note: All “*” fields are required</p>
							<h6 className="mt-5 ml-3">Name</h6>
							<form>
								<div className="container row">
									<div className="col-md-2 col-sm-12">
										<select
											className="form-control"
											value={this.state.prefix}
											onChange={e => {
												this.setState({
													prefix: e.target.value
												});
											}}>
											<option name="">....</option>
											<option name="Imo">Mr</option>
											<option name="Anambra">Mrs</option>
											<option name="Unata">Miss</option>
											<option name="Unata">Master</option>
										</select>
									</div>
									<div className="col-md-5 col-sm-12">
										<input
											type="text"
											value={this.state.first_name}
											onChange={e => {
												this.setState({
													first_name: e.target.value
												});
											}}
											className="form-control"
											placeholder="First Name"
										/>
									</div>
									<div className="col-md-5 col-sm-12">
										<input
											type="text"
											value={this.state.last_name}
											onChange={e => {
												this.setState({
													last_name: e.target.value
												});
											}}
											className="form-control"
											placeholder="Last Name"
										/>
									</div>

									<div className="col-md-6 col-sm-12 mt-5">
										<input
											type="text"
											value={this.state.designation}
											onChange={e => {
												this.setState({
													designation: e.target.value
												});
											}}
											className="form-control"
											placeholder="Designation"
										/>
									</div>
									<div className="col-md-6 col-sm-12 mt-5">
										<input
											type="text"
											value={this.state.affilation}
											onChange={e => {
												this.setState({
													affilation: e.target.value
												});
											}}
											className="form-control"
											placeholder="Affiliation(Organization, Institute) *"
										/>
									</div>
									<div class="col-md-12 col-sm-12 mt-4">
										<input
											type="text"
											value={this.state.address}
											onChange={e => {
												this.setState({
													address: e.target.value
												});
											}}
											className="form-control"
											placeholder="Address"
										/>
									</div>
									<div class="col-md-12 col-sm-12 mt-4">
										<input
											type="text"
											value={this.state.street_address}
											onChange={e => {
												this.setState({
													street_address: e.target.value
												});
											}}
											className="form-control"
											placeholder="Street Address"
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="text"
											value={this.state.city}
											onChange={e => {
												this.setState({
													city: e.target.value
												});
											}}
											className="form-control"
											placeholder="City"
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="text"
											value={this.state.state}
											onChange={e => {
												this.setState({
													state: e.target.value
												});
											}}
											className="form-control"
											placeholder="State"
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="number"
											value={this.state.zip_code}
											onChange={e => {
												this.setState({
													zip_code: e.target.value
												});
											}}
											className="form-control"
											placeholder="Zip Code"
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="text"
											value={this.state.country}
											onChange={e => {
												this.setState({
													country: e.target.value
												});
											}}
											className="form-control"
											placeholder="Country"
										/>
									</div>

									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="email"
											value={this.state.email}
											onChange={e => {
												this.setState({
													email: e.target.value
												});
											}}
											className="form-control"
											placeholder="Email"
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<input
											type="number"
											value={this.state.phone_number}
											onChange={e => {
												this.setState({
													phone_number: e.target.value
												});
											}}
											className="form-control"
											placeholder="Phone Number"
										/>
									</div>

									<div class="col-md-12 col-sm-12 mt-4">
										<textarea
											onChange={e => {
												this.setState({
													purpose: e.target.value
												});
											}}
											value={this.state.purpose}
											placeholder="PURPOSE OF REQUEST (A SPECIFIC PURPOSE MAY HELP US
											DETERMINE THE MOST APPROPRIATE DATA SET TO SEND YOU"
											className="p-2"
											cols="115"
											rows="5"></textarea>
									</div>
								</div>
								<span class=" ml-3">
									Time period for which data is required: *
								</span>

								<div class="container row">
									<div class="col-md-3 col-sm-12">
										<label>From</label>
										<input
											type="date"
											value={this.state.start_date}
											onChange={e => {
												this.setState({
													start_date: e.target.value
												});
											}}
											class="form-control"
										/>
									</div>
									<div class="col-md-3 col-sm-12">
										<label>To</label>
										<input
											type="date"
											class="form-control"
											value={this.state.end_date}
											onChange={e => {
												this.setState({
													end_date: e.target.value
												});
											}}
										/>
									</div>
								</div>

								<div class="col-md-12 col-sm-12 mt-4">
									<textarea
										onChange={e => {
											this.setState({
												description: e.target.value
											});
										}}
										value={this.state.description}
										placeholder="Specific Data Request/Description (Please provide a detailed
												description of the data requested, including key variables
												needed)"
										className="p-2"
										cols="115"
										rows="5"></textarea>
								</div>
								<div className="ml-3 mt-4">
									<button
										onClick={this.submit}
										type="submit"
										className="form-control"
										style={{
											backgroundColor: "#413A76",
											color: "white",
											width: "20%"
										}}>
										<small>SEND REQUEST</small>
									</button>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default RequestData;
