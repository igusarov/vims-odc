import React, {Component} from 'react';
import './Photo.css';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import classNames from 'classnames';

class Photo extends Component {

  onLeftClick() {
    this.props.actions.increasePhotoScore(this.props.photo);
  }

  onRightClick(e) {
    e.preventDefault();
    this.props.actions.decreasePhotoScore(this.props.photo);
  }

  render() {
    let photoScoreClassNames = classNames({
      'photo__score': true,
      'photo__score--down': this.props.photo.score < 0,
      'photo__score--up': this.props.photo.score >= 0,
    });

    return (
      <div className="photo"
           onClick={this.onLeftClick.bind(this)}
           onContextMenu={this.onRightClick.bind(this)}>
        <div className={photoScoreClassNames}>
          {this.props.photo.score}
        </div>
        <img src={this.props.photo.src}
             alt={this.props.photo.title}
             className="photo__img"/>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(()=>({}),mapDispatchToProps)(Photo);
