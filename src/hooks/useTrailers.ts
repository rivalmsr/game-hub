import { useQuery } from "@tanstack/react-query";
import Trailer from "../entities/Trailer";
import APIClient from "../services/api-http";

const useTailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);

  return useQuery({
    queryKey: ['trailer', gameId],
    queryFn: apiClient.getAll,
  })
}

export default useTailers;
