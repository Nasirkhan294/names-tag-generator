import React, { Component } from 'react';
import NameTagList from './components/NameTagList'
import './App.css';
import UserInput from './components/UserInput';



class App extends Component {
  state = {
    names: []
  };

  removeName = (clickedIndex) => {
    const filterCallback = (_, index) => index !== clickedIndex;
    const newNames = this.state.names.filter(filterCallback);
    this.setState({names: newNames})
  }

  addName = (name) => {
    const newNames = [name, ...this.state.names];
    this.setState({ names: newNames })
  }
  
  componentDidUpdate() {
    const savedNamesString = JSON.stringify(this.state.names);
    localStorage.setItem('savedNames', savedNamesString);
  }

  componentDidMount() {

    const savedNamesString = localStorage.getItem('savedNames');

    if (savedNamesString) {
      const savedNames = JSON.parse(savedNamesString);
      this.setState({ names: savedNames});
    }
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <h1>Name Tag Generator:</h1>
          <UserInput addName={this.addName} />
          <NameTagList names={this.state.names} removeName={this.removeName} />
        </header>
      </div>
    )
  }
}

export default App;
