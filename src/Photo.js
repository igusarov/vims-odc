import React, {Component} from 'react';
import './Photo.css';
import * as actions from './actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Photo extends Component {

  onLeftClick() {
    this.props.actions.increasePhotoScore(this.props.photo);
  }

  onRightClick(e) {
    e.preventDefault();
    this.props.actions.decreasePhotoScore(this.props.photo);
  }

  render() {
    return (
      <div className="photo"
           onClick={this.onLeftClick.bind(this)}
           onContextMenu={this.onRightClick.bind(this)}>
        <div className="photo__score photo__score--down">
          {this.props.photo.score}
        </div>
        <img src="1.jpg" alt="" className="photo__img"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(()=>({}),mapDispatchToProps)(Photo);
