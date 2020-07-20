import { useState, useEffect } from "react";
import container from "../ioc/inversify.config";
import { TYPES } from "../ioc/types";
import FavoriteStore from "../services/favorite.store";

export interface FavoriteHook {
  favorites: string[],
  addFavorite: (pokemon: string) => void,
  removeFavorite: (pokemon: string) => void,
}

export default function useFavorites(): FavoriteHook {
  const favoriteStore = container.get<FavoriteStore>(TYPES.FavoriteStore);
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    setFavorites(favoriteStore.getFavorites());
  }, [favoriteStore]);

  const addFavorite = (pokemon: string) => {
    favoriteStore.add(pokemon.toLocaleLowerCase());
    setFavorites(favoriteStore.getFavorites());
  }

  const removeFavorite = (pokemon: string) => {
    favoriteStore.remove(pokemon.toLocaleLowerCase());
    setFavorites(favoriteStore.getFavorites());
  }

  return {
    favorites,
    addFavorite,
    removeFavorite
  };
}