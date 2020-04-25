import React, { Component } from "react";
import bgImage from "../../assets/images/submitDataBg.png";
import route from "../../ApiClient";

export default class SubmitDataPage extends Component {
	state = {
		prefix: "",
		first_name: "",
		last_name: "",
		research_topic: "",
		research_location: "",
		geographical_coverage: "",
		start_date: "",
		end_date: "",
		study_design: "",
		study_population: "",
		sample_size: "",
		sampling_technique: "",
		sampling_unit: "",
		data_collection_tools: "",
		key_variables: "",
		selected: [],
		name: "",
		affilation: "",
		phone_number: "",
		email: "",
		sponsor: "",
		data_codebook: null,
		questionaire: null,
		upload_data: null,
		permission: false
	};

	// ValueChange = e => {
	// 	e.preventDefault();
	// 	const { value } = e.target;
	// 	this.setState(prevState => ({
	// 		...prevState,
	// 		selected: [...prevState.selected, value]
	// 	}));
	// };

	// this function is used to add or remove items to/from the selected arrays
	ValueChange = e => {
		if (e.target.checked) {
			this.setState({
				selected: [...this.state.selected, e.target.value]
			});
		} else {
			let remove = this.state.selected.indexOf(e.target.value);
			this.setState({
				selected: this.state.selected.filter((_, i) => i !== remove)
			});
		}
	};

