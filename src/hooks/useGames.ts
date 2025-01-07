import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiHttp from "../services/api-http";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface FetchGameResponse {
  count: number;
  results: Game[];
}

function useGames() {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('');
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const controller = new AbortController();

    setLoading(true);

    apiHttp.get<FetchGameResponse>('/games', { signal: controller.signal })
      .then(res => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch(err => {
        if (err instanceof CanceledError) return;

        setError(err.message);
        setLoading(false);
      });

    return () => controller.abort();
  }, [])

  return { games, error, loading };
}

export default useGames;
