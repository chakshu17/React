import React, { Component } from "react";

export class Form extends Component {
	constructor(props) {
		super(props);

		this.state = {
			username: "",
      comments: "",
      topic:''
		};
	}
	hanleUsernameChange = (event) => {
		this.setState({
			username: event.target.value,
		});
	};
	handleCommentChnage = (event) => {
		this.setState({
			comments: event.target.value,
		});
  };
  handleTopicChnage = (event) =>{
    this.setState({
      topic:event.target.value
    })
  }
  handleSubmit= event => {
    alert (`${this.state.username}  ${this.state.comments}  ${this.state.topic}`)
    event.preventDefault();
  }
	render() {
    const { username,comments,topic}=this.state
		return (
			<div>
				Form Component
				<form onSubmit={this.handleSubmit}>
					<div>
						<label>Username: </label>
						<input
							type="text"
							value={username}
							onChange={this.hanleUsernameChange}
						/>
					</div>
					<div>
						<label>Comments: </label>
						<textarea
							value={comments}
							onChange={this.handleCommentChnage}
						></textarea>
					</div>
					<div>
						<label>Topic: </label>
						<select value={topic} onChange={this.handleTopicChnage}>
							<option value="React">React</option>
							<option value="Angular">Angular</option>
							<option value="Vue">Vue</option>
						</select>
					</div>

          <button type="submit">Submit</button>
				</form>
			</div>
		);
	}
}

export default Form;
