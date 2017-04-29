import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import reducer from './reducers';

const initialState = {
  photos: [
    {
      id: 1,
      title: 'hello world',
      src: '1.jpg',
      score: -1,
      selected: true
    },
    {
      id: 2,
      title: 'hello world',
      src: '1.jpg',
      score: 3,
      selected: true
    },
    {
      id: 3,
      title: 'hello world',
      src: '1.jpg',
      score: 5,
      selected: true
    },
    {
      id: 4,
      title: 'hello world',
      src: '1.jpg',
      score: 0,
      selected: true
    },
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);