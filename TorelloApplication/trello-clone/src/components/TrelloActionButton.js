import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { connect } from "react-redux";
import { addList, addCard } from "../actions";

class TrelloActionButton extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        formOpen: false
    }
  }
  renderAddButton = () => {
    const { list } =  this.props;

    const buttonText = list ? "Add another list" : "Add another card";
    const buttonTextOpacity = list ? 1 : 0.5;
    const buttonTextColor = list ? "white" : "inherit";
    const buttonTextBackground = list ? "rgba(0,0,0,0.15)" : "inherit";

    return (
      <div
        onClick={this.openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          backgroundColor: buttonTextBackground,
        }}
      >
        <i className="fa fa-plus"></i>
        <span>
          {buttonText}
        </span>
      </div>
    );
  }

  openForm = () => {
    this.setState({
      formOpen: true,
    });
  }

  closeForm = () => {
    this.setState({
      formOpen: false,
      text: ""
    });
  }

  handleInputChange = e => {
    this.setState({
      text: e.target.value
    });
  }

  handleAddCard = () => {
  
    const { dispatch, listId } = this.props;
    const { text } = this.state;

    if (text) {
      dispatch(addCard(listId, text));
      this.setState({
        text: "",
      })
    }
    
    return;
  }

  handleAddList = () => {

    const { dispatch } = this.props;
    const { text } = this.state;
    if (text) {
      dispatch(addList(text));
    }
    
    return;
  }

  renderForm = () => {
    const { list } = this.props;

    const placeholder = list 
      ? "Enter list title..."
      : "Enter a title for this card...";

    const buttonTitle = list ? "Add List" : "Add Card";

    return (
      <div>
        <Card 
          style={{  
            overFlow: "visible",
            minHeight: 80,
            minWidth: 272,
            padding: "6px 8px 2px"
          }}
        >
          <TextareaAutosize
            style={styles.formTextArea}
            placeholder={placeholder}
            onChange={this.handleInputChange}
            onBlur={this.closeForm}
            value={this.state.text}
            autoFocus
          />
        </Card>
        <div style={styles.formButtonGroup}>
          <Button 
            variant="success"
            onMouseDown={ list ? this.handleAddList : this.handleAddCard }
          >
            {buttonTitle}
          </Button>
          <i 
            className="fa fa-times" 
            style={{
              fontSize: 20,
              marginLeft: 4,
              cursor: "pointer"
            }}
          ></i>
        </div>
      </div>
    )
  }

  render() {
    return this.state.formOpen ? this.renderForm() : this.renderAddButton();
  }
}

const styles = {
  openFormButtonGroup: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    borderRadius: 3,
    width: 272,
    height: 36,
    paddingLeft: 30
  },

  formTextArea: {
    resize: "none",
    width: "100%",
    overFlow: "hidden",
    outline: "none",
    border: "none",
  },

  formButtonGroup: {
    marginTop: 8,
    display: "flex",
    alignItems: "center"
  }
}

export default connect()(TrelloActionButton);