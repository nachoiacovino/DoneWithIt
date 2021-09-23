import Listing from '../interfaces/listing';
import client from './client';

const endpoint = '/listings';

const getListings = () => client.get(endpoint);

interface addListingProps {
  listing: Listing,
  onUploadProgress: any;
}

const addListing = ({ title, price, categoryId, description, images, location }: Listing, onUploadProgress: (progress: number) => void) => {
  const data = new FormData();
  data.append("title", title);
  data.append("price", price + "");
  data.append("categoryId", categoryId + "");
  data.append("description", description);

  images.forEach((image, index) =>
    data.append("images", {
      name: ("image" + index),
      type: "image/jpeg",
      uri: image,
    })
  );

  if (location)
    data.append("location", JSON.stringify(location));

  return client.post(endpoint, data, {
    onUploadProgress: (progress) =>
      onUploadProgress(progress.loaded / progress.total),
  });
};

const listingsApi = {
  getListings,
  addListing,
};

export default listingsApi;