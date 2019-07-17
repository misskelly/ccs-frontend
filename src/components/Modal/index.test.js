import React from 'react';
import { shallow } from 'enzyme';
import Modal from '.';


describe('Modal', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<Modal />);

    expect(wrapper).toMatchSnapshot();
  });
});