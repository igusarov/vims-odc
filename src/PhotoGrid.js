import React, {Component} from 'react';
import './PhotoGrid.css';
import Photo from './Photo';
import ReactDOM from 'react-dom';

class PhotoGrid extends Component {

  constructor() {
    super();
    this.state = {};
  }

  componentWillReceiveProps() {
    if (this.props.photos.length > 0) {
      let newState = this.props.photos.reduce((state, photo) => {
        let domNode = ReactDOM.findDOMNode(this.refs[photo.id]);
        let boundingBox = domNode.getBoundingClientRect();

        state[photo.id] = boundingBox;

        return state;
      }, {});

      this.setState(newState);
    }
  }

  componentDidUpdate(previousProps) {
    let doNeedAnimation = [];
    let photoIds = this.props.photos.map((photo) => photo.id);

    previousProps.photos.forEach((photo) => {
      if (photoIds.includes(photo.id) && this.doesNeedAnimation(photo)) {
        doNeedAnimation.push(photo);
      }
    });

    doNeedAnimation.forEach(this.animateAndTransform.bind(this));
  }

  animateAndTransform(photo) {
    let domNode = ReactDOM.findDOMNode(this.refs[photo.id]);

    let [dX, dY] = this.getPositionDelta(domNode, photo.id);

    requestAnimationFrame(() => {
      domNode.style.transition = 'transform 0s';
      domNode.style.transform = 'translate(' + dX + 'px, ' + dY + 'px)';
      domNode.style.zIndex = '1000';
      requestAnimationFrame(function () {
        domNode.style.transform = '';
        domNode.style.transition = 'transform 400ms';
        domNode.style.zIndex = '0';
      })
    });
  }

  doesNeedAnimation(photo) {
    let domNode = ReactDOM.findDOMNode(this.refs[photo.id]);
    let [dX, dY] = this.getPositionDelta(domNode, photo.id);
    let isStationary = dX === 0 && dY === 0;

    return !isStationary;
  }

  getPositionDelta(domNode, id) {
    let newBox = domNode.getBoundingClientRect();
    let oldBox = this.state[id];

    return [
      oldBox.left - newBox.left,
      oldBox.top - newBox.top
    ];
  }

  render() {
    return (
      <div className="photo-grid">
        {this.props.photos.map((photo) => (
          <div className="photo-grid__item" ref={photo.id} key={photo.id}>
            <Photo photo={photo}/>
          </div>
        ))}
      </div>
    );
  }
}

export default PhotoGrid;
