export const fetchLocationFromAddress = async (url) => {
  const response = await fetch(url)
  if(!response.ok) {
    throw Error('Sorry we were not able to find that.')
  }
  const results = await response.json();
  return results
}