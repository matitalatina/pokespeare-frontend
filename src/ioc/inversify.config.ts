import { Container } from "inversify";
import { AxiosInstance } from "axios";
import { TYPES } from "./types";
import { getAxiosInstance } from "../services/axios.client";
import Config from "../services/config";
import FavoriteStore from "../services/favorite.store";
import BackendClient from "../services/backend.client";

const container = new Container();

container.bind<AxiosInstance>(TYPES.Axios).toConstantValue(getAxiosInstance());
container.bind<Config>(TYPES.Config).to(Config);
container.bind<BackendClient>(TYPES.BackendClient).to(BackendClient);
container.bind<FavoriteStore>(TYPES.FavoriteStore).to(FavoriteStore);

export default container;
