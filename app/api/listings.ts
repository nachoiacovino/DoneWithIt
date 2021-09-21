import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

const listingsApi = {
  getListings
};

export default listingsApi;