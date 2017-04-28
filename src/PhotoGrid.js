import React, {Component} from 'react';
import './PhotoGrid.css';
import Photo from './Photo';

class PhotoGrid extends Component {
  constructor() {
    super();
    this.state = {
      items: [1,2,3,4,5,6,7,8,9]
    };
  }

  render() {
    return (
      <div className="photo-grid">
        {this.state.items.map((item) => (
        <div className="photo-grid__item">
          <Photo/>
        </div>
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
