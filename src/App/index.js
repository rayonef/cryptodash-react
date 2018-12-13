import React, { Component } from 'react';
import './App.css';
import Welcome from './WelcomeMessage';
import AppLayout from './AppLayout';

class App extends Component {
  render() {
    return (
      <AppLayout>
        <Welcome />
      </AppLayout>
    );
  }
}

export default App;
