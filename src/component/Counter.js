import React from 'react';

const ErrorComponent = props => {
  if (props.error) {
    throw new Error('I made it');
  } else {
    return <h1>No error</h1>;
  }
};

class Counter extends React.Component {
  // With ES6, we can define state without a constructor
  constructor(props) {
    console.log('Constructor');
    console.log('----------------------------');

    super(props);

    this.state = {
      counter: 0
    };

    this.plusOne = () => {
      this.setState({
        counter: this.state.counter + 1
      });
    };

    this.minusOne = () => {
      this.setState({
        counter: this.state.counter - 1
      });
    };
  }

  //   state = {
  //     counter: 0
  //   };

  static getDerivedStateFromProps(props, state) {
    if (props.startNumber && props.startNumber !== state.startNumber) {
      console.log('Get Derived State From Props');
      console.log('Props: ', props);
      console.log('State: ', state);
      console.log('----------------------------');
      return {
        startNumber: props.startNumber,
        counter: props.startNumber
      };
    }
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('Get Derived State From Props');
    console.log('Previous props: ', prevProps);
    console.log('Previous state: ', prevState);
    console.log('----------------------------');
    return null;
  }

  render() {
    console.log('render');
    return (
      <div>
        <button onClick={this.plusOne}>+1</button>
        <button onClick={this.minusOne}>-1</button>
        <div>
          <h1>Counter: {this.state.counter}</h1>
        </div>
        <ErrorComponent error={true} />
      </div>
    );
  }

  componentDidMount() {
    console.log('Component Did Mount');
    console.log('-------------------');
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('Component Did Update');
    console.log('previous props: ', prevProps);
    console.log('previous state: ', prevState);
    console.log('the snapshot: ', snapshot);
    console.log('-------------------');
  }

  componentWillUnmount() {
    console.log('Component Will Unmount');
    console.log('-------------------');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('Should component update');
    console.log('Next props: ', nextProps);
    console.log('Next state', nextState);
    console.log('-------------------');
    // Condition to tell React when it is good NOT re-render
    // If the next prop has property notImportantNumber, and its value is changed.
    // Since its not important, no need to re-render
    if (
      nextProps.notImportantNumber &&
      nextProps.notImportantNumber !== this.props.notImportantNumber
    ) {
      console.log('Should component update - NO NEED TO RENDER');
      console.log('-------------------------------------------');
      return false;
    }
    console.log('Should component update - RENDER');
    console.log('-------------------------------------------');
    return true;
  }

  componentDidCatch(error, info) {
    console.log('Component Did Catch');
    console.log('Error: ', error);
    console.log('Info: ', info);
    console.log('-------------------');

    this.setState({ error, info });
  }
}

export default Counter;
