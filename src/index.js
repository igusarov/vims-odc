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
      title: 'sun glasses',
      src: '1.jpg',
      score: 0,
      selected: true
    },
    {
      id: 2,
      title: 'kitten',
      src: '2.jpg',
      score: 0,
      selected: true
    },
    {
      id: 3,
      title: 'squirrel',
      src: '3.jpg',
      score: 0,
      selected: true
    },
    {
      id: 4,
      title: 'kittens playing',
      src: '4.jpg',
      score: 0,
      selected: true
    },
    {
      id: 5,
      title: 'owl',
      src: '5.jpg',
      score: 0,
      selected: true
    },
    {
      id: 6,
      title: 'monkeys',
      src: '6.jpg',
      score: 0,
      selected: true
    },
    {
      id: 7,
      title: 'buterfly',
      src: '7.jpg',
      score: 0,
      selected: true
    },
    {
      id: 8,
      title: 'bird',
      src: '8.jpg',
      score: 0,
      selected: true
    }
  ]
};

const store = createStore(reducer, initialState);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);