import React, {Component} from 'react';
import { connect } from 'react-redux';
import PhotoGrid from '../components/PhotoGrid';

class Main extends Component {

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
        <PhotoGrid photos={this.props.photos.filter(this.selected).sort(this.ascId).sort(this.descScore)}/>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  actions: []
});

export default connect(mapStateToProps,mapDispatchToProps)(Main);
