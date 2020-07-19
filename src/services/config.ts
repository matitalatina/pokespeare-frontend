import { injectable } from "inversify";

@injectable()
export default class Config {
  get backendUrl(): string {
    const url = process.env.BACKEND_URL;
    if (!url) {
      throw new Error('BACKEND_URL not defined')
    }
    return url;
  }
}
