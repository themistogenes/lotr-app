import { useState, useEffect } from "react"

export default function useFetchData(selection) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const apiUrl = 'https://the-one-api.dev/v2';
  const APITOKEN = import.meta.env.API_KEY;

  const headers = {
    'Accept': 'application/json',
    'Authorization': `Bearer ${APITOKEN}`
  }

  useEffect(() => {
    if (!selection) {
      return;
    }
    
    async function fetchData() {
      const url = apiUrl + '/' + 'book';
      try {
        const res = await fetch(url, {headers: headers});
        const jsonData = await res.json();
        console.log('DATA: ', jsonData);
        setData(data);
      } catch (err) {
        setError(err.message);      
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [selection])

  return {data, error, loading}
}
