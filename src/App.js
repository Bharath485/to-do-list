import React, { Component } from 'react';
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='App'>
      <header>
        <form id='to-do-list'>
          <input type="text" placeholder='Enter Text'/>
          <button type='submit'>Add</button>
        </form>
      </header>
      </div>
    );
  }
}

export default App;
