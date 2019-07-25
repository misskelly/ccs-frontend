/* eslint-disable import/prefer-default-export */
export const fetchLocationsCall = async (url) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw Error('Error fetching locations');
  }
  const results = await response.json();
  return results;
};
