import { useQuery } from "@tanstack/react-query";
import ms from 'ms';
import genres from "../data/genres";
import Genre from "../entities/Genre";
import APIClient from "../services/api-http";

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () => {

  return useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: genres,
  })
};

export default useGenres;
