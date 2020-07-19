import { getAxiosInstance } from "./axios.client";

describe('Axios', () => {
  it('should return an axios instance', () => {
    const instance = getAxiosInstance();
    expect(instance).toBeDefined();
    expect(instance.get).toBeDefined();
  })
});