import { useQuery } from "@tanstack/react-query";
import genres from "../data/genres";
import apiHttp from "../services/api-http";
import { FetchResponse } from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => {
  const fetchGenres = () => apiHttp.get<FetchResponse<Genre>>('/genres').then(res => res.data);

  return useQuery({
    queryKey: ['genres'],
    queryFn: fetchGenres,
    staleTime: 24 * 60 * 60 * 1000, //24hr
    initialData: { count: genres.length, results: genres }
  })
};

export default useGenres;
