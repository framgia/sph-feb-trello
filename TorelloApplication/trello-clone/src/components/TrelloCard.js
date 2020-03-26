import React from "react";
import { Card } from "react-bootstrap";
import { Draggable } from 'react-beautiful-dnd';

const TrelloCard = ({ text, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          { ...provided.draggableProps}
          { ...provided.dragHandleProps}
        >
          <Card style={styles.cardContainer}>
            <Card.Body>
              { text }
            </Card.Body>
          </Card>
        </div>
      )}
    </Draggable>
  )
}

const styles = {
    cardContainer: {
        marginBottom: "10px",
    }
}

export default TrelloCard;