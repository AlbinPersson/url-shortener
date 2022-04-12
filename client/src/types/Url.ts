export interface Url {
  _id: string;
  originalUrl: string;
  validTime: Date;
}
export interface CreateUrl {
  originalUrl: string;
  validTime?: Date;
}
