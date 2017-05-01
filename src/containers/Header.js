import React, {Component} from 'react';
import PhotoCheckboxes from '../components/PhotoCheckboxes';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class Header extends Component {

  ascId(photoA, photoB) {
    return photoA.id > photoB.id ? 1 : -1;
  }

  onChangePhoto(photo) {
    if(photo.selected){
      this.props.actions.deselectPhoto(photo);
    } else {
      this.props.actions.selectPhoto(photo);
    }
  }

  render() {
    return (
      <div className="header">
        <PhotoCheckboxes photos={this.props.photos.sort(this.ascId)}
                         onChangePhoto={this.onChangePhoto.bind(this)}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  photos: state.photos
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps,mapDispatchToProps)(Header);
