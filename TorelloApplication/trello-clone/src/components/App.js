import React from 'react';
import TrelloList from './TrelloList.js';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton.js';

import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { sort } from "../actions";
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 8px;
  margin-top: 20px;
  flex:1;
  overflow-y:hidden;
  overflow-x:scroll;
`;

class App extends React.Component{

  onDragEnd = (result) => {

    const { destination, source, draggleId, type} = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggleId,
        type
      )
    )
  };

  render(){
    const { lists } = this.props
    return (
      <div className="App" style={styles.mainContainer}>
        <DragDropContext onDragEnd={ this.onDragEnd }>
          <h2>Trello Clone</h2>
            <Droppable 
              droppableId="all-lists" 
              direction="horizontal" 
              type="list"
            >
             {provided => (
                <ListContainer 
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  { lists.map((list, index) => 
                    <TrelloList 
                      title={list.title} 
                      cards={list.cards} 
                      listId={list.id}
                      key={list.id}
                      index={index}
                    />
                  )}
                  {provided.placeholder}
                  <div style={styles.buttonContainer}>
                    <TrelloActionButton  list/>
                  </div>
                </ListContainer>
             )}
            </Droppable>
        </DragDropContext>
      </div>
    )
  }
}

const styles = {
  buttonContainer: {
    height: "1%",
    padding: "6px 8px"
  },

  mainContainer: {
    padding: "25px",
    display: "flex",
    flexDirection: "column",
    height: "100vh"
  }
};

const mapStateFromProps = state => ({
  lists: state.lists
});

export default connect(mapStateFromProps)(App);
