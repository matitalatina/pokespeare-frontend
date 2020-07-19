import axios, { AxiosInstance } from "axios";

export function getAxiosInstance(): AxiosInstance {
  return axios.create({
    timeout: 40000,
  });
}