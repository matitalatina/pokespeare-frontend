import React from "react";
import styled from "styled-components";
import { PokemonDownload } from "../../hooks/dowloadPokemon.hook";
import { Spinner } from "../atoms/Spinner";
import Card from "./Card";
import imgNotFound from "../../assets/img/404.png";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  padding: 32px 0;
  box-sizing: border-box;
  width: 100%;
`;

const ImgError = styled.img`
  width: 120px;
`;

interface ShowPokemonProps {
  pokemonDownload: PokemonDownload,
  action?: React.ReactNode,
}

const ShowPokemon = ({ pokemonDownload, action }: ShowPokemonProps) => (
  <Wrapper>
    {pokemonDownload.status === 'LOADING' && <Spinner />}
    {pokemonDownload.status === 'SUCCESS' && <Card
      title={pokemonDownload.response?.name}
      content={pokemonDownload.response?.description}
      action={action}
    ></Card>}
    {pokemonDownload.status === 'ERROR' && <Card title={pokemonDownload.errorResponse?.response?.status} content={pokemonDownload.errorResponse?.response?.statusText}>
      <ImgError src={imgNotFound} />
    </Card>}
  </Wrapper>
);

export default ShowPokemon;