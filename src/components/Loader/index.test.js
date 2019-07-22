import React from 'react';
import { Loader } from './index';
import { shallow } from 'enzyme';

describe('Loader', () => {
  let wrapper;

  it('should match snapshot', () => {
    wrapper = shallow (
      <Loader />
    )
    expect(wrapper).toMatchSnapshot();
  });
});