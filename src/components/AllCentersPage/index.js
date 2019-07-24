import React from 'react';
import Center from '../CenterInfo';
import centerInfo from '../../utils/centerExtras';


export const AllCentersPage = () => {
  const centers = centerInfo.map(center => (
    <Center
      city={center.city}
      name={center.name}
      website={center.website}
      logo={center.logo}
    />
  ));
  return (
    <main className="all-centers">
    {centers}
  </main>
  );
};
// TODO: Fetch all centers
// TODO: map with passed props
// TODO: get logos/links for centers

export default AllCentersPage;
