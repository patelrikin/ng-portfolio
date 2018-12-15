export interface IClient {
  name: string;
  description: string;
  clientURL: string;
  image: string;
}

export interface IClientObj {
  image_base: string;
  clients: IClient[];
}
