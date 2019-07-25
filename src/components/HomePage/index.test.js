import React from 'react';
import { shallow } from 'enzyme';
import HomePage from '.';


describe('HomePage', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<HomePage />);

    expect(wrapper).toMatchSnapshot();
  });
});