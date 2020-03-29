import React from 'react';
import TrelloList from './TrelloList.js';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton.js';
import { DragDropContext } from 'react-beautiful-dnd';
import { sort } from "../actions";

class App extends React.Component{

  onDragEnd = (result) => {
    const { destination, source, draggleId} = result;

    if(!destination) {
      return;
    }

    this.props.dispatch(
      sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggleId
      )
    )

  };

  render(){
    const { lists } = this.props
    return (
      <DragDropContext onDragEnd={ this.onDragEnd }>
        <div className="App" style={{ padding: 25}}>
          <h2>Trello Clone</h2>
          <div style={ styles.listsContainer }>
            { lists.map(list => 
              <TrelloList 
                title={list.title} 
                cards={list.cards} 
                listId={list.id}
                key={list.id}
              />
            )}
            <div style={styles.buttonContainer}>
              <TrelloActionButton  list/>
            </div>
          </div>
        </div>
      </DragDropContext>
    )
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight:8,
    marginTop:20
  },
  buttonContainer: {
    height: "1%",
    padding: "6px 8px"
  }
};

const mapStateFromProps = state => ({
  lists: state.lists
});

export default connect(mapStateFromProps)(App);
