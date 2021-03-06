import { useEffect, useState } from 'react';

import listingsApi from '../api/listings';
import Listing from '../interfaces/listing';

const useListings = (): [Listing[], boolean, boolean, () => void] => {
  const [listings, setListings] = useState<Listing[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    setLoading(true);
    const res = await listingsApi.getListings();
    setLoading(false);
    if (!res.ok) return setError(true);

    setError(false);
    setListings(res.data as Listing[]);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [listings, loading, error, fetchData];
};

export default useListings;
