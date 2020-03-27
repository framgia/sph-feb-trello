import React from 'react';
import TrelloCard from './TrelloCard.js';
import TrelloActionButton from './TrelloActionButton.js';
import { Droppable } from 'react-beautiful-dnd';

const TrelloList = ({title, cards, listId}) => {
  return (
    <Droppable droppableId={ String(listId)}>
      {provided => (
        <div 
          { ...provided.droppableProps} 
          ref={provided.innerRef} 
          style={styles.container}
        >
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
          <TrelloActionButton listId={listId}/>
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

const styles = {
  container: {
    backgroundColor: "#dfe3e6",
    borderRadius: 3,
    height: "1%",
    width: 300,
    padding: 8,
    marginRight:8
  }
}

export default TrelloList;