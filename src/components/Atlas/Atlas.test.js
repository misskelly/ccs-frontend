import React from 'react';
import { shallow } from 'enzyme';
import Atlas from '.';


describe('Atlas', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Atlas />);

    expect(wrapper).toMatchSnapshot();
  });
});