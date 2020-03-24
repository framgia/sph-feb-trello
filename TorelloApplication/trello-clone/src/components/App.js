import React from 'react';
import TrelloList from './TrelloList.js';

class App extends React.Component{

  render(){
    return (
      <div className="App">
        <h2>Trello Clone</h2>
        <TrelloList title="test" />
      </div>
    )
  }
}

export default App;
