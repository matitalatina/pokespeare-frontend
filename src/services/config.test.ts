import Config from "./config";

describe('Config', () => {
  let config: Config;
  let oldUrl: string;
  const url = 'https://url.com';

  beforeEach(() => {
    oldUrl = process.env.REACT_APP_BACKEND_URL || '';
    process.env.REACT_APP_BACKEND_URL = url;
    config = new Config();
  });

  afterEach(() => {
    process.env.REACT_APP_BACKEND_URL = oldUrl;
  });

  it('should get backend url', () => {
    expect(config.backendUrl).toEqual(url);
  });
});