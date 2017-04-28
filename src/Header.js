import React, {Component} from 'react';

class Header extends Component {

  constructor() {
    super();
    this.state = {
      items: [1,2,3,4,5,6,7,8,9]
    };
  }

  render() {
    return (
      <div className="header">
        <ul>
          {this.state.items.map((item) => (
          <li>
            <label>
              <input type="checkbox"/> photo 1
            </label>
          </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Header;
