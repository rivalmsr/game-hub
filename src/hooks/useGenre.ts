import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiHttp from "../services/api-http";

interface Genre {
  id: number;
  name: string;
}

interface FetchGenreResponse {
  count: number;
  results: Genre[];
}

function useGenres() {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiHttp.get<FetchGenreResponse>('/genres', { signal: controller.signal })
      .then(res => {
        setGenres(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [])

  return { genres, error, loading };
}

export default useGenres;
