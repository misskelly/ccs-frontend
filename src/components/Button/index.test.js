
import React from 'react';
import { shallow } from 'enzyme';
import Button from '.';


describe('Button', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Button />);

    expect(wrapper).toMatchSnapshot();
  });
});