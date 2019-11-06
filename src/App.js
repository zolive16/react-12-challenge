import React, { Component } from 'react';
import TabSelector from './TabSelector';
import './App.css';

const Home = () => <p>This is the Home component!</p>;
const About = () => <p>This challenge is about tabs!</p>;
const Contact = () => <p>Feel free to contact us!</p>;
const Error = () => <p>Something went <strong>wrong</strong>!</p>;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: 'home'
    };
  }

  getTabContent() {
    switch(this.state.activeId) {
      case 'home':
        return <Home />;
      default:
        return <Error />;
    }
  }

  render() {
    return (
      <div className="App">
        <TabSelector />
        <div className="App-content">
          {
            this.getTabContent()
          }
        </div>
      </div>
    );
  }
}

export default App;
