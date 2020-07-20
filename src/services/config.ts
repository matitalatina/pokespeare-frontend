export default class Config {
  get backendUrl(): string {
    const url = process.env.REACT_APP_BACKEND_URL;
    if (!url) {
      throw new Error('REACT_APP_BACKEND_URL not defined')
    }
    return url;
  }
}
