export const fetchLocationsCall = (url) => {
  return fetch(url)
  .then(response => {
    if(!response.ok) {
      throw Error('Error fetching locations')
    } else {
      return response.json();
    }
  })
}