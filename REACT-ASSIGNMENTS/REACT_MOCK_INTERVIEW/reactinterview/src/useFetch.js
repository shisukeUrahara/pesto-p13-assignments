import { useState, useEffect } from "react";

const useFetch = (url, dependencies = []) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    console.log("**@ useFetch hook called");
    const fetchData = async () => {
      console.log("**@ fetch data called");
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setData(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, dependencies); // Dependencies array allows the hook to be reused for different fetch calls

  return { data, isLoading, error };
};

export default useFetch;
