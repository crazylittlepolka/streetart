import React, { Component } from 'react';
import { streetArt } from './streetArt';
import owlGraffitti from'./images/owlGraffitti.jpg'
import './App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Street Art</h1>
        </header>
        <p className="App-intro">
        
          some text { streetArt[1].title }
        </p>
        <img style={{width: 200, height: 200, backgroundImage: `${streetArt[1].imageUrl}`}}  alt=""/>
      </div>
    );
  }
}

export default App;
