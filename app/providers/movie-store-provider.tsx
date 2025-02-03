"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";
import { type MovieStore, createMovieStore } from "../stores/movie-store";

export type MovieStoreApi = ReturnType<typeof createMovieStore>;

export const MovieStoreContext = createContext<MovieStoreApi | undefined>(
  undefined
);

export interface MovieStoreProviderProps {
  children: ReactNode;
}

export const MovieStoreProvider = ({ children }: MovieStoreProviderProps) => {
  const storeRef = useRef<MovieStoreApi>(null);
  if (!storeRef.current) {
    storeRef.current = createMovieStore();
  }

  return (
    <MovieStoreContext.Provider value={storeRef.current}>
      {children}
    </MovieStoreContext.Provider>
  );
};

export const useMovieStore = <T,>(selector: (store: MovieStore) => T): T => {
  const movieStoreContext = useContext(MovieStoreContext);
  if (!movieStoreContext) {
    throw new Error(`useMovieStore must be used within MovieStoreProvider`);
  }

  return useStore(movieStoreContext, selector);
};
