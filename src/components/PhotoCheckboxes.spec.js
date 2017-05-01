import React from 'react';
import {mount} from 'enzyme';
import PhotoCheckboxes from './PhotoCheckboxes';

const setup = () => {
  const photos = [{id: 1}];
  const actions = {
    onChangePhoto: jest.fn()
  };

  const component = mount(
    <PhotoCheckboxes {...actions} photos={photos}/>
  );

  return {
    actions: actions,
    checkbox: component.find('input')
  }
};

describe('PhotoCheckboxes component', () => {

  it('should call onChangePhoto when one of checkboxes is changed', () => {
    const {checkbox, actions} = setup();
    checkbox.simulate('change');
    expect(actions.onChangePhoto).toBeCalled();
  });

});

