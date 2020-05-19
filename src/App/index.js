import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware} from 'redux'
import reducer from '../reducers/index'
import thunkMiddleware from 'redux-thunk'
import { ConnectedRouter } from "react-router-redux"

const store = createStore(
  reducer, applyMiddleware(thunkMiddleware)
)

class App extends React.Component {

      render() {
      return (
        <Provider store={store}>
              <Routes />
        </Provider>
      )
    }
  }
export default App;
