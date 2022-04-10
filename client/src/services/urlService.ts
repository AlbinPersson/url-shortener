import axios from "axios";
import { Url } from "types";

const apiEndpoint = `http://localhost:8000/api/urls`;

export function getUrls() {
  return axios.get(apiEndpoint);
}

export function getUrl(id: string) {
  return axios.get(`${apiEndpoint}/${id}`);
}

export function addUrl(item: Url) {
  return axios.post(apiEndpoint, item);
}
