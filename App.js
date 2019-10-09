import React, { Component } from 'react';
// import { Provider } from 'react-redux'
// import { createStore } from 'redux'

import APP from './app/App'
// import rootReducer from './reducers'

// const store = createStore(rootReducer);

export default class App extends Component {
  render() {
    return (
      // <Provider store={store}>

      <APP />

      // </Provider>
    );
  }
}