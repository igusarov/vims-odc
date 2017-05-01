import React, {Component} from 'react';

class PhotoCheckboxes extends Component {

  onChangePhoto(photo) {
    this.props.onChangePhoto(photo);
  }

  render() {
    return (
        <ul>
          {this.props.photos.map((photo) => (
          <li key={photo.id}>
            <label>
              <input type="checkbox"
                     defaultChecked={photo.selected}
                     onChange={this.onChangePhoto.bind(this, photo)}/> {photo.title}
            </label>
          </li>
          ))}
        </ul>
    );
  }
}

export default PhotoCheckboxes;
