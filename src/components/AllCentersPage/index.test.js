import React from 'react';
import { shallow } from 'enzyme';
import AllCentersPage from '.';


describe('AllCentersPage', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<AllCentersPage />);

    expect(wrapper).toMatchSnapshot();
  });
});