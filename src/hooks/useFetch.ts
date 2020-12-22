import { useState, useEffect, MutableRefObject } from 'react';

const useFetch = <T>(props: { isMountedRef: MutableRefObject<boolean>; url: string }): [T | null, boolean, boolean] => {
  const [response, setResponse] = useState<T | null>(null);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { isMountedRef, url } = props;
  const setErrorState = (error: Error) => {
    if (isMountedRef.current) {
      setHasError(true);
      setLoading(false);
    }
    console.error('Something went wrong during data fetching', error);
  };

  const fetchData = async () => {
    if (isMountedRef.current) {
      setLoading(true);
    }
    try {
      const response = await fetch(props.url);
      try {
        const data = await response.json();
        if (isMountedRef.current) {
          setResponse(data as T);
          setLoading(false);
        }
      } catch (error) {
        setErrorState(error);
      }
    } catch (error) {
      setErrorState(error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      isMountedRef.current = false;
    };
  }, [url, isMountedRef]);
  return [response, loading, hasError];
};

export default useFetch;
