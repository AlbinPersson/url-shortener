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

export function updateUrl(item: { validTime: number }, id: string) {
  return axios.put(`${apiEndpoint}/${id}`, item);
}

export function deleteUrl(id: string) {
  return axios.delete(`${apiEndpoint}/${id}`);
}
