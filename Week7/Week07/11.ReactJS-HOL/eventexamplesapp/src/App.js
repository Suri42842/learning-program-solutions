 import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 5,
      amount: '',
      currency: ''
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
    this.sayHello();
  };

  sayHello = () => {
    alert('Hello! Member1');
  };

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  };

  sayWelcome = (msg) => {
    alert(msg);
  };

  handleClick = (event) => {
    alert('I was clicked');
  };

  handleAmountChange = (e) => {
    this.setState({ amount: e.target.value });
  };

  handleCurrencyChange = (e) => {
    this.setState({ currency: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { amount, currency } = this.state;
    if (currency.toLowerCase() === 'euro') {
      const converted = amount * 80;
      alert(`Converting to Euro Amount is ${converted}`);
    } else {
      alert('Currency not supported!');
    }
  };

  render() {
    return (
      <div className="App">
        <p>{this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <br /><br />
        <button onClick={() => this.sayWelcome("welcome")}>Say welcome</button>
        <br /><br />
        <button onClick={this.handleClick}>Click on me</button>

        <h1 style={{ color: 'green' }}>Currency Convertor!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <label>
            Amount: <input type="text" value={this.state.amount} onChange={this.handleAmountChange} />
          </label>
          <br /><br />
          <label>
            Currency: <textarea value={this.state.currency} onChange={this.handleCurrencyChange}></textarea>
          </label>
          <br /><br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default App;
