import { useQuery } from "@tanstack/react-query";
import Screenshot from "../entities/Screenshot";
import APIClient from "../services/api-http";

const useScreenshots = (gameId: number) => {
  const apiClient = new APIClient<Screenshot>(`/games/${gameId}/screenshots`)
  return useQuery({
    queryKey: ['screenshots'],
    queryFn: apiClient.getAll,
  })
}

export default useScreenshots;

