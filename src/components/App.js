/* eslint-disable react/no-unused-state */
import './App.css';
import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import ButtonPanel from './ButtonPanel';
import Display from './Display';
import calculate from '../logic/calculate';
import Home from './Home';
import Quote from './Quote';
import Navbar from './Navbar';

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
        <Navbar />
        <Route path="/" component={Home} />
        <Route path="/Quote" component={Quote} />
        <Route component={Error} />
        <Display result={next || total || '0'} className="display" />
        <ButtonPanel clickHandler={this.handleClick} className="button-panel" />
      </Switch>
    );
  }
}
