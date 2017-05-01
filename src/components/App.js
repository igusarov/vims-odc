import React, {Component} from 'react';
import './App.css';
import Header from './Header';
import PhotoGrid from './PhotoGrid';
import { connect } from 'react-redux';

class App extends Component {

  selected(photo) {
    return photo.selected;
  }

  ascId(photoA, photoB) {
    return photoA.id > photoB.id ? 1 : -1;
  }

  descScore(photoA, photoB) {
    return photoA.score < photoB.score ? 1 : -1;
  }

  render() {
    return (
      <div className="app">
        <div className="app__header">
          <Header/>
        </div>
        <div className="app__main">
          <PhotoGrid photos={this.props.photos.filter(this.selected).sort(this.ascId).sort(this.descScore)}/>
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
