import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from "@testing-library/react";
import combineReducers from '../reducers/index'

const renderWithRedux = (ui, state) => {
  const store = createStore(combineReducers, state);
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
};

export default renderWithRedux;

