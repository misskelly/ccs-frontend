import React from 'react';
import { shallow } from 'enzyme';
import Atlas from '.';


describe('Atlas', () => {
  let wrapper;
  let mockClosestLocation = {
    city: "Denver",
    id: 4,
    lat: 39.7403,
    lng: -104.9363,
    logo: "https://github.com/CSheesley/ccs-frontend/blob/all-centers-pg/src/assets/images/center-logos/mhcd.jpg?raw=true",
    meters: 6026,
    miles: 3.7,
    minutes: 15,
    name: "Mental Health Center of Denver",
    office_hours: "24/7",
    phone: 3035041299,
    seconds: 899,
    state: "CO",
    street: "4353 E Colfax Ave",
    website: "https://mhcd.org/suicide-prevention/",
    zip: 80220
  }

  it('should match the snapshot', () => {
    wrapper = shallow(<Atlas closestLocation={mockClosestLocation}/>);

    expect(wrapper).toMatchSnapshot();
  });
});