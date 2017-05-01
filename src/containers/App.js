import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <div className="app__main">
          <Main/>
        </div>
      </div>
    );
  }
}
export default App;
