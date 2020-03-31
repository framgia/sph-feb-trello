import React from 'react';
import TrelloCard from './TrelloCard.js';
import TrelloActionButton from './TrelloActionButton.js';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from "styled-components";

const ListContainer = styled.div`
  box-sizing: border-box;
  display: inline-block;
  vertical-align: top;
  white-space: nowrap;
  border-radius: 3px;
  height: 100%;
  width: 305px !important;
  padding: 8px;
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
          <div  style={ styles.listWrapper }>
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
          </div>
        </ListContainer>
      )}
      
    </Draggable>
  );
}

const styles = {
  listWrapper: {
    background: "#dfe3e6",
    padding: "8px",
    maxHeight: "100%",
    overflowY: "scroll",
    overflowX: "hidden"
  }
};

export default TrelloList;