import React from 'react';
import { shallow } from 'enzyme';
import MoreInfoPage from '.';


describe('MoreInfoPage', () => {
  let wrapper;

  it('should match the snapshot', () => {
    wrapper = shallow(<MoreInfoPage />);

    expect(wrapper).toMatchSnapshot();
  });
});