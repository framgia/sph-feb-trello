import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "semantic-ui-react";

import Item from "./Item";

class List extends Component {
  render() {
    const todos = this.props.todos;
    return (
      <Card.Group>
        {todos.map((todo) => (
          <Item todo={todo} isDone={todo.isDone} key={todo.id} />
        ))}
      </Card.Group>
    );
  }
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(List);