	submit = e => {
		e.preventDefault();
		const {
			prefix,
			first_name,
			last_name,
			research_topic,
			research_location,
			geographical_coverage,
			start_date,
			end_date,
			study_design,
			study_population,
			sample_size,
			sampling_technique,
			sampling_unit,
			data_collection_tools,
			key_variables,
			selected,
			name,
			affilation,
			phone_number,
			email,
			sponsor,
			data_codebook,
			questionaire,
			upload_data,
			permission
		} = this.state;
		const newRequest = {
			prefix,
			first_name,
			last_name,
			research_topic,
			research_location,
			geographical_coverage,
			start_date,
			end_date,
			study_design,
			study_population,
			sample_size,
			sampling_technique,
			sampling_unit,
			data_collection_tools,
			key_variables,
			selected,
			name,
			affilation,
			phone_number,
			email,
			sponsor,
			data_codebook,
			questionaire,
			upload_data,
			permission
		};
		const config = {
			headers: {
				"Content-Type": "application/json"
			}
		};
		route
			.post("/api/v1/data/submit-data/", newRequest, config)
			.then(response => {
				console.log(response);
			})
			.catch(err => {
				console.log(err);
			});
	};
	render() {
		const style = {
			submitDataBg: {
				position: "relative",
				height: "400px",
				marginBottom: "-54px",
				backgroundImage: `url(${bgImage})`,
				backgroundRepeat: " no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center center"
			}
		};
		return (
			<div>
				<div class="jumbotron mb-5" style={style.submitDataBg}></div>
				<div class="container mt-5">
					<h2>Do You believe in open data?</h2>
					<h2>Do you want your data to be maximally utilized?</h2>
					<h2>Do you want to further contribute to public health knowledge?</h2>
					<p class="mt-5 pt-5">
						If you do, let’s collaborate. Join the Nigeria Health Data
						Collaborative! Submit your data, and you can get more data as well.
						It will be added to our data bank to increase the value of data
						analysed and presented on HealthThink. Together, we can improve
						public health research and promote faster progress towards enhancing
						the lives of Nigerians.
					</p>
					<form>
						<div class="card">
							<div class="col-md-11 col-sm-12 mt-6 mx-auto">
								<p>
									Note: All "<span class="text-danger ">*</span>" fields are
									required
								</p>
								<label class="font-weight-bold">Name</label>
								<br />
								<div class="row mb-3">
									<div class="col-md-4 col-sm-12">
										<select
											className="form-control"
											onChange={e => {
												this.setState({
													prefix: e.target.value
												});
											}}>
											<option value={this.state.prefix}>Mr</option>
											<option value={this.state.prefix}>Mrs</option>
										</select>

										<span>Prefix</span>
									</div>
									<div class="col-md-4 col-sm-12">
										<input
											type="text"
											class="form-control"
											value={this.state.first_name}
											onChange={e => {
												this.setState({
													first_name: e.target.value
												});
											}}
										/>
										<span>First Name</span>
									</div>
									<div class="col-md-4 col-sm-12">
										<input
											type="text"
											class="form-control"
											value={this.state.last_name}
											onChange={e => {
												this.setState({
													last_name: e.target.value
												});
											}}
										/>
										<span>Last Name</span>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Research Topic<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.research_topic}
											onChange={e => {
												this.setState({
													research_topic: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>
											Research Location(State)
											<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.research_location}
											onChange={e => {
												this.setState({
													research_location: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Geographical Coverage<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.geographical_coverage}
											onChange={e => {
												this.setState({
													geographical_coverage: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-3 col-sm-12">
										<span>Start Date</span>
										<input
											type="date"
											class="form-control"
											value={this.state.start_date}
											onChange={e => {
												this.setState({
													start_date: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-3 col-sm-12">
										<span>End Date</span>
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
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Study Design<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.study_design}
											onChange={e => {
												this.setState({
													study_design: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-3 col-sm-12">
										<span>
											Study Population<span class="text-danger ">*</span>
										</span>
										<input
											type="number"
											class="form-control"
											value={this.state.study_population}
											onChange={e => {
												this.setState({
													study_population: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-3 col-sm-12">
										<span>Sample Size</span>
										<input
											type="number"
											class="form-control"
											placeholder="0000"
											value={this.state.sample_size}
											onChange={e => {
												this.setState({
													sample_size: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Sampling Technique<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.sampling_technique}
											onChange={e => {
												this.setState({
													sampling_technique: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>
											Sampling Unit(Individual, Household, School)
											<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.sampling_unit}
											onChange={e => {
												this.setState({
													prefix: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>Data Collection Tools</span>
										<textarea
											class="form-control"
											rows="4"
											value={this.state.data_collection_tools}
											onChange={e => {
												this.setState({
													data_collection_tools: e.target.value
												});
											}}></textarea>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>
											Key Variables(Indicate at most 5 key variables available
											in the data)<span class="text-danger ">*</span>
										</span>
										<textarea
											class="form-control"
											rows="4"
											value={this.state.key_variables}
											onChange={e => {
												this.setState({
													key_variables: e.target.value
												});
											}}></textarea>
									</div>
								</div>
								<div class="mt-5">
									<p style={{ backgroundColor: "#eee" }}>
										-- {this.state.selected} --
									</p>
									<input
										type="checkbox"
										value="NON COMMUNICABLE DISEASES (CARDIOVASCULAR DISEASES AND
                                            CANCER)"
										onChange={this.ValueChange}
									/>
									<span>NON COMMUNICABLE DISEASES</span>
									<br />
									<input
										type="checkbox"
										value="Malaria"
										onChange={this.ValueChange}
									/>
									<span>Malaria</span>
									<br />
									<input
										type="checkbox"
										value="HIV/AIDS"
										onChange={this.ValueChange}
									/>
									<span>HIV/AIDS</span>
									<br />
									<input
										type="checkbox"
										value="Tuberculosis"
										onChange={this.ValueChange}
									/>
									<span>Tuberculosis</span>
									<br />
									<input
										type="checkbox"
										value="Other Infectious Disease"
										onChange={this.ValueChange}
									/>
									<span>Other Infectious Disease</span>
									<br />
									<input
										type="checkbox"
										value="Maternal Health"
										onChange={this.ValueChange}
									/>
									<span>Maternal Health</span>
									<br />
									<input
										type="checkbox"
										value="Child Health"
										onChange={this.ValueChange}
									/>
									<span>Child Health</span>
									<br />
									<input
										type="checkbox"
										value="Adolescent Health"
										onChange={this.ValueChange}
									/>
									<span>Adolescent Health</span>
									<br />
									<input
										type="checkbox"
										value="Reproductive and Family Health"
										onChange={this.ValueChange}
									/>
									<span>Reproductive and Family Health</span>
									<br />
									<input
										type="checkbox"
										value="Community Health"
										onChange={this.ValueChange}
									/>
									<span>Community Health</span>
									<br />
									<input
										type="checkbox"
										value="Others"
										onChange={this.ValueChange}
									/>
									<span>Others</span>
								</div>
								<h5>
									Private Investigator<span class="text-danger ">*</span>
								</h5>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Name<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.name}
											onChange={e => {
												this.setState({
													name: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>Affiliation</span>
										<input
											type="text"
											class="form-control"
											value={this.state.affilation}
											onChange={e => {
												this.setState({
													affilation: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Contact Number<span class="text-danger ">*</span>
										</span>
										<input
											type="number"
											class="form-control"
											value={this.state.phone_number}
											onChange={e => {
												this.setState({
													phone_number: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>
											Email Address<span class="text-danger ">*</span>
										</span>
										<input
											type="email"
											class="form-control"
											value={this.state.email}
											onChange={e => {
												this.setState({
													email: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row mb-3">
									<div class="col-md-6 col-sm-12">
										<span>
											Funder(s)/Sponsor(s)<span class="text-danger ">*</span>
										</span>
										<input
											type="text"
											class="form-control"
											value={this.state.sponsor}
											onChange={e => {
												this.setState({
													sponsor: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12 mt-4">
										<span>Upload Data Codebook</span>

										<input
											type="file"
											name="file"
											value={this.state.data_codebook}
											onChange={e => {
												this.setState({
													data_codebook: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<div class="row my-3">
									<div class="col-md-6 col-sm-12">
										<span>Upload Questionnaire</span>

										<input
											type="file"
											name="file"
											value={this.state.questionaire}
											onChange={e => {
												this.setState({
													questionaire: e.target.value
												});
											}}
										/>
									</div>
									<div class="col-md-6 col-sm-12">
										<span>Upload Data</span>

										<input
											type="file"
											name="file"
											value={this.state.upload_data}
											onChange={e => {
												this.setState({
													upload_data: e.target.value
												});
											}}
										/>
									</div>
								</div>
								<p class="font-weight-bold mt-7">
									BY AGREEING TO THIS, YOU ARE DECLARING THAT YOUR DATA SET IS
									CLEAN, ACCURATE, AND PROTECTS THE CONFIDENTIALITY OF YOUR
									STUDY PARTICIPANTS. WE ATTEST THAT YOUR DATA WILL NOT BE USED
									FOR ANY OTHER PURPOSES THAN TO ADVANCE RESEARCH, AND THAT IT
									SHALL NOT BE SHARED WITH ANY THIRD PARTY EXCEPT WITH YOUR
									GRANTED PERMISSION.*
								</p>
								<div>
									<input
										type="checkbox"
										value={this.state.permission}
										onChange={e => {
											this.setState({
												permission: e.target.value
											});
										}}
									/>
									<span class="mx-2">I Agree</span>
								</div>
								<div>
									<button
										style={{ backgroundColor: "#413A76", width: "20%" }}
										className=" form-control text-light my-4"
										type="submit"
										onClick={this.submit}>
										SUBMIT
									</button>
								</div>
							</div>
						</div>
					</form>
				</div>
			</div>
		);
	}
}
