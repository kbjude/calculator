/* eslint-disable react/no-unused-state */
import './App.css';
import React, { Component } from 'react';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
      next: null,
      operation: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(buttonName) {
    const newState = () => calculate(buttonName, { ...this.state });
    this.setState(newState);
  }

  render() {
    const { total, next } = this.state;
    return (
      <Switch className="app">
        <Display result={next || total || '0'} className="display" />
        <ButtonPanel clickHandler={this.handleClick} className="button-panel" />
      </Switch>
    );
  }
}
