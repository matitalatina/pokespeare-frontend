import React, { useState } from 'react';
import styled from 'styled-components';
import Button from '../atoms/Button';
import Input from '../atoms/Input';
import Link from '../atoms/Link';
import Logo from '../atoms/Logo';
import ParticlesBackground from '../atoms/ParticlesBackground';
import Small from '../atoms/Small';
import PageTemplate from '../templates/PageTemplate';
import useDownloadPokemon from '../../hooks/dowloadPokemon.hook';
import ShowPokemon from '../molecules/ShowPokemon';
import useFavorites from '../../hooks/favorites.hook';
import Favorites from '../molecules/Favorites';
import theme from '../../themes/default';

const SpacedInput = styled(Input)`
  margin: 32px 0;
  width: 100%;
`;

const SpacedButton = styled(Button)`
  margin: 0 0 16px 0;
`;

const LimitWidth = styled.div`
  max-width: 600px;
  width: 100%;
  padding: 0 32px;
  box-sizing: border-box;
  display: flex;
  flex-flow: column;
  align-items: center;

  @media screen and (max-width: 600px) {
    min-width: 250px;
    font-size: ${theme.fonts.sizes.normal};
  }
`;

const PokePage = () => {
  const [pokemonInput, setPokemonInput] = useState('');
  const { downloadedPokemon, fetchPokemon } = useDownloadPokemon();
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isPokemonInFavorites = downloadedPokemon.response?.name && favorites.includes(downloadedPokemon.response?.name);
  const toggleFavorite = (pokemon: string) => isPokemonInFavorites ? removeFavorite(pokemon) : addFavorite(pokemon);
  const showPokemon = (pokemon: string) => {
    setPokemonInput(pokemon);
    fetchPokemon(pokemon);
  }
  return (
    <PageTemplate
      header={<Logo />}
      footer={
        <Small transparent centered>
          Made with <span role="img" aria-label="Heart" aria-labelledby="">❤️</span> by <Link href="https://blog.mattianatali.dev" target="_blank">Mattia Natali</Link> · <Link href="https://github.com/matitalatina/pokespeare-docker" target="_blank">Source code</Link>
        </Small>
      }
    >
      <ParticlesBackground />
      <LimitWidth>
        <Favorites favorites={favorites} onClick={showPokemon} onRemove={removeFavorite} />
        <SpacedInput
          type="text"
          value={pokemonInput}
          onChange={(event) => setPokemonInput(event.target.value)}
          placeholder="Pokémon..." />
        <SpacedButton
          type="button"
          onClick={() => fetchPokemon(pokemonInput)}
          disabled={pokemonInput === '' || downloadedPokemon.status === 'LOADING'}>
          Find Pokémon!
          </SpacedButton>
        <ShowPokemon
          pokemonDownload={downloadedPokemon}
          action={downloadedPokemon.response?.name &&
            <Button type="button" round title="Toggle favorite" onClick={() => toggleFavorite(downloadedPokemon.response?.name || '')}>
              {isPokemonInFavorites ? '💔' : '❤️'}
            </Button>} />
      </LimitWidth>
    </PageTemplate>
  );
}



export default PokePage;