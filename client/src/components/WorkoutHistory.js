import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ExerciseHistory from "./ExerciseHistory";
import apiUrl from "./apiConfig";
import axios from "axios";

export class WorkoutHistory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      workouts: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5001/api/workout")
      .then((response) => {
        console.log(response.data);
        this.setState({ workouts: response.data.workouts });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  apiTest = () => {
    console.log(apiUrl + "/workout");
  };

  handleEditWorkout = () => {
    console.log("Edit Workout");
  }

  handleDeleteWorkout = () => {
    console.log("Deleted Workout");
  }

  //   render() {
  //     return (
  //       <Card style={{ width: "100%" }} border="primary">
  //         <Card.Body>
  //           <div
  //             style={{
  //               width: "100%",
  //               display: "flex",
  //               justifyContent: "flex-end",
  //               alignItems: "center",
  //             }}
  //           >
  //             <i className="fa-solid fa-gear"></i>
  //             <i
  //               className="fa-solid fa-delete-left"
  //               style={{ marginLeft: "10px" }}
  //             ></i>
  //             <Card.Title style={{ marginLeft: "auto" }}>
  //               Monday Workout
  //             </Card.Title>
  //           </div>
  //         </Card.Body>
  //         <ListGroup className="list-group-flush">
  //           <ListGroup.Item>
  //             <ExerciseHistory exerciseName="Lunges" weight="15" reps="2" />
  //           </ListGroup.Item>
  //         </ListGroup>
  //         <button onClick={this.apiTest}>Show Workouts</button>
  //       </Card>
  //     );
  //   }
  // }

  render() {
    const workoutList = this.state.workouts.map((workout, index) => {
      console.log(workout);
      return (
        <div key={index}>
          <Card style={{ width: "100%" }} border="primary">
            <Card.Body>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Card.Title style={{ textAlign: "left" }}>
                  {workout.name ? workout.name : "Default Exercise Name"}
                </Card.Title>
                <div className="d-flex ml-auto">
                  <div className="btn" onClick={this.handleEditWorkout}>
                      <i className="fas fa-gear"></i>
                  </div>
                  <div className="btn" onClick={this.handleDeleteWorkout}>
                      <i className="fas fa-trash"></i>
                  </div>
                </div>
              </div>
            </Card.Body>
            <ListGroup className="list-group-flush">
              {workout.exercises.map((exercise, index) => (
                <ListGroup.Item key={index}>
                  <ExerciseHistory
                    exerciseName={exercise.name}
                    weight={exercise.weight}
                    reps={exercise.reps}
                  />
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card>
        </div>
      );
    });

    return (
      <div>
        {workoutList}
        <button onClick={this.apiTest}>Show Workouts</button>
      </div>
    );
  }
}

export default WorkoutHistory;
