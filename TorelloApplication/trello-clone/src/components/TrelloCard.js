import React from "react";
import { Card } from "react-bootstrap";
import { Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const CardContainer = styled.div`
  margin-bottom: 10px;
`;

const TrelloCard = ({ text, id, index}) => {
  return (
    <Draggable draggableId={String(id)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          { ...provided.draggableProps}
          { ...provided.dragHandleProps}
        >
          <CardContainer>
            <Card>
              <Card.Body>
                { text }
              </Card.Body>
            </Card>
          </CardContainer>
        </div>
      )}
    </Draggable>
  )
}

export default TrelloCard;