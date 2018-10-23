import React, { Component } from 'react';
import { Header } from './component/header';
import { Home } from './component/home';

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Header linkName="AMRITHA MAI" />
        <Home age={3}/>
      </div>
    );
  }
}
