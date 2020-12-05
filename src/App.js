import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';

export default class App extends Component {
  
  state = {
    folders: [],
    notes: [],
  }

  render() {
    return (
      <div className="App">
        <h1>Noteful</h1>


      </div>
    )
  }
}
