import axios from "axios";
import mockios from "mockios";
import api from "./api";
import { mockData, gauthMockData } from "./mockData";

const query = process.env.NODE_ENV === "development" ? mockios(mockData) : api;

const gauthQuery =
  process.env.NODE_ENV === "development"
    ? mockios(gauthMockData)
    : axios.create({
        baseURL: import.meta.env.VITE_GAUTH_URL,
      });

export { query, gauthQuery };
