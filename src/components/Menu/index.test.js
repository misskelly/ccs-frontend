import React from 'react';
import { shallow } from 'enzyme';
import Menu from '.';


describe('Menu', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Menu />);

    expect(wrapper).toMatchSnapshot();
  });
});