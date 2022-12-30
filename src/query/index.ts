import axios from "axios";
import mockios from "mockios";
import api from "./api";
import { mockData, gauthMockData } from "./mockData";

const env = import.meta.env.VITE_NODE_ENV;

const query = env === "development" ? mockios(mockData) : api;

const gauthQuery =
  env === "development"
    ? mockios(gauthMockData)
    : axios.create({
        baseURL: import.meta.env.VITE_GAUTH_URL,
        withCredentials: true,
      });

export { query, gauthQuery };
