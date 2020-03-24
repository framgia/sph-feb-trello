import React from 'react';
import TrelloList from './TrelloList.js';
import { connect } from 'react-redux';

class App extends React.Component{

  render(){
    const { lists } = this.props
    return (
      <div className="App">
        <h2>Trello Clone</h2>
        { lists.map(list => <TrelloList title={list.title} cards={list.cards}/>)}
      </div>
    )
  }
}

const mapStateFromProps = state => ({
  lists: state.lists
});

export default connect(mapStateFromProps)(App);
