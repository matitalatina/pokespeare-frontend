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

const SpacedInput = styled(Input)`
  margin: 32px 0;
`;

const SpacedButton = styled(Button)`
  margin: 0 0 16px 0;
`;


const PokePage = () => {
  const [pokemonInput, setPokemonInput] = useState('');
  const { downloadedPokemon, fetchPokemon } = useDownloadPokemon();
  return (
    <PageTemplate
      header={<Logo />}
      footer={
        <Small transparent centered>
          Made with <span role="img" aria-label="Heart" aria-labelledby="">❤️</span> by <Link href="https://www.mattianatali.it" target="_blank">Mattia Natali</Link> · <Link href="https://github.com/matitalatina/pokespeare-frontend" target="_blank">Source code</Link>
        </Small>
      }
      contentCentered
    >
      <form onSubmit={(event) => fetchPokemon(pokemonInput)}>
        <SpacedInput type="text" value={pokemonInput} onChange={(event) => setPokemonInput(event.target.value)} placeholder="Pokémon..."></SpacedInput>
      </form>
      <SpacedButton type="button" onClick={() => { }}>Find Pokémon!</SpacedButton>
      <span>{downloadedPokemon.status} {downloadedPokemon.response}</span>
      <ParticlesBackground />
    </PageTemplate>
  );
}



export default PokePage;