import React, {Component} from 'react';
import './Photo.css';

class Photo extends Component {
  render() {
    return (
      <div className="photo">
        <div className="photo__score photo__score--down">
          12
        </div>
        <img src="1.jpg" alt="" className="photo__img"/>
      </div>
    );
  }
}

export default Photo;
