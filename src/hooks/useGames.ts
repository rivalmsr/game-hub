import { useInfiniteQuery } from "@tanstack/react-query";
import ms from 'ms';
import APIClient from "../services/api-http";
import { FetchResponse } from "../services/api-http";
import { GameQuery } from "../store";
import { Platform } from "./usePlatforms";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description_raw: string;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (gameQuery: GameQuery) => {

  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({ pageParam }) => apiClient.getAll({
      params: {
        page: pageParam,
        genres: gameQuery.genreId,
        platforms: gameQuery.platformId,
        ordering: gameQuery.sortOrder,
        search: gameQuery.searchText,
      }
    }),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
  })
}

export default useGames;
