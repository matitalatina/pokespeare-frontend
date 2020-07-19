import { injectable } from "inversify";
import { uniq } from 'lodash';

@injectable()
export default class FavoriteStore {
  favoriteKey = 'pokespeare.favorite';

  getFavorites(): string[] {
    const favorites = localStorage.getItem(this.favoriteKey);
    if (!favorites) {
      return [];
    }
    return favorites.split(',');
  }

  add(pokemon: string) {
    const favorites = uniq([
      ...this.getFavorites(),
      pokemon.toLocaleLowerCase(),
    ]);
    this.persist(favorites);
  }

  remove(pokemon: string) {
    const pokeLower = pokemon.toLocaleLowerCase();
    this.persist(this.getFavorites().filter(p => p !== pokeLower));
  }

  private persist(favorites: string[]): void {
    localStorage.setItem(this.favoriteKey, favorites.join(','));
  }
}