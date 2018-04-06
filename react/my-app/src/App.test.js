import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducers from './reducers';
import TestRenderer from 'react-test-renderer';
import * as assert from 'assert';

it("Should render with default value 0 for count", () => {
  const store = createStore(reducers);
  const testRenderer = TestRenderer.create(<Provider store={store}><App/></Provider>);
  const testInstance = testRenderer.root;

  assert.equal(testInstance.findByProps({className: 'count'}).children[0], 0);
})

it("Count should equal 1 after user clicking on the 'increase' button", () => {
  const store = createStore(reducers);
  const testRenderer = TestRenderer.create(<Provider store={store}><App/></Provider>);
  const testInstance = testRenderer.root;

  //Click on the 'increase' button
  const increaseButton = testInstance.findByProps({className: 'increase'});
  increaseButton.props.onClick();

  assert.equal(testInstance.findByProps({className: 'count'}).children[0], 1);
})

it("Count should equal 0 after user clicking on the 'increase' and the 'decrease' buttons", () => {
  const store = createStore(reducers);
  const testRenderer = TestRenderer.create(<Provider store={store}><App/></Provider>);
  const testInstance = testRenderer.root;

  //Click on the 'increase' button
  const increaseButton = testInstance.findByProps({className: 'increase'});
  increaseButton.props.onClick();
  
  //Click on the 'decrease' button
  const decreaseButton = testInstance.findByProps({className: 'decrease'});
  decreaseButton.props.onClick();
  
  assert.equal(testInstance.findByProps({className: 'count'}).children[0], 0);
})