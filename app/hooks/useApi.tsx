import { useEffect, useState } from 'react';

function useApi<T>(apiFn: any): [T, boolean, boolean, () => void] {
  const [data, setData] = useState<T>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async (...args: any[]) => {
    setLoading(true);
    const res = await apiFn(...args);
    setLoading(false);
    if (!res.ok) return setError(true);

    setError(false);
    setData(res.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [data, loading, error, fetchData];
}

export default useApi;
