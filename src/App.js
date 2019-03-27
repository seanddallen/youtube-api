import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'; 
import youtube from '../apis/youtube'

class App extends Component {
  
  onTermSubmit = (term) => {
    youtube.get('/search', {
      params: {
        q: term
      }
    })
  }

  render() {
    return (
      <div className="App ui container">
        <SearchBar onFormSubmit={this.onTermSubmit} />
      </div>
    );
  }
}

export default App;
