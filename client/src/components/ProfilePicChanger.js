import React, { Component } from "react";
import "antd/dist/reset.css";
import { Avatar } from "antd";
// import { Container } from "react-bootstrap";
import { UserOutlined } from "@ant-design/icons";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import ProfilePicModal from "./ProfilePicModal";
import usman_pic from "../userImage/usman_pic.png";
import hotPink from "../userImage/hotPink.png";
import popcorn from "../userImage/popcorn.png";
import axios from "axios";
import apiUrl from "./apiConfig";

class ProfilePicChanger extends Component {
	constructor(props) {
		super(props);

		this.state = {
			profileImage: "",
			totalWorkouts: "Calculating...",
			totalExercises: "Calculating...",
		};
	}

	handleImageChange = (profileImage) => {
		this.setState({
			profileImage: profileImage,
		});
	};

	componentDidMount() {
		axios
			.get(apiUrl + `/workout?user=${this.props.userID}`)
			.then((response) => {
				const workouts = response.data.workouts;
				const totalWorkouts = workouts.length;
				let totalExercises = 0;
				workouts.forEach((workout) => {
					totalExercises += workout.exercises.length;
				});

				this.setState({
					totalExercises: totalExercises,
					totalWorkouts: totalWorkouts,
				});
			})
			.catch((error) => {
				console.log(error);
				this.setState({
					error: "Failed to fetch workouts",
				});
			});
	}

	render() {
		return (
			<Container className="my-3 d-flex flex-column">
				<Row className="d-flex justify-content-center align-items-center">
					<Col
						md="auto"
						className="d-flex justify-content-center">
						<Avatar
							size={64}
							icon={<UserOutlined />}
							src={this.state.profileImage}
						/>
					</Col>
				</Row>
				{this.props.isLoggedIn && (
					<Row className="d-flex justify-content-md-center">
						<Col
							md="auto"
							className="d-flex justify-content-center">
							<h3>{this.props.username}</h3>
						</Col>
					</Row>
				)}
				<Row className="justify-content-md-center">
					<Col
						md="auto"
						className="text-center">
						<ListGroup className="list-group-flush">
							<ListGroupItem className="list-item">
								Total Workouts: {this.state.totalWorkouts}
							</ListGroupItem>
							<ListGroupItem className="list-item">
								Total Exercises: {this.state.totalExercises}
							</ListGroupItem>
						</ListGroup>
						<ProfilePicModal
							className="profile-modal-button"
							handleImageChange={this.handleImageChange}
							usman_pic={usman_pic}
							hotPink={hotPink}
							popcorn={popcorn}
						/>
					</Col>
				</Row>
			</Container>
		);
	}
}

export default ProfilePicChanger;
