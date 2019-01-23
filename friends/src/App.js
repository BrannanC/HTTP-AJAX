import React, { Component } from 'react';

import FriendsList from './components/FriendsList';
import './App.css';
import './components/Friends.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Friends List</h1>
          <FriendsList />
        </header>
      </div>
    );
  }
}

export default App;
