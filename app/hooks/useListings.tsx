import { useEffect, useState } from 'react';

import listingsApi from '../api/listings';

export interface Listing {
  id: number;
  title: string;
  images: {
    url: string;
    thumbnailUrl: string;
  }[];
  price: number;
  categoryId: number;
  userId: number;
  location: {
    latitude: number;
    longitude: number;
  };
}

const useListings = (): [Listing[], boolean, () => void] => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    const res = await listingsApi.getListings();
    if (!res.ok) return setError(true);

    setError(false);
    setListings(res.data as Listing[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [listings, error, fetchData];
};

export default useListings;
