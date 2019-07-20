import { fetchLocationsCall } from './fetchLocationsCall';

describe('fetchLocationsCall', () => {
  let mockLocationsResponse;
  let mockUrl;

  beforeEach(() => {
    mockUrl = 'https://cohelp-backend.herokuapp.com/api/v1/locations/sort?lat=39.7504&lng=-104.9963';
    mockLocationsResponse = {
      city: "Denver",
      id: 4,
      lat: 39.7403,
      lng: -104.9363,
      meters: 5979,
      miles: 3.7,
      minutes: 15,
      name: "Mental Health Center of Denver",
      office_hours: "24/7",
      phone: 3035041299,
      seconds: 878,
      state: "CO",
      street: "4353 E Colfax Ave",
      zip: 80220
    }

    window.fetch=jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok:true,
        json: () => Promise.resolve(
          mockLocationsResponse
        )
      })
    })
  })

  it('should be called with the correct params', () => {
    const expected = mockUrl;
    fetchLocationsCall(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(expected)
  });

  it('should return a response if the status is okay', async () => {
    const result = await fetchLocationsCall()
    expect(result).toEqual(mockLocationsResponse)
  });

  it('should return an error if the status is not okay', async () => {
    window.fetch=jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    })
    await expect(fetchLocationsCall()).rejects.toEqual(Error('Error fetching locations'))
  });
})
