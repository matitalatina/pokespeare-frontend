import BackendClient from "./backend.client";
import { AxiosInstance } from "axios";

import { mock, when, instance } from 'ts-mockito';
import Config from "./config";

describe("BackendClient", () => {
  const axios: AxiosInstance = mock<AxiosInstance>();
  const config: Config = mock<Config>();
  let client: BackendClient;

  beforeEach(() => {
    client = new BackendClient(
      instance(config),
      instance(axios),
    );
  })

  it('should be defined', () => {
    expect(client).toBeDefined();
  });

  it('should fetch pokemon from backend', async () => {
    const backendUrl = 'http://url.com';
    const pokemon = 'pikachu';
    const expectedResponse = {
      name: pokemon,
      description: 'text',
    };
    when(config.backendUrl).thenReturn(backendUrl);
    when(axios.get(`${backendUrl}/pokemon/${pokemon}`)).thenResolve({
      data: expectedResponse,
      status: 200,
      statusText: '',
      headers: {},
      config: {}
    });
    expect(await client.getPokemon(pokemon)).toEqual(expectedResponse);
  });

});