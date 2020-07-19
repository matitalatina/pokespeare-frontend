import FavoriteStore from "./favorite.store";

describe('FavoriteStore', () => {
  let store: FavoriteStore;
  beforeEach(() => {
    store = new FavoriteStore();
    localStorage.removeItem(store.favoriteKey);
  });

  it('should be defined', () => {
    expect(store).toBeDefined();
  });

  it('should return empty list if nothing is stored', () => {
    expect(store.getFavorites()).toEqual([]);
  });

  it('should get from localstorage', () => {
    localStorage.setItem(store.favoriteKey, 'pikachu,charizard');
    expect(store.getFavorites()).toEqual([
      'pikachu',
      'charizard',
    ]);
  });

  it('should add pokemon one time', () => {
    store.add('Pikachu');
    store.add('pikachu');
    expect(store.getFavorites()).toEqual(['pikachu']);
  });

  it('should remove pokemon', () => {
    const pokemon = 'pikachu';
    store.add(pokemon);
    expect(store.getFavorites()).toEqual([pokemon]);
    store.remove(pokemon);
    store.remove('PiKachu');
    expect(store.getFavorites()).toEqual([]);
  });
});