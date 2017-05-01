import React, {Component} from 'react';
import Photo from '../components/Photo';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class PhotoContainer extends Component {

  onLeftClick(photo) {
    this.props.actions.increasePhotoScore(photo);
  }

  onRightClick(photo) {
    this.props.actions.decreasePhotoScore(photo);
  }

  render() {
    return (
      <Photo photo={this.props.photo}
             onLeftClick={this.onLeftClick.bind(this)}
             onRightClick={this.onRightClick.bind(this)}/>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(()=>({}),mapDispatchToProps)(PhotoContainer);
