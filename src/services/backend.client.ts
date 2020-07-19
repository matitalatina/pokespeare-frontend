import { AxiosInstance } from "axios";
import { injectable, inject } from "inversify";
import Config from "./config";
import { TYPES } from "../ioc/types";

export interface PokemonResponse {
  name: string,
  description: string,
}

@injectable()
export default class BackendClient {
  constructor(
    @inject(TYPES.Config) private readonly config: Config,
    @inject(TYPES.Axios) private readonly axios: AxiosInstance,
  ) { }

  async getPokemon(pokemon: string): Promise<PokemonResponse> {
    const response = await this.axios.get<PokemonResponse>(`${this.config.backendUrl}/pokemon/${pokemon}`);
    return response.data;
  }

}