import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import actions from './actions'

class AppComponent extends Component {

  constructor(props) {
    super(props);
    this.state = {};
    this.increase = this.increase.bind(this);
  }

  increase() {
    this.props.increase()
  }

  render() {
    return (
      <div className="App">
        <button className="decrease" onClick={this.props.decrease}>Decrease</button>
        <span className="count">{this.props.count}</span>
        <button className="increase" onClick={this.increase}>Increase</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({count: state.count});

const mapDispatchToProps = dispatch => ({
  decrease: () => dispatch(actions.decrease()),
  increase: () => dispatch(actions.increase())
});

const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(AppComponent);

export default App;
