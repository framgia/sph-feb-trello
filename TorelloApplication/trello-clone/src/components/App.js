import React from 'react';
import TrelloList from './TrelloList.js';
import { connect } from 'react-redux';
import TrelloActionButton from './TrelloActionButton.js'


class App extends React.Component{

  render(){
    const { lists } = this.props
    return (
      <div className="App" style={{ padding: 25}}>
        <h2>Trello Clone</h2>
        <div style={ styles.listsContainer }>
          { lists.map(list => 
            <TrelloList 
              title={list.title} 
              cards={list.cards} 
              key={list.id}
            />
          )}
          <div style={styles.buttonContainer}>
            <TrelloActionButton  list/>
          </div>
        </div>
      </div>
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
