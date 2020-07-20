import BackendClient, { PokemonResponse } from "../services/backend.client";
import { AxiosError } from "axios";
import container from "../ioc/inversify.config";
import { TYPES } from "../ioc/types";
import { useState } from "react";

export interface PokemonDownload {
  status: 'NOT_YET' | 'LOADING' | 'SUCCESS' | 'ERROR';
  response: PokemonResponse | null;
  errorResponse: AxiosError | null;
}

export interface PokemonDownloadHook {
  fetchPokemon: (pokemon: string) => Promise<void>,
  downloadedPokemon: PokemonDownload,
}

export default function useDownloadPokemon(): PokemonDownloadHook {
  const backend = container.get<BackendClient>(TYPES.BackendClient);
  const [download, setDownload] = useState<PokemonDownload>({
    status: 'NOT_YET',
    response: null,
    errorResponse: null,
  });

  const fetch = async (pokemon: string): Promise<void> => {
    try {
      setDownload({
        ...download,
        status: 'LOADING',
      });
      const response = await backend.getPokemon(pokemon.toLocaleLowerCase());
      setDownload({
        status: 'SUCCESS',
        response,
        errorResponse: null,
      });
    } catch (e) {
      console.log(e);
      setDownload({
        status: 'ERROR',
        response: null,
        errorResponse: e,
      });
    }
  };

  return {
    fetchPokemon: fetch,
    downloadedPokemon: download,
  };
}