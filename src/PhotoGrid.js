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
    var component = this;

    if (this.props.photos.length > 0) {
      var newState = this.props.photos.reduce(function (state, child) {
        if (!child.id) return state;
        var currentState = component.state;
        var domNode = ReactDOM.findDOMNode(component.refs[child.id]);
        var boundingBox = domNode.getBoundingClientRect();

        currentState[child.id] = boundingBox;
        //currentState.photos = component.props.photos;

        return currentState;
      });

      this.setState(newState);
    }
  }

  componentDidUpdate(previousProps) {
    if (!this.state) return;

    var component = this;
    var doNeedAnimation = [];

    previousProps.photos.forEach(function (photo) {
      if (component.doesNeedAnimation(photo) === 0) {
        doNeedAnimation.push(photo);
      }
    });

    doNeedAnimation.forEach(this.animateAndTransform.bind(this));
  }

  /*animateAndDestroy(child, n) {
    var domNode = ReactDOM.findDOMNode(this.refs[child.key]);

    requestAnimaytionFrame(function () {
      requestAnimationFrame(function () {
        domNode.style.opacity = "0";
        domNode.style.transform = "scale(2)"
      });
    });
  }*/

  animateAndTransform(child, n) {
    var domNode = ReactDOM.findDOMNode(this.refs[child.id]);

    var [dX, dY] = this.getPositionDelta(domNode, child.id);

    requestAnimationFrame(function () {
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

  doesNeedAnimation(child) {
    var isNotMovable = !child.id;
    var isNew = !this.state[child.id];
    var isDestroyed = !this.refs[child.id];

    if (isDestroyed) return 2;
    if (isNotMovable || isNew) return;

    var domNode = ReactDOM.findDOMNode(this.refs[child.id]);
    var [dX, dY] = this.getPositionDelta(domNode, child.id);
    var isStationary = dX === 0 && dY === 0;

    return (isStationary === true) ? 1 : 0;
  }

  getPositionDelta(domNode, id) {
    var newBox = domNode.getBoundingClientRect();
    var oldBox = this.state[id];

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
