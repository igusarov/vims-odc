import React from 'react';
import { mount } from 'enzyme';
import Photo from './Photo';

const setup = () => {
  const photo = {};
  const actions = {
    onLeftClick: jest.fn(),
    onRightClick: jest.fn()
  };

  const component = mount(
    <Photo {...actions} photo={photo}/>
  );

  return {
    actions: actions,
    component: component
  }
};

describe('Photo component', () => {

  it('should call onLeftClick on left button mouse click', () => {
    const {component, actions} = setup();
    component.simulate('click');
    expect(actions.onLeftClick).toBeCalled();
  });

  it('should call onRightClick on right button mouse click', () => {
    const {component, actions} = setup();
    component.simulate('contextmenu');
    expect(actions.onRightClick).toBeCalled();
  });

});

