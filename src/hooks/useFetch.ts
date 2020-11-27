import { useState, useEffect } from 'react';

const useFetch = <T>(url: string): [T | null, boolean, boolean] => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        res
          .json()
          .then((data) => {
            setResponse(data as T);
            setLoading(false);
          })
          .catch((e) => {
            setHasError(true);
            setLoading(false);
            console.error('Something went wrong during data fetching', e);
          });
      })
      .catch((e) => {
        setHasError(true);
        setLoading(false);
        console.error('Something went wrong during data fetching', e);
      });
  }, [url]);
  return [response, loading, hasError];
};

export default useFetch;
