import { AxiosInstance } from "axios";
import Config from "./config";

export interface PokemonResponse {
  name: string,
  description: string,
}

export default class BackendClient {
  constructor(
    private readonly config: Config,
    private readonly axios: AxiosInstance,
  ) { }

  async getPokemon(pokemon: string): Promise<PokemonResponse> {
    const response = await this.axios.get<PokemonResponse>(`${this.config.backendUrl}/pokemon/${pokemon}`);
    return response.data;
  }

}