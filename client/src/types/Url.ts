export interface Url {
  _id: string;
  originalUrl: string;
  validTime: Date;
  shortUrl: string;
}
export interface CreateUrl {
  originalUrl: string;
  validTime?: number;
}
