import { Url } from "types/Url";

export interface Column {
  name: String;
  content: (item: Url) => any;
}
