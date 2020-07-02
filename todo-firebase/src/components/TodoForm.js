import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Form, Segment } from "semantic-ui-react";

import { addTodo } from "../actions";
import firebase from "../firebase";
import { firestore } from "firebase";

class TodoForm extends Component {
  state = {
    content: "",
    todoRef: firebase.firestore().collection("todos"),
  };

  textHandle = (event) => {
    this.setState({ content: event.target.value });
  };

  submit = async () => {
    if (!this.state.content) return;

    const newDoc = await this.state.todoRef.doc();

    const newTodo = {
      id: newDoc.id,
      isDone: false,
      content: this.state.content,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    };

    newDoc
      .set(newTodo)
      .then(() => {
        this.props.dispatch(addTodo(newTodo));
        this.setState({ content: "" });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Segment style={{ backgroundColor: "teal" }}>
        <Form inverted>
          <Form.Group
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Form.Input
              fluid
              label="Content"
              width="10"
              placeholder="Content"
              value={this.state.content}
              onChange={this.textHandle}
            />
            <Button
              type="submit"
              size="small"
              onClick={this.submit}
              style={{ width: "90px", marginTop: "10px" }}
            >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Segment>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  dispatch,
});

export default connect(null, mapDispatchToProps)(TodoForm);
