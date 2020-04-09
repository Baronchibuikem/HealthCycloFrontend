import React, { Component } from "react";
import data from "../UtilityComponents/DataForBrowseDataPage";

export default class BrowseDataPage extends Component {
	state = {
		contents: []
	};

	componentDidMount() {
		this.setState({
			contents: data["items"]
		});
		console.log(this.state.contents);
	}
	render() {
		return (
			<div className="container mt-5 pt-5">
				<h4>Please select a program area to begin</h4>
				<div className="row">
					{this.state.contents.map(content => {
						return (
							<div
								className="mx-2 mx-auto my-3 p-5 shadow"
								style={{ width: "250px", backgroundColor: "white" }}>
								<div className="d-flex justify-content-center">
									<img src={content.image} alt="data_img" width="30%" />
								</div>

								<h5 className="text-center">{content.title}</h5>
							</div>
						);
					})}
				</div>
			</div>
		);
	}
}
