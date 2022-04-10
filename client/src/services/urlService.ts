import axios from "axios";
import { CreateUrl } from "types";

const apiEndpoint = `http://localhost:8000/api/urls`;

export function getUrls() {
  return axios.get(apiEndpoint);
}

export function getUrl(id: string) {
  return axios.get(`${apiEndpoint}/${id}`);
}

export function addUrl(item: CreateUrl) {
  return axios.post(apiEndpoint, item);
}
