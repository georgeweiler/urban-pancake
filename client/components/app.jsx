import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxPromise from 'redux-promise';
import rootReducer from '../reducers/reducers';
import {Link} from "react-router";
import Router from '../components/Router.jsx';

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

const App = () => {
  return (
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <Router />
    </Provider>
  );
}

ReactDOM.render(
  <App/>
  , document.querySelector('#app'));
export default App;
