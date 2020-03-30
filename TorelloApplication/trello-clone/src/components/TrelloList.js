import React from 'react';
import TrelloCard from './TrelloCard.js';
import TrelloActionButton from './TrelloActionButton.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  height: 100%;
  width: 300px;
  padding: 8px;
  margin-right:8px;
`;

const TrelloList = ({title, cards, listId, index}) => {
  return (
    <Draggable draggableId={String(listId)} index={index}>
      {provided => (
        <ListContainer 
          {...provided.draggableProps}
          ref={provided.innerRef} 
          {...provided.dragHandleProps}
        >
          <Droppable droppableId={ String(listId)}>
            {provided => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <h4>{ title }</h4>
                <div>
                  { cards.map((card, index) => 
                    <TrelloCard 
                      text={card.text} 
                      key={card.id}
                      index={index}
                      id={card.id}
                    /> 
                  )}
                </div>
                {provided.placeholder}
                <TrelloActionButton listId={listId}/>
              </div>
            )}
          </Droppable>
        </ListContainer>
      )}
      
    </Draggable>
  );
}

export default TrelloList;