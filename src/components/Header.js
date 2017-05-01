import React, {Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      items: [1,2,3,4,5,6,7,8,9]
    };
  }

  ascId(photoA, photoB) {
    return photoA.id > photoB.id;
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
        <ul>
          {this.props.photos.sort(this.ascId).map((photo) => (
          <li key={photo.id}>
            <label>
              <input type="checkbox"
                     defaultChecked={photo.selected}
                     onChange={this.onChangePhoto.bind(this, photo)}/> {photo.title}
            </label>
          </li>
          ))}
        </ul>
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
