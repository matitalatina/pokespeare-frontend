import { Container } from "inversify";
import { AxiosInstance } from "axios";
import { TYPES } from "./types";
import { getAxiosInstance } from "../services/axios.client";
import Config from "../services/config";
import FavoriteStore from "../services/favorite.store";
import BackendClient from "../services/backend.client";

const container = new Container();

container.bind<AxiosInstance>(TYPES.Axios).toConstantValue(getAxiosInstance());
container.bind<Config>(TYPES.Config).toConstantValue(new Config());
container.bind<BackendClient>(TYPES.BackendClient)
  .toConstantValue(
    new BackendClient(
      container.get<Config>(TYPES.Config),
      container.get<AxiosInstance>(TYPES.Axios),
    ));
container.bind<FavoriteStore>(TYPES.FavoriteStore).toConstantValue(new FavoriteStore());

export default container;
