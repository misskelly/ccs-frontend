import React from 'react';
import { shallow } from 'enzyme';
import MapPage from '.';


describe('MapPage', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<MapPage />);

    expect(wrapper).toMatchSnapshot();
  });
});