import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Label } from "semantic-ui-react";

import firebase from "../firebase";
import { removeTodo, toggleTodo } from "../actions";

class Item extends Component {
  state = {
    todosRef: firebase.firestore().collection("todos"),
  };

  removeTodo = () => {
    const todoId = this.props.todo.id;
    this.state.todosRef
      .doc(todoId)
      .delete()
      .then(() => {
        this.props.dispatch(removeTodo(todoId));
      });
  };

  toggleTodo = () => {
    const todo = this.props.todo;
    this.state.todosRef
      .doc(todo.id)
      .update({
        isDone: !todo.isDone,
      })
      .then(() => {
        this.props.dispatch(toggleTodo(todo.id));
      });
  };

  render() {
    const todo = this.props.todo;
    return (
      <Card>
        <Card.Content>
          {todo.isDone && (
            <Label
              as="a"
              color="teal"
              ribbon="right"
              style={{ position: "absolute", top: 0, left: "305px" }}
            >
              Done
            </Label>
          )}
          <Card.Description>{todo.content}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <div className="ui buttons" style={{ width: "100%" }}>
            <Button basic color="green" onClick={this.toggleTodo}>
              {todo.isDone ? "On-going" : "Done"}
            </Button>

            <Button basic color="red" onClick={this.removeTodo}>
              Remove
            </Button>
          </div>
        </Card.Content>
      </Card>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(Item);
