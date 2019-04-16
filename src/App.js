import React, { Component } from 'react';
import './App.css';

import Counter from './component/Counter';

class App extends Component {
  state = {
    mount: true,
    notImportantNumber: 0,
    startNumber: 50
  };

  mountCounter = () => {
    this.setState({ mount: !this.state.mount });
  };

  ignoreProp = () => {
    this.setState({ notImportantNumber: Math.random() });
  };

  getStartNumber = () => {
    this.setState({
      startNumber: Number.parseInt(Math.random() * 100)
    });
  };
  render() {
    return (
      <div className='App'>
        <div>
          <button onClick={this.mountCounter}>
            {this.state.mount ? 'Unmount now' : 'Mount now'}
          </button>
        </div>
        <div>
          <button onClick={this.ignoreProp}>Not important</button>
        </div>
        <div>
          <button onClick={this.getStartNumber}>Get Start Number</button>
        </div>
        {this.state.mount ? (
          <Counter
            notImportantNumber={this.state.notImportantNumber}
            startNumber={this.state.startNumber}
          />
        ) : null}
      </div>
    );
  }
}

export default App;
