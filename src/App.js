import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import { connect } from 'react-redux';

class App extends Component {

  selected(photo) {
    return photo.selected;
  }

  descScore(photoA, photoB) {
    return photoA.score < photoB.score;
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <div className="app__main">
          <PhotoGrid photos={this.props.photos.filter(this.selected).sort(this.descScore)}/>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  actions: []
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
