import React, { Component } from "react";
import { connect } from "react-redux";

import List from "./List";
import TodoForm from "./TodoForm";
import firebase from "../firebase";
import { setTodos } from "../actions";

class Main extends Component {
  state = {
    todosRef: firebase.firestore().collection("todos"),
  };

  componentDidMount() {
    this.state.todosRef
      .orderBy("timestamp", "asc")
      .get()
      .then(async (querySnapshot) => {
        const todos = [];

        await querySnapshot.forEach((doc) => {
          todos.push(doc.data());
        });

        this.props.dispatch(setTodos(todos));
      });
  }

  render() {
    return (
      <div>
        <TodoForm />
        <div style={{ width: "70%", margin: "0 auto" }}>
          <List />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Main);
