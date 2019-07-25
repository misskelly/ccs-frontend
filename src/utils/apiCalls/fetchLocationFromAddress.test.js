import { fetchLocationFromAddress } from './fetchLocationFromAddress';

describe('fetchLocationFromAddress', () => {
  let mockLocationsResponse;
  let mockUrl;

  beforeEach(() => {
    mockUrl = 'https://cohelp-backend.herokuapp.com/api/v1/locations/sort?lat=39.7504&lng=-104.9963';

    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: true,
      json: () => Promise.resolve()
    }));
  });

  it('should be called with the correct params', () => {
    const expected = mockUrl;
    fetchLocationFromAddress(mockUrl);
    expect(window.fetch).toHaveBeenCalledWith(expected);
  });

  it('should return an error if the status is not okay', async () => {
    window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
      ok: false
    }));
    await expect(fetchLocationFromAddress()).rejects.toEqual(Error('Sorry we were not able to find that.'));
  });
});
