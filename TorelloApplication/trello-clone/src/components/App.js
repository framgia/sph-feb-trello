import React from 'react';
import TrelloList from './TrelloList.js';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    const { lists } = this.props
    return (
      <div className="App">
        <h2>Trello Clone</h2>
        <div style={ styles.listsContainer }>
          { lists.map(list => 
            <TrelloList 
              title={list.title} 
              cards={list.cards} 
              key={list.id}
            />
          )}
        </div>
      </div>
    )
  }
}

const styles = {
  listsContainer: {
    display: "flex",
    flexDirection: "row",
    marginRight:8
  }
};

const mapStateFromProps = state => ({
  lists: state.lists
});

export default connect(mapStateFromProps)(App);
