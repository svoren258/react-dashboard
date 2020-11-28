import { useState, useEffect } from 'react';

const useFetch = <T>(url: string): [T | null, boolean, boolean] => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const setErrorState = (error: Error) => {
    setHasError(true);
    setLoading(false);
    console.error('Something went wrong during data fetching', error);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      try {
        const data = await response.json();
        setResponse(data as T);
        setLoading(false);
      } catch (error) {
        setErrorState(error);
      }
    } catch (error) {
      setErrorState(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [url]);
  return [response, loading, hasError];
};

export default useFetch;
