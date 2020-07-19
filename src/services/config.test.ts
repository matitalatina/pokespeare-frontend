import Config from "./config";

describe('Config', () => {
  let config: Config;
  let oldUrl: string;
  const url = 'https://url.com';

  beforeEach(() => {
    oldUrl = process.env.BACKEND_URL || '';
    process.env.BACKEND_URL = url;
    config = new Config();
  });

  afterEach(() => {
    process.env.BACKEND_URL = oldUrl;
  });

  it('should get backend url', () => {
    expect(config.backendUrl).toEqual(url);
  });
});