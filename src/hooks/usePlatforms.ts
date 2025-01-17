import { useQuery } from "@tanstack/react-query";
import platforms from "../data/platforms";
import apiHttp from "../services/api-http";
import { FetchResponse } from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const usePlatforms = () => {
  const fetchPlatforms = () => apiHttp.get<FetchResponse<Platform>>('/platforms/lists/parents').then(res => res.data);

  return useQuery({
    queryKey: ['platforms'],
    queryFn: fetchPlatforms,
    staleTime: 24 * 60 * 60 * 1000,
    initialData: { count: platforms.length, results: platforms },
  })
}

export default usePlatforms;
