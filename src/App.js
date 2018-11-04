import React, { Component } from 'react';
import { streetArt } from './streetArt';

import owlGraffitti from'./images/owlGraffitti.jpg'

import './App.css';

class App extends Component {

  state = {
    openMap: false
  }

  //open/hide map
  updateMap = () => {
    const mapIsOpen = this.state.openMap;
    this.setState( { openMap : !mapIsOpen })
  }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          
          <h1 className="App-title">Welcome to Street Art</h1>
        </header>
        <p className="App-intro">
        
          some text { streetArt[1].title }
        </p>
        <div className="container">
          {
            streetArt.map(location => {
              return (
                <div
                  key={ location.id }
                  className= "photo"
                >

                  <img
                    src={ location.imageUrl}
                    alt={ location.title }
                  />

                  <p>Title: { location.title }</p>
                  <p>Category: { location.category }</p>

                </div>
                
              )
            })

          }
        </div>
        <div className="map--open">
          <p>Map</p>

        </div>
      </div>
    );
  }
}

export default App;
