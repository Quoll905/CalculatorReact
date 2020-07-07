import React from 'react';
import './App.css';

import Display from './components/display';
import ButtonContainer from './components/buttonContainer';

class App extends React.Component {
  state = {
    result: "",
  };

  calculate = () => {
    this.setState({
      result: (eval(this.state.result) || "") + "",
    });
  };

  reset = () => {
    this.setState({
      result: "",
    });
  };

  onClick = (button) => {
    if (button === "=") {
      this.calculate();
    } else if (button === "C") {
      this.reset();
    }  else {
      this.setState({
        result: this.state.result + button,
      });
    }
  };

  render() {
    return (
      <div className="App">
        <div className="container">
          <Display result={this.state.result} />
          <ButtonContainer onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default App;
