import { create } from 'zustand'

export interface GameQuery {
  genreId?: number;
  platformId?: number;
  sortOrder?: string;
  searchText?: string;
  page?: number;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
  setSortOrder: (sortOrder: string) => void;
  setPage: (page: number) => void;
}

const useGameQueryStore = create<GameQueryStore>(set => ({
  gameQuery: {} as GameQuery,
  setSearchText: (searchText: string) => set(() => ({ gameQuery: { searchText } })),
  setGenreId: (genreId: number) => set((s) => ({ gameQuery: { ...s.gameQuery, genreId } })),
  setPlatformId: (platformId: number) => set((s) => ({ gameQuery: { ...s.gameQuery, platformId } })),
  setSortOrder: (sortOrder: string) => set((s) => ({ gameQuery: { ...s.gameQuery, sortOrder } })),
  setPage: (page: number) => set((s) => ({ gameQuery: { ...s.gameQuery, page } })),
}));

export default useGameQueryStore;
