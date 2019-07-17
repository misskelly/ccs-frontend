
import React from 'react';
import { shallow } from 'enzyme';
import CenterInfo from '.';


describe('CenterInfo', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<CenterInfo />);

    expect(wrapper).toMatchSnapshot();
  });
});